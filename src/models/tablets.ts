/* eslint-disable indent */
import {DataTypes} from 'sequelize';
import {
  AllowNull,
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'tablets',
  createdAt: false,
  updatedAt: false,
})

export class Tablet extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER
  })
  id: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  category: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  name: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER
  })
  fullPrice: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
  price: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  screen: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  capacity: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  ram: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
  year: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  image: string;
}