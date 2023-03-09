"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tabletRouter = void 0;
const express_1 = require("express");
const tablets_1 = require("../controllers/tablets");
exports.tabletRouter = (0, express_1.Router)();
exports.tabletRouter.get('/', tablets_1.tabletController.getTablets);
