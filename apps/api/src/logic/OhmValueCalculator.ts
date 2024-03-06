import {
  Colors,
  IOhmValueCalculator,
  Tolerance,
} from '@ohm-calculate/api-interface';

import { colorDictionary } from '../data/resistances';
import { ToleranceDictionary } from '../data/tolerances';

class OhmValueCalculator implements IOhmValueCalculator {
  getToleranceFromColor(tolerance: string) {
    if (tolerance in ToleranceDictionary) {
      return ToleranceDictionary[tolerance as Tolerance].variation;
    }

    return NaN;
  }

  getResistanceFromColor(color: string) {
    if (color in colorDictionary) {
      return colorDictionary[color as Colors].number;
    }

    return NaN;
  }

  CalculateOhmValue(
    bandAColor: string,
    bandBColor: string,
    bandCColor: string,
    bandDColor: string
  ): [number, number, number] {
    const colorCodes = [bandAColor, bandBColor, bandCColor];
    const [firstColorValue, secondColorValue, multiplier] = colorCodes.map(
      (colorCode) => this.getResistanceFromColor(colorCode)
    );

    const tolerance = this.getToleranceFromColor(bandDColor);

    let zeroString = '';

    for (let i = 0; i < multiplier; i++) {
      zeroString += '0';
    }

    const totalValue = Number(
      `${firstColorValue}${secondColorValue}${zeroString}`
    );

    const percentage = tolerance / 100;
    console.log({ lowerValue: 1 + percentage, upperValue: 1 - percentage });
    const maxValue = totalValue * (1 + percentage);
    const minValue = totalValue * (1 - percentage);

    return [minValue, totalValue, maxValue];
  }
}

export default OhmValueCalculator;
