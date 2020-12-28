export const homeKitCategory = new Map([
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

export const getHomeKitCategoryId = (category: string | number): number => {
  if (typeof category === 'number') {
    return category;
  }

  return homeKitCategory.get(category.toUpperCase()) || 1;
};
