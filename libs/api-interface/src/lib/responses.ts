import { ColorModel, ToleranceModel } from './models';

export type GetResistanceColorsResponse = {
  data: ColorModel[];
};

export type GetToleranceColorsResponse = {
  data: ToleranceModel[];
};

export type PostCalculateResponse = {
  result: [number, number, number];
};
