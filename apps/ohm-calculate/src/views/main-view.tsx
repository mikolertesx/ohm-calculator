import React, { useEffect, useState } from 'react';
import Resistance from '../components/Resistance/resistance';
import {
  ColorModel,
  ToleranceModel,
  GetResistanceColorsResponse,
} from '@ohm-calculate/api-interface';

export type ColorCollection = [
  ColorModel,
  ColorModel,
  ColorModel,
  ToleranceModel
];

const MainView = () => {
  const [data, setData] = useState<ColorCollection>();

  const onChangeHandler = (colors: ColorCollection) => {
    setData(colors);
  };

  useEffect(() => {
    // TODO Call from api.
    // Update setData
    const updateData = async () => {
      const response = await fetch('/api/resistance-colors');
      const jsonData = (await response.json()) as GetResistanceColorsResponse;
      const [first, second, third] = jsonData.data;
      const tolerance = {
        name: 'gold',
        variation: 5,
        color: '#c0891f',
        textColor: '#FFFFFF',
      };
      setData([first, second, third, tolerance]);
    };

    updateData();
  }, []);

  if (!data) {
    return null;
  }

  return (
    <Resistance
      resistanceA={data[0]}
      resistanceB={data[1]}
      resistanceC={data[2]}
      tolerance={data[3]}
      onChange={onChangeHandler}
    />
  );
};

export default MainView;
