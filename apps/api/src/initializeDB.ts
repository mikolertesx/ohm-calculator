import { AppDataSource } from './AppDataSource';

AppDataSource.initialize()
  .then(async (AppDataSource) => {
    // TODO Initialize database.
    return;
  })
  .catch((error) => console.log(error));
