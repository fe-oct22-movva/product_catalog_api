import { Sequelize } from 'sequelize-typescript';
import { models } from './../models/index';

// eslint-disable-next-line max-len
const URI = 'postgres://tfjhviprfuaezi:b2683756259d3c333b37d704ff19273b6192c'
+ '3829c051f45ae4dc6bb9f8722d1@ec2-3-230-122-20.compute-1.amazonaws.com:5432/d5tp5vvcdepu9r';

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  models,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export const dbInit = () => sequelize;