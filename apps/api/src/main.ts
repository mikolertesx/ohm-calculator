/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import 'reflect-metadata';

import './initializeDB';

import * as path from 'path';

import express, { Response, Request, json } from 'express';

import {
  GetResistanceColorsResponse,
  GetToleranceColorsResponse,
  PostCalculateRequest,
  PostCalculateResponse,
} from '@ohm-calculate/api-interface';

import resistances from './data/resistances';
import tolerances from './data/tolerances';
import OhmValueCalculator from './logic/OhmValueCalculator';

const app = express();

app.use(json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

// TODO Send api calls to a different folder.
app.get(
  '/api/resistance-colors',
  (_req, res: Response<GetResistanceColorsResponse>) => {
    return res.send({
      data: resistances,
    });
  }
);

// TODO Send api calls to a different folder.
app.get(
  '/api/tolerance-colors',
  (req, res: Response<GetToleranceColorsResponse>) => {
    return res.send({
      data: tolerances,
    });
  }
);

// TODO Send api calls to a different folder.
app.post(
  '/api/calculate',
  (
    req: Request<object, object, PostCalculateRequest>,
    res: Response<PostCalculateResponse>
  ) => {
    const { bandAColor, bandBColor, bandCColor, bandDColor } = req.body;
    const calculator = new OhmValueCalculator();

    const result = calculator.CalculateOhmValue(
      bandAColor,
      bandBColor,
      bandCColor,
      bandDColor
    );

    console.log({
      bandAColor,
      bandBColor,
      bandCColor,
      bandDColor,
      result,
    });

    return res.send({
      result,
    });
  }
);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
