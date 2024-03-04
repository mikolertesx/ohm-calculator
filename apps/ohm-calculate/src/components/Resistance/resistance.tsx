import React from 'react';
import { ColorModel, ToleranceModel } from '@ohm-calculate/api-interface';

import Band from '../Band/band';

import styles from './resistance.module.scss';

type ResistanceProps = {
  resistanceA?: ColorModel;
  resistanceB?: ColorModel;
  resistanceC?: ColorModel;
  tolerance?: ToleranceModel;
  // onChange: (newColors: ColorCollection) => void;
  onClick: (position: number) => void;
};

const Resistance = ({
  resistanceA,
  resistanceB,
  resistanceC,
  tolerance,
  onClick,
}: ResistanceProps) => {
  return (
    <div className={styles['resistance']}>
      <Band
        color={resistanceA?.color}
        label={resistanceA?.name}
        textColor={resistanceA?.textColor}
        onClick={() => onClick(0)}
      />
      <Band
        color={resistanceB?.color}
        label={resistanceB?.name}
        textColor={resistanceB?.textColor}
        onClick={() => onClick(1)}
      />
      <Band
        color={resistanceC?.color}
        label={resistanceC?.name}
        textColor={resistanceC?.textColor}
        onClick={() => onClick(2)}
      />
      <Band
        color={tolerance?.color}
        label={tolerance?.name}
        textColor={tolerance?.textColor}
      />
    </div>
  );
};

export default Resistance;
