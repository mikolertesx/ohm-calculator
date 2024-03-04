import React from 'react';
import { ColorModel, ToleranceModel } from '@ohm-calculate/api-interface';

import Band from '../Band/band';
import { ColorCollection } from '../../views/main-view';

import styles from './resistance.module.scss';

type ResistanceProps = {
  resistanceA?: ColorModel;
  resistanceB?: ColorModel;
  resistanceC?: ColorModel;
  tolerance?: ToleranceModel;
  onChange: (newColors: ColorCollection) => void;
};

const Resistance = ({
  resistanceA,
  resistanceB,
  resistanceC,
  tolerance,
  onChange,
}: ResistanceProps) => {


  return (
    <div className={styles['resistance']}>
      <Band
        color={resistanceA?.color}
        label={resistanceA?.name}
        textColor={resistanceA?.textColor}
      />
      <Band
        color={resistanceB?.color}
        label={resistanceB?.name}
        textColor={resistanceB?.textColor}
      />
      <Band
        color={resistanceC?.color}
        label={resistanceC?.name}
        textColor={resistanceC?.textColor}
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
