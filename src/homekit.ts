// KUDOS: https://github.com/maximkulkin/esp-homekit/blob/0f3ef2ac2872ffe64dfe4e5d929420af327d48a5/include/homekit/types.h#L41
export const CATEGORIES = new Map([
  ['other', 1],
  ['bridge', 2],
  ['fan', 3],
  ['garage', 4],
  ['lightbulb', 5],
  ['doorLock', 6],
  ['outlet', 7],
  ['switch', 8],
  ['thermostat', 9],
  ['sensor', 10],
  ['securitySystem', 11],
  ['door', 12],
  ['window', 13],
  ['windowCovering', 14],
  ['programmableSwitch', 15],
  ['rangeExtender', 16],
  ['ipCamera', 17],
  ['videoDoorBell', 18],
  ['airPurifier', 19],
  ['heater', 20],
  ['airConditioner', 21],
  ['humidifier', 22],
  ['dehumidifier', 23],
  ['appleTv', 24],
  ['speaker', 26],
  ['airport', 27],
  ['sprinkler', 28],
  ['faucet', 29],
  ['showerHead', 30],
  ['television', 31],
  ['targetController', 32],
]);

// KUDOS: https://github.com/maximkulkin/esp-homekit/blob/0f3ef2ac2872ffe64dfe4e5d929420af327d48a5/tools/gen_qrcode#L18
export const createSetupUri = (
  category: number,
  password: string,
  setupId: string,
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
  payload = BigInt(payload) | BigInt(Number(password) & 0x7fffffff);

  const payloadBase36 = payload.toString(36).toUpperCase().padStart(9, '0');

  return `X-HM://${payloadBase36}${setupId}`;
};
