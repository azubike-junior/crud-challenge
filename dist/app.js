"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = require("./config/config");

var _connection = require("./database/connection");

var _index = _interopRequireDefault(require("./api/routes/index"));

require("core-js/stable");

require("regenerator-runtime/runtime");

var _logger = _interopRequireDefault(require("./utils/logger"));

var app = (0, _express["default"])();
app.use(_express["default"].json());
(0, _connection.connectToDatabase)(_config.DATABASE_URL);
app.use("/", _index["default"]);
app.listen(_config.PORT || 3004, function () {
  return _logger["default"].info("server running on port ".concat(_config.PORT));
});
var _default = app;
exports["default"] = _default;