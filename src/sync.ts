import {PhoneDetail} from './models/phoneDetail';
import path from 'path';
import fs from 'fs';
import {dbInit} from './utils/dbInit';

const sync = async () => {
  const sequelize = dbInit();

  await sequelize.authenticate();
  await PhoneDetail.sync({alter: true});

  // const absolutePAthDir = path.join(__dirname, './data/phones');

  // fs.readdir(absolutePAthDir, (error, files) => {
  //   if (error) {
  //     throw error;
  //   }

  //   files.forEach(file => {
  //     const filePath = path.join(absolutePAthDir, file);

  //     const phoneJson = fs.readFileSync(filePath);

  //     const phone = JSON.parse(phoneJson.toString());

  //     PhoneDetail.create(phone);
  //   });
  // });
};

sync();
