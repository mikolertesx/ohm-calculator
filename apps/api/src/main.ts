/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import express, { Response } from 'express';

import {
  GetResistanceColorsResponse,
  GetToleranceColorsResponse,
} from '@ohm-calculate/api-interface';

import * as path from 'path';
import resistances from './src/resistances';
import tolerances from './src/tolerances';

const app = express();

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

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
