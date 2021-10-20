import QRCode from 'qrcode';

const generateHomeKitSetupUri = (
  category = 0,
  password = '',
  setupId = '',
  version = 0,
  reserved = 0,
  flags = 2,
): string => {
  let payload: bigint | number = 0;
  payload = payload | (version & 0x7);

  payload = payload << 4;
  payload = payload | (reserved & 0xf); // reserved bits

  payload = payload << 8;
  payload = payload | (category & 0xff);

  payload = payload << 4;
  payload = payload | (flags & 0xf);

  payload = BigInt(payload) << BigInt(27);
  payload = BigInt(payload) | BigInt(Number(password.replace(/-/g, '')) & 0x7fffffff);

  const payloadBase36 = payload.toString(36).toUpperCase().padStart(9, '0');

  return `X-HM://${payloadBase36}${setupId}`;
};

export const generateQrCodeAsSvg = async (category = 0, password = '', setupId = ''): Promise<string> => {
  return QRCode.toString(generateHomeKitSetupUri(category, password, setupId), {
    errorCorrectionLevel: 'Q',
    margin: 0,
    type: 'svg',
    version: 2,
  }).then((value) => {
    // Add an id to the svg output
    return value.replace(/<svg/, '<svg id="qrCode"');
  });
};
