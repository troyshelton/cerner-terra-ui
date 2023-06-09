"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var fsExtra = require('fs-extra');
function saveBase64Image(_x, _x2) {
  return _saveBase64Image.apply(this, arguments);
}
function _saveBase64Image() {
  _saveBase64Image = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(filePath, base64Screenshot) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", fsExtra.outputFile(filePath, base64Screenshot, 'base64'));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _saveBase64Image.apply(this, arguments);
}
module.exports = saveBase64Image;