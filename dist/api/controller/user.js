"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeUser = exports.getUsers = exports.createUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _users = _interopRequireDefault(require("../../database/models/users"));

var _moment = _interopRequireDefault(require("moment"));

var createUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, first_name, last_name, user_name, date_of_birth, user, username, response;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (req.body) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: "Please fill all fields"
            }));

          case 3:
            _req$body = req.body, first_name = _req$body.first_name, last_name = _req$body.last_name, user_name = _req$body.user_name, date_of_birth = _req$body.date_of_birth;
            user = new _users["default"]({
              first_name: first_name,
              last_name: last_name,
              user_name: user_name,
              date_of_birth: date_of_birth
            });
            _context.next = 7;
            return _users["default"].findOne({
              user_name: user_name
            });

          case 7:
            username = _context.sent;

            if (!username) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: "this username already exists.",
              status: 400
            }));

          case 10:
            _context.next = 12;
            return user.save();

          case 12:
            response = _context.sent;

            if (!response) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", res.status(201).send({
              message: "user created"
            }));

          case 15:
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).send({
              message: _context.t0.message
            }));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));

  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var getUsers = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var users;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _users["default"].find();

          case 3:
            users = _context2.sent;
            console.log(users);

            if (!users) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(200).send({
              users: users,
              status: 200
            }));

          case 7:
            return _context2.abrupt("return", res.status(404).send({
              message: "users not found"
            }));

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).send({
              message: _context2.t0.message
            }));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function getUsers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var removeUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, deletedUser, users;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _users["default"].findByIdAndRemove(id);

          case 4:
            deletedUser = _context3.sent;

            if (deletedUser) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(404).send({
              message: "user not found"
            }));

          case 7:
            _context3.next = 9;
            return _users["default"].find();

          case 9:
            users = _context3.sent;
            return _context3.abrupt("return", res.status(200).send({
              message: "user deleted",
              users: users
            }));

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).send({
              message: _context3.t0.message
            }));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 13]]);
  }));

  return function removeUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.removeUser = removeUser;