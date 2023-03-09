// import { Tablet } from './models/tablets';
// import { dbInit } from './utils/dbInit';
// import fs from 'fs';
// import path from 'path';

// const absolutePath = path.join(__dirname, './data/tablets.json');

// const sync = async () => {
//   try {
//     const sequelize = dbInit();

//     await sequelize.authenticate();
//     await Tablet.sync({force: true});

//     const phoneJson = fs.readFileSync(absolutePath);
//     const phones = JSON.parse(phoneJson.toString());

//     for (const phone of phones) {
//       try {
//         await Tablet.create(phone);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     console.log('data in db');
//   } catch (error) {
//     console.log(error);
//   }
// };

// sync();

// const sync = async () => {
//   const sequelize = dbInit();

//   await sequelize.authenticate();
//   console.log(await Tablet.findAll());
// };

// sync();