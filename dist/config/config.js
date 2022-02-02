"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.NODE_ENV = exports.DATABASE_URL = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var _process$env = process.env,
    DATABASE_URL = _process$env.DATABASE_URL,
    PORT = _process$env.PORT,
    NODE_ENV = _process$env.NODE_ENV;
exports.NODE_ENV = NODE_ENV;
exports.PORT = PORT;
exports.DATABASE_URL = DATABASE_URL;