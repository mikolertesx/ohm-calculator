import {
  PostCalculateRequest,
  PostCalculateResponse,
} from '@ohm-calculate/api-interface';
import { useEffect, useState } from 'react';

type useResistanceProps = {
  resistanceA?: string;
  resistanceB?: string;
  resistanceC?: string;
  tolerance?: string;
};

const useResistance = ({
  resistanceA,
  resistanceB,
  resistanceC,
  tolerance,
}: useResistanceProps) => {
  const [value, setValue] = useState([NaN, NaN]);

  useEffect(() => {
    const getResistanceValue = async () => {
      const requestBody: PostCalculateRequest = {
        bandAColor: resistanceA!,
        bandBColor: resistanceB!,
        bandCColor: resistanceC!,
        bandDColor: tolerance!,
      };

      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const json = (await response.json()) as PostCalculateResponse;

      const { result } = json;

      setValue(result);
    };

    getResistanceValue();
  }, [resistanceA, resistanceB, resistanceC, tolerance]);

  // const resistance = useMemo(() => {
  //   if (!resistanceA || !resistanceB || !resistanceC || !tolerance) {
  //     return NaN;
  //   }

  //   return resistanceCalculator.CalculateOhmValue(
  //     resistanceA,
  //     resistanceB,
  //     resistanceC,
  //     tolerance
  //   );
  // }, [resistanceA, resistanceB, resistanceC, tolerance]);

  return value;
};

export default useResistance;
