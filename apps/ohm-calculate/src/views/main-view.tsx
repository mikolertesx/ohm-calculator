import React, { useEffect, useState } from 'react';
import Resistance from '../components/Resistance/resistance';
import {
  ColorModel,
  ToleranceModel,
  GetResistanceColorsResponse,
} from '@ohm-calculate/api-interface';
import ResistancePickerModal from '../components/Modals/ResistancePickerModal/resistance-picker-modal';

export type ColorCollection = [
  ColorModel,
  ColorModel,
  ColorModel,
  ToleranceModel
];

const MainView = () => {
  const [data, setData] = useState<ColorCollection>();
  const [selectedResistance, setSelectedResistance] = useState<number | null>(
    null
  );

  const [showModal, setShowModal] = useState(false);
  const [colors, setColors] = useState<ColorModel[]>([]);

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
      setColors(jsonData.data);
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
    <>
      <ResistancePickerModal
        colors={colors}
        show={showModal}
        onPick={(color) => {
          if (color && data) {
            setData((prevData) => {
              (prevData as ColorCollection)[selectedResistance as number] =
                color;

              return prevData;
            });
          }
          setShowModal(false);
        }}
        currentlySelected={
          selectedResistance !== null
            ? data[selectedResistance].name
            : undefined
        }
      />
      <Resistance
        resistanceA={data[0]}
        resistanceB={data[1]}
        resistanceC={data[2]}
        tolerance={data[3]}
        onClick={(position) => {
          setShowModal(true);
          setSelectedResistance(position);
        }}
      />
    </>
  );
};

export default MainView;
