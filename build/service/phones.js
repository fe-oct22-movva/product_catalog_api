'use strict';
let __awaiter
  = (this && this.__awaiter)
  || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
          resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', {value: true});
exports.getOnePhone = exports.getAllPhones = void 0;
const phone_1 = require('../models/phone');
const helpers_1 = require('../utils/helpers');
const phoneDetail_1 = require('../models/phoneDetail');
const getAllPhones = (pageQuery, limitQuery, sortQuery) =>
  __awaiter(void 0, void 0, void 0, function* () {
    let phones = yield phone_1.Phone.findAll();
    const sortBy = sortQuery || 'fromNewest';
    if (sortBy) {
      phones = (0, helpers_1.toSortData)(phones, sortBy);
    }
    const page = parseInt(pageQuery || '1');
    const limit = parseInt(limitQuery || '12');
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const totalPhones = phones.length;
    const totalPages = Math.ceil(totalPhones / limit);
    const prevPage = {
      page: page - 1,
      limit: limit,
    };
    const nextPage = {
      page: page + 1,
      limit: limit,
    };
    const result = {
      totalPhones: totalPhones,
      pages: totalPages,
      prev: prevPage,
      next: nextPage,
      result: phones.slice(startIndex, endIndex),
    };
    return result;
  });
exports.getAllPhones = getAllPhones;
const getOnePhone = (phoneId) =>
  __awaiter(void 0, void 0, void 0, function* () {
    return yield phoneDetail_1.PhoneDetail.findByPk(phoneId);
  });
exports.getOnePhone = getOnePhone;
