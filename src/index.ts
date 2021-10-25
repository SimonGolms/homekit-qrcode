#!/usr/bin/env node
import fs from 'fs';
import { CATEGORIES } from './homekit';
import { generateQrCodeAsSvg } from './qrcode';
import { createLabelAsSvg, getFilename } from './utils';
import { argv } from './yargs';

const main = async () => {
  const { category, output, pairingCode, setupId } = argv;

  const categoryId = CATEGORIES.get(category);
  const filename = getFilename(output);
  const qrCodeSvg = await generateQrCodeAsSvg(categoryId, pairingCode, setupId);
  const file = createLabelAsSvg(pairingCode, qrCodeSvg);

  fs.writeFile(`./${filename}`, file, 'utf8', (error) => {
    if (error) {
      return console.error(error);
    }
    return console.log('HomeKit QR Code successfully generated');
  });
};

main();
