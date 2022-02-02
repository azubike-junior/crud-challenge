"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectToDatabase = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _logger = _interopRequireDefault(require("../utils/logger"));

var connectToDatabase = function connectToDatabase(url) {
  _mongoose["default"].connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  var db = _mongoose["default"].connection;
  db.once("open", function () {
    return _logger["default"].info("database connected successfully");
  });
  db.on("error", function () {
    return _logger["default"].error("Database connection error:");
  });
};

exports.connectToDatabase = connectToDatabase;