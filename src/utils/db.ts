import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize('postgres', 'postgres', '123123123', {
  host: 'localhost',
  dialect: 'postgres',
});
