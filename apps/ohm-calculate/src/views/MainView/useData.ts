import { useState, useEffect } from 'react';

import {
  ColorModel,
  GetResistanceColorsResponse,
  GetToleranceColorsResponse,
  ToleranceModel,
} from '@ohm-calculate/api-interface';

const useData = () => {
  const [colors, setColors] = useState<ColorModel[]>([]);
  const [tolerances, setTolerances] = useState<ToleranceModel[]>([]);

  useEffect(() => {
    // Update setData
    const updateData = async () => {
      const response = await fetch('/api/resistance-colors');
      const jsonData = (await response.json()) as GetResistanceColorsResponse;
      setColors(jsonData.data);
    };

    updateData();
  }, []);

  useEffect(() => {
    const updateData = async () => {
      const response = await fetch('/api/tolerance-colors');
      const jsonData = (await response.json()) as GetToleranceColorsResponse;
      setTolerances(jsonData.data);
    };

    updateData();
  }, []);

  return { colors, tolerances };
};

export default useData;
