import { Sequelize, DataType, DataTypes } from 'sequelize';
import { sequelize } from '../utils/db';

const Phones = sequelize.define('phones', {
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  itemId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fullPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  screen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ram: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'phones'
});