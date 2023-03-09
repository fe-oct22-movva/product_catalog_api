"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneRouter = void 0;
const express_1 = require("express");
const phones_1 = require("../controllers/phones");
exports.phoneRouter = (0, express_1.Router)();
exports.phoneRouter.get('/', phones_1.phoneController.getPhones);
exports.phoneRouter.get('/:phoneId', phones_1.phoneController.getOne);
