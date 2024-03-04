export type ColorModel = {
  name: string;
  number: number;
  color: string;
  textColor: string;
};

export type ToleranceModel = {
  name: string;
  variation: number;
  color: string;
  textColor: string;
};

export type GetResistanceColorsResponse = {
  data: ColorModel[];
};

export type GetToleranceColorsResponse = {
  data: ToleranceModel[];
};
