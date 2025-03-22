"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
dotenv_1["default"].config();
var db;
var _a = process.env, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_DB = _a.POSTGRES_DB, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, ENV = _a.ENV, POSTGRES_HOST_TEST = _a.POSTGRES_HOST_TEST, POSTGRES_DB_TEST = _a.POSTGRES_DB_TEST, POSTGRES_USER_TEST = _a.POSTGRES_USER_TEST, POSTGRES_PASSWORD_TEST = _a.POSTGRES_PASSWORD_TEST;
if (ENV == "dev") {
    db = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    });
}
else {
    db = new pg_1.Pool({
        host: POSTGRES_HOST_TEST,
        database: POSTGRES_DB_TEST,
        user: POSTGRES_USER_TEST,
        password: POSTGRES_PASSWORD_TEST
    });
}
exports["default"] = db;
