"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const phones_1 = require("./route/phones");
const tablets_1 = require("./route/tablets");
const dbInit_1 = require("./utils/dbInit");
(0, dbInit_1.dbInit)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use('/tablets', express_1.default.json(), tablets_1.tabletRouter);
app.use('/phones', express_1.default.json(), phones_1.phoneRouter);
console.log('check');
app.listen(PORT, () => {
    console.log(`API is ready on http://localhost:${PORT}`);
});
