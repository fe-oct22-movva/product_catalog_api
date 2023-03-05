import {PhoneDetail} from './models/phoneDetail';
// import path from 'path';
import {dbInit} from './utils/dbInit';

const sync = async () => {
  const sequelize = dbInit();

  await sequelize.authenticate();
  await PhoneDetail.sync({alter: true});
};

sync();
