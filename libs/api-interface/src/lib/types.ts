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

interface IOhmValueCalculator {
  /**
   * @function CalculateOhmValue
   * @param bandAColor The color of the first figure of component value band.
   * @param bandBColor The color of the second significant figure band.
   * @param bandCColor The color of the decimal multiplier band.
   * @param bandDColor The color of the tolerance value band.
   **/

  CalculateOhmValue(
    /* Band A Color. */
    bandAColor: Colors,
    bandBColor: Colors,
    bandCColor: Colors,
    bandDColor: Tolerance
  ): number;
}

export class OhmValueCalculator implements IOhmValueCalculator {
  CalculateOhmValue(
    bandAColor: Colors,
    bandBColor: Colors,
    bandCColor: Colors,
    bandDColor: Tolerance
  ): number {
    throw Error('Not implemented error.');
  }
}
