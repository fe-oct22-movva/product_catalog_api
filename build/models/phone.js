'use strict';
let __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    let c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') {
      r = Reflect.decorate(decorators, target, key, desc);
    } else {
      for (let i = decorators.length - 1; i >= 0; i--) {
        if ((d = decorators[i])) {
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
      }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, '__esModule', {value: true});
exports.Phone = void 0;
/* eslint-disable indent */
const sequelize_1 = require('sequelize');
const sequelize_typescript_1 = require('sequelize-typescript');
let Phone = class Phone extends sequelize_typescript_1.Model {};
__decorate(
  [
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.INTEGER,
    }),
  ],
  Phone.prototype,
  'id',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.STRING,
    }),
  ],
  Phone.prototype,
  'category',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.STRING,
    }),
  ],
  Phone.prototype,
  'phoneId',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.STRING,
    }),
  ],
  Phone.prototype,
  'itemId',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.STRING,
    }),
  ],
  Phone.prototype,
  'name',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.INTEGER,
    }),
  ],
  Phone.prototype,
  'fullPrice',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.INTEGER,
    }),
  ],
  Phone.prototype,
  'price',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.STRING,
    }),
  ],
  Phone.prototype,
  'screen',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.STRING,
    }),
  ],
  Phone.prototype,
  'capacity',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.STRING,
    }),
  ],
  Phone.prototype,
  'color',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.STRING,
    }),
  ],
  Phone.prototype,
  'ram',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.INTEGER,
    }),
  ],
  Phone.prototype,
  'year',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.STRING,
    }),
  ],
  Phone.prototype,
  'image',
  void 0
);
Phone = __decorate(
  [
    (0, sequelize_typescript_1.Table)({
      tableName: 'phones',
      createdAt: false,
      updatedAt: false,
    }),
  ],
  Phone
);
exports.Phone = Phone;
