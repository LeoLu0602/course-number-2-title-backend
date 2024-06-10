"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const postgres_1 = __importDefault(require("postgres"));
const connectionString = (_a = process.env.DATABASE_URL) !== null && _a !== void 0 ? _a : '';
const sql = (0, postgres_1.default)(connectionString);
exports.default = sql;
