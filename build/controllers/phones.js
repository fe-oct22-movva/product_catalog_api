'use strict';
let __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
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
exports.phoneController = exports.getOne = exports.getPhones = void 0;
const phones_1 = require('../service/phones');
const getPhones = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const phonesFromServer = yield (0, phones_1.getAllPhones)(
      req.query.page,
      req.query.limit,
      req.query.sortBy
    );
    res.send(phonesFromServer);
  });
exports.getPhones = getPhones;
const getOne = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const {phoneId} = req.params;
    const foundPhone = yield (0, phones_1.getOnePhone)(phoneId);
    if (!foundPhone) {
      res.sendStatus(404);
    }
    res.send(foundPhone);
  });
exports.getOne = getOne;
exports.phoneController = {
  getPhones: exports.getPhones,
  getOne: exports.getOne,
};
