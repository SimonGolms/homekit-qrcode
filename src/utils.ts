export const OUTPUT_FORMATS = ['svg', 'png', 'jpeg'] as const;
export const OUTPUT_FORMAT_DEFAULT = OUTPUT_FORMATS[0];

export type OutputFormat = typeof OUTPUT_FORMATS[number];

export const isNumber = (value: string) => {
  return !isNaN(Number(value));
};
