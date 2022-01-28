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
    console.log(
      '\x1b[33m%s\x1b[0m',
      'Thank you for using homekit-qrcode. Unfortunately, this package is deprecated and no longer maintained. Please use the successor:',
    );
    console.log('\x1b[36m%s\x1b[0m', '\n  npx homekit-code qrcode --category=switch --pairingCode=84131633 --setupId=3QYT\n');

    return console.log('HomeKit QR Code successfully generated');
  });
};

main();
