export type Colors =
  | 'black'
  | 'brown'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'violet'
  | 'grey'
  | 'white';

export type Tolerance = 'gold' | 'silver' | 'none';

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

export interface IOhmValueCalculator {
  /**
   * @function CalculateOhmValue
   * @param bandAColor The color of the first figure of component value band.
   * @param bandBColor The color of the second significant figure band.
   * @param bandCColor The color of the decimal multiplier band.
   * @param bandDColor The color of the tolerance value band.
   **/

  CalculateOhmValue(
    bandAColor: string,
    bandBColor: string,
    bandCColor: string,
    bandDColor: string
  ): [number, number, number];
}
