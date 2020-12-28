#!/usr/bin/env node

import fs from 'fs';
import yargs from 'yargs';
import { homeKitCategory, getHomeKitCategoryId } from './category';
import { generateQrCodeAsSvg } from './qrcode';
import { createSvg, getFilename } from './utils';

const argv = yargs(process.argv.slice(2))
  .options({
    category: {
      alias: 'c',
      choices: Array.from(homeKitCategory.keys()),
      demandOption: true,
      default: 'other',
      type: 'string' || 'number',
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
      type: 'string' || 'number',
    },
    setupId: {
      alias: 's',
      demandOption: false,
      default: '',
      type: 'string',
    },
  })
  .usage('Usage: homekit-qrcode [options]')
  .example(
    'npx homekit-qrcode --category=switch --pairingCode=123-45-678',
    'generates an homekit paring code label'
  ).argv;

const main = async () => {
  const { setupId } = argv;

  const categoryId = getHomeKitCategoryId(argv['category']);
  const paringCode = argv['pairingCode'].replace(/-/g, '');
  const filename = getFilename(argv['output']);

  const qrCodeSvg = await generateQrCodeAsSvg(categoryId, paringCode, setupId);

  fs.writeFile(
    `./${filename}`,
    createSvg(paringCode, qrCodeSvg),
    'utf8',
    (error) => {
      if (error) {
        return console.log(error);
      }
      return console.log('HomeKit QR Code successfully generated');
    }
  );
};

main();
