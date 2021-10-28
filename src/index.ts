#!/usr/bin/env node
import fs from 'fs';
import { CATEGORIES } from './homekit';
import { generateQrCodeAsSvg } from './qrcode';
import { createFile } from './file';
import { argv } from './yargs';

const main = async () => {
  const { category, name, output, pairingCode, setupId } = argv;

  const categoryId = CATEGORIES.get(category) as number;
  const qrCodeSvg = await generateQrCodeAsSvg(categoryId, pairingCode, setupId);
  const file = await createFile(pairingCode, qrCodeSvg, output);

  fs.writeFile(`${name}.${output}`, file, 'utf8', (error) => {
    if (error) {
      return console.error(error);
    }
    return console.log('HomeKit QR Code successfully generated');
  });
};

main();
