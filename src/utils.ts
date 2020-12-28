export const getFilename = (output: string): string => {
  if (output.endsWith('.svg')) {
    return output;
  }
  return `${output}.svg`;
};

export const createSvg = (pairingCode: string, qrCode: string) => {
  return `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg viewBox="0 0 400 520" xmlns="http://www.w3.org/2000/svg">
  <title>HomeKit QR Code</title>
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&amp;display=swap');
    </style>
  </defs>
  <defs>
    <svg
      id="iconHomekit"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 39 36"
      shape-rendering="crispEdges"
    >
      <path
        d="M46.19,22.78l-4.26-3.39v-6c0-.44-.17-.57-.48-.57H38.76c-.36,0-.58.07-.58.57v3h0L28,8.39a1.27,1.27,0,0,0-1.83,0L8,22.78c-.64.5-.46,1.23.25,1.23H11.6V42.34c0,.83.25,1.3.78,1.51a2.11,2.11,0,0,0,.82.15H41a2.14,2.14,0,0,0,.82-.15c.53-.21.78-.68.78-1.51V24h3.37C46.65,24,46.83,23.28,46.19,22.78Zm-32.37-.35a2.53,2.53,0,0,1,1-2.09c.51-.41,11.2-8.71,11.5-8.95a1.33,1.33,0,0,1,.8-.34,1.35,1.35,0,0,1,.81.34l11.49,9a2.53,2.53,0,0,1,1,2.09V40.15A1.27,1.27,0,0,1,39,41.58H15.14a1.26,1.26,0,0,1-1.32-1.43Z"
        transform="translate(-7.58 -8)"
      />
      <path
        d="M18.77,37.71H35.4a.94.94,0,0,0,1-1.07V23.92a1.64,1.64,0,0,0-.66-1.5l-8-6.37a1,1,0,0,0-.62-.24,1,1,0,0,0-.61.24l-8,6.37a1.64,1.64,0,0,0-.66,1.5V36.64A.94.94,0,0,0,18.77,37.71Zm1.29-12.95a1.22,1.22,0,0,1,.47-1.16l6-4.78a.82.82,0,0,1,.51-.2.85.85,0,0,1,.52.2c.16.14,5.73,4.53,6,4.78a1.22,1.22,0,0,1,.47,1.16v9.7a.74.74,0,0,1-.81.85H20.87a.74.74,0,0,1-.81-.85Z"
        transform="translate(-7.58 -8)"
      />
      <path
        d="M23.71,32.2h6.75c.3,0,.52-.1.52-.54V26.22a1,1,0,0,0-.37-.8L27.43,23a.52.52,0,0,0-.69,0l-3.18,2.44a1,1,0,0,0-.37.8v5.44C23.19,32.1,23.41,32.2,23.71,32.2Zm1.78-5.13a.39.39,0,0,1,.16-.33l1.29-1a.24.24,0,0,1,.29,0s1.24,1,1.29,1a.39.39,0,0,1,.16.33v2.57c0,.18-.09.22-.22.22H25.71c-.12,0-.22,0-.22-.22Z"
        transform="translate(-7.58 -8)"
      />
    </svg>
  </defs>
  <defs>
    ${qrCode}
  </defs>

  <rect width="400" height="520" fill="#000000" rx="20" />
  <rect x="5" y="5" width="390" height="510" fill="#ffffff" rx="15" />
  <use
    href="#iconHomekit"
    stroke="#000"
    stroke-width="0.5"
    width="110"
    x="20"
    y="-190"
  />
  <text
    font-family="Roboto, sans-serif"
    font-size="60"
    textLength="220"
    x="150"
    y="60"
  >
    ${pairingCode.slice(0, 4)}
  </text>
  <text
    font-family="Roboto, sans-serif"
    font-size="60"
    textLength="220"
    x="150"
    y="120"
  >
  ${pairingCode.slice(4)}
  </text>
  <use href="#qrCode" width="350" x="25" y="60" />
</svg>
`;
};
