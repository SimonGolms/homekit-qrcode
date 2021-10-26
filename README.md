# HomeKit QR Code

<p>
    <a href="https://www.npmjs.com/package/homekit-qrcode" target="_blank">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/homekit-qrcode.svg" />
  </a>
  <a href="https://github.com/simongolms/homekit-qrcode#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/simongolms/homekit-qrcode/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/simongolms/homekit-qrcode/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/simongolms/homekit-qrcode" />
  </a>
    <a href="https://conventionalcommits.org" target="_blank">
    <img alt="Conventional Commits" src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" />
  </a>
    <a href="#badge">
    <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  </a>
</p>

> Generate a HomeKit pairing QR code label for your HomeKit accessory

## Usage

### CLI

```sh
Usage: homekit-qrcode [options]

Options:
  -h, --help                              [boolean]
      --version      Show version number  [boolean]
  -c, --category                          [string] [required] [choices: "other", "bridge", "fan", "garage", "lightbulb", "doorLock", "outlet", "switch", "thermostat", "sensor", "securitySystem", "door", "window", "windowCovering", "programmableSwitch", "rangeExtender", "ipCamera", "videoDoorBell", "airPurifier", "heater", "airConditioner", "humidifier", "dehumidifier", "appleTv", "speaker", "airport", "sprinkler", "faucet", "showerHead", "television", "targetController"]
  -o, --output                            [string] [default: "qrcode.svg"]
  -p, --pairingCode                       [string] [required]
  -s, --setupId                           [string] [default: ""]

Examples:
  npx homekit-qrcode --category=switch --pairingCode=01234567  Generate a QR code for a HomeKit switch
```

### Output

![qrcode](./docs/qrcode.png)

---

## Local Development

### Install Dependencies

```sh
npm install
```

### Start Development Server

```sh
npm run start -- --category=switch --pairingCode=11122333
```

### Build

To build `homekit-qrcode` for production, run:

```sh
npm run build
```

### Run Tests

```sh
npm test
```

### Repair

This command may be useful when obscure errors or issues are encountered. It removes and recreates dependencies of your project.

```sh
npm run repair
```

---

## Author

**Simon Golms**

- Digital Card: `npx simongolms`
- Github: [@SimonGolms](https://github.com/SimonGolms)
- Website: [gol.ms](https://gol.ms)

## Show your support

Give a ⭐️ if this project helped you!

## License

Copyright © 2021 [Simon Golms](https://github.com/simongolms).<br />
This project is [MIT](https://github.com/simongolms/homekit-qrcode/blob/master/LICENSE) licensed.

## Resources

- https://github.com/maximkulkin/esp-homekit
- https://developer.apple.com/documentation/homekit/hmaccessorycategory/accessory_category_types#overview
- https://developer.apple.com/documentation/homekit/testing_your_app_with_the_homekit_accessory_simulator
