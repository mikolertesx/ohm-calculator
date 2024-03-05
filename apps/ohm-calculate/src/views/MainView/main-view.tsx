import React, { useEffect, useState } from 'react';
import Resistance from '../../components/Resistance/resistance';
import { ColorModel, ToleranceModel } from '@ohm-calculate/api-interface';
import ResistancePickerModal from '../../components/Modals/ResistancePickerModal/resistance-picker-modal';
import TolerancePickerModal from '../../components/Modals/TolerancePickerModal/tolerance-picker-modal';
import useData from './useData';

export type ColorCollection = [
  ColorModel,
  ColorModel,
  ColorModel,
  ToleranceModel
];

const MainView = () => {
  const [colorCollection, setColorCollection] =
    useState<ColorCollection | null>(null);

  const [selectedResistance, setSelectedResistance] = useState<number | null>(
    null
  );

  const { colors, tolerances } = useData();
  const [showColorModal, setShowColorModal] = useState(false);
  const [showToleranceModal, setShowToleranceModal] = useState(false);

  // Pick default values.
  useEffect(() => {
    if (!colors || !tolerances) return;

    const [first, second, third] = colors;
    const [defaultTolerance] = tolerances;

    setColorCollection([first, second, third, defaultTolerance]);
  }, [colors, tolerances]);

  const pickColorHandler = (color?: ColorModel) => {
    if (color && colorCollection) {
      setColorCollection((prevData) => {
        (prevData as ColorCollection)[selectedResistance as number] = color;

        return prevData;
      });
    }
    setShowColorModal(false);
  };

  const pickResistanceHandler = (tolerance?: ToleranceModel) => {
    if (tolerance && colorCollection) {
      setColorCollection((prevData) => {
        (prevData as ColorCollection)[3] = tolerance;

        return prevData;
      });
    }

    setShowToleranceModal(false);
  };

  if (!colorCollection) {
    return null;
  }

  const currentlySelectedResistance =
    selectedResistance !== null
      ? colorCollection[selectedResistance].name
      : undefined;

  const currentlySelectedTolerance = colorCollection[3]?.name;

  return (
    <>
      <ResistancePickerModal
        colors={colors}
        show={showColorModal}
        onPick={pickColorHandler}
        currentlySelected={currentlySelectedResistance}
      />
      <TolerancePickerModal
        tolerances={tolerances}
        show={showToleranceModal}
        onPick={pickResistanceHandler}
        currentlySelected={currentlySelectedTolerance}
      />
      <Resistance
        resistanceA={colorCollection[0]}
        resistanceB={colorCollection[1]}
        resistanceC={colorCollection[2]}
        tolerance={colorCollection[3]}
        onClickResistance={(position) => {
          setShowColorModal(true);
          setSelectedResistance(position);
        }}
        onClickTolerance={() => {
          setShowToleranceModal(true);
        }}
      />
    </>
  );
};

export default MainView;
