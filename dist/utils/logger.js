"use strict";

var _require = require("winston"),
    createLogger = _require.createLogger,
    transports = _require.transports;

var generalLogger = createLogger({
  transports: [new transports.Console()]
});
generalLogger.stream = {
  write: function write(info) {
    generalLogger.info(info);
  }
};

var log = function log(message) {
  generalLogger.log({
    level: "verbose",
    message: message
  });
};

var info = function info(message) {
  generalLogger.log({
    level: "info",
    message: message
  });
};

var warn = function warn(message) {
  generalLogger.log({
    level: "warn",
    message: message
  });
};

var error = function error(message) {
  generalLogger.log({
    level: "error",
    message: message
  });
};

module.exports = {
  log: log,
  info: info,
  warn: warn,
  error: error
};