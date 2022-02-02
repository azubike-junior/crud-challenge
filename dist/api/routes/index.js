"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _user = require("../controller/user");

var route = (0, _express.Router)();
route.get("/users", _user.getUsers);
route.post("/users", _user.createUser);
route["delete"]("/users/:id", _user.removeUser);
var _default = route;
exports["default"] = _default;