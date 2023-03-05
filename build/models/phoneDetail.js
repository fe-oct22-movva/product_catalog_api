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
exports.PhoneDetail = void 0;
/* eslint-disable indent */
const sequelize_1 = require('sequelize');
const sequelize_typescript_1 = require('sequelize-typescript');
let PhoneDetail = class PhoneDetail extends sequelize_typescript_1.Model {};
__decorate(
  [
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.STRING,
    }),
  ],
  PhoneDetail.prototype,
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
  PhoneDetail.prototype,
  'namespaceId',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.STRING,
    }),
  ],
  PhoneDetail.prototype,
  'name',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    }),
  ],
  PhoneDetail.prototype,
  'capacityAvailable',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.STRING,
    }),
  ],
  PhoneDetail.prototype,
  'capacity',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.INTEGER,
    }),
  ],
  PhoneDetail.prototype,
  'priceRegular',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.INTEGER,
    }),
  ],
  PhoneDetail.prototype,
  'priceDiscount',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    }),
  ],
  PhoneDetail.prototype,
  'colorsAvailable',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.STRING,
    }),
  ],
  PhoneDetail.prototype,
  'color',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    }),
  ],
  PhoneDetail.prototype,
  'images',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.JSON),
    }),
  ],
  PhoneDetail.prototype,
  'description',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.STRING,
    }),
  ],
  PhoneDetail.prototype,
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
  PhoneDetail.prototype,
  'resolution',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.STRING,
    }),
  ],
  PhoneDetail.prototype,
  'processor',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.STRING,
    }),
  ],
  PhoneDetail.prototype,
  'ram',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.STRING,
    }),
  ],
  PhoneDetail.prototype,
  'camera',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.STRING,
    }),
  ],
  PhoneDetail.prototype,
  'zoom',
  void 0
);
__decorate(
  [
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    }),
  ],
  PhoneDetail.prototype,
  'cell',
  void 0
);
PhoneDetail = __decorate(
  [
    (0, sequelize_typescript_1.Table)({
      tableName: 'phonesDetails',
      createdAt: false,
      updatedAt: false,
    }),
  ],
  PhoneDetail
);
exports.PhoneDetail = PhoneDetail;
