import {Phone} from './models/phone';
import {dbInit} from './utils/dbInit';

const sync = async () => {
  const sequelize = dbInit();

  await sequelize.authenticate();
  await Phone.sync({force: true});
};

sync();
