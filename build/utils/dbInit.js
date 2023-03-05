'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.dbInit = void 0;
const sequelize_typescript_1 = require('sequelize-typescript');
const index_1 = require('./../models/index');
const URI =
  'postgres://tfjhviprfuaezi:b2683756259d3c333b37d704ff19273b6192c' +
  '3829c051f45ae4dc6bb9f8722d1@ec2-3-230-122-20.compute-1.amazonaws.com:5432/d5tp5vvcdepu9r';
const sequelize = new sequelize_typescript_1.Sequelize(URI, {
  dialect: 'postgres',
  models: index_1.models,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
const dbInit = () => sequelize;
exports.dbInit = dbInit;
