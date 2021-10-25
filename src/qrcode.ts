import qrcode from 'qrcode';
import { createSetupUri } from './homekit';

const QR_CODE_STRING_OPTIONS: qrcode.QRCodeToStringOptions = {
  errorCorrectionLevel: 'Q',
  margin: 0,
  type: 'svg',
  version: 2,
};

export const generateQrCodeAsSvg = async (category = 0, password = '', setupId = ''): Promise<string> => {
  const setupUri = createSetupUri(category, password, setupId);
  return qrcode.toString(setupUri, QR_CODE_STRING_OPTIONS);
};
