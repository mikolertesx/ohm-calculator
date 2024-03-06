// TODO Load this from a database instead.

import { Tolerance, ToleranceModel } from "@ohm-calculate/api-interface";

const tolerances = [
  {
    name: 'gold',
    variation: 5,
    color: '#c0891f',
    textColor: '#FFFFFF',
  },
  {
    name: 'silver',
    variation: 10,
    color: '#818382',
    textColor: '#FFFFFF',
  },
  {
    name: 'no color',
    variation: 20,
    color: '#FFFFFF',
    textColor: '#000000',
  },
];

type ToleranceDictionary = Record<Tolerance, ToleranceModel>;

export const ToleranceDictionary: ToleranceDictionary = tolerances.reduce(
  (prev, cur) => ({ ...prev, [cur.name]: cur }),
  {} as ToleranceDictionary
);

export default tolerances;
