import yargs from 'yargs/yargs';
import { CATEGORIES } from './homekit';
import { isNumber, OUTPUT_FORMATS, OUTPUT_FORMAT_DEFAULT } from './utils';

export const argv = yargs(process.argv.slice(2))
  // Attempt to detect the os locale
  .detectLocale(false)
  // Format usage output
  .wrap(null)
  .options({
    category: {
      alias: 'c',
      choices: Array.from(CATEGORIES.keys()),
      describe: 'category of the HomeKit accessory',
      demandOption: true,
      type: 'string',
    },
    help: {
      alias: 'h',
    },
    name: {
      alias: 'n',
      demandOption: false,
      describe: 'name of the generated file',
      default: 'homekit-qrcode',
      type: 'string',
    },
    output: {
      alias: 'o',
      choices: OUTPUT_FORMATS,
      demandOption: true,
      describe: 'format of the generated file',
      default: OUTPUT_FORMAT_DEFAULT,
    },
    pairingCode: {
      alias: 'p',
      demandOption: true,
      describe: '8 digits pairing code',
      type: 'string',
    },
    setupId: {
      alias: 's',
      demandOption: true,
      type: 'string',
    },
  })
  .check(({ pairingCode }) => {
    if (pairingCode.length === 8 && pairingCode.split('').every((char) => isNumber(char))) {
      return true;
    } else {
      throw new Error('Pairing Code must be specified with 8 digits');
    }
  })
  .usage('Usage: homekit-qrcode [options]')
  .example(
    'npx homekit-qrcode --category=switch --pairingCode=84131633 --setupId=3QYT',
    'Generate a QR code for a HomeKit switch',
  )
  .example(
    'npx homekit-qrcode --category=switch --pairingCode=84131633 --setupId=3QYT --name=switch --output=png',
    'Generate a QR code for a HomeKit switch as switch.png',
  )
  .parseSync();
