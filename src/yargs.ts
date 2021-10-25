import yargs from 'yargs/yargs';
import { CATEGORIES } from './homekit';
import { isNumber } from './utils';

export const argv = yargs(process.argv.slice(2))
  // Attempt to detect the os locale
  .detectLocale(false)
  // Format usage output
  .wrap(null)
  .options({
    category: {
      alias: 'c',
      choices: Array.from(CATEGORIES.keys()),
      demandOption: true,
      type: 'string',
    },
    help: {
      alias: 'h',
    },
    output: {
      alias: 'o',
      demandOption: false,
      default: 'qrcode.svg',
      type: 'string',
    },
    pairingCode: {
      alias: 'p',
      demandOption: true,
      type: 'string',
    },
    setupId: {
      alias: 's',
      demandOption: false,
      default: '',
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
  .example('npx homekit-qrcode --category=switch --pairingCode=01234567', 'Generate a QR code for a HomeKit switch')
  .parseSync();
