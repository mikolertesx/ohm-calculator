import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { ColorModel, ToleranceModel } from '@ohm-calculate/api-interface';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: '_username_',
  password: '_password_',
  database: 'kiwi',
  synchronize: true,
  logging: false,
  entities: [ColorModel, ToleranceModel],
  migrations: [],
  subscribers: [],
});
