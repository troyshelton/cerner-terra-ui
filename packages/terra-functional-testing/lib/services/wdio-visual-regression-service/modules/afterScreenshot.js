"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _require = require('@cerner/terra-cli'),
  Logger = _require.Logger;
var scrollbars = require('../scripts/scrollbars');
var modifyElements = require('../scripts/modifyElements');
var logger = new Logger({
  prefix: '[wdio-visual-regression-service:afterScreenshot]'
});

/**
 * Helper method to prepare the dom for a screenshot by removing scroll bars, hiding and/or removing any elements
 * indicated in the options and setting the scroll position to 0,0.
 *
 * @param {Object} browser - The global webdriver.io WebDriver instance.
 * @param {Object=} options - The screenshot capturing and comparison options.
 * @param {string[]} options.hide - The list of elements to set opacity 0 on to 'hide' from the dom when capturing the screenshot.
 * @param {string[]} options.remove - The list of elements to set display: none on to 'remove' from dom when capturing the screenshot.
 * @returns {undefined}
 */
function beforeScreenshot(_x) {
  return _beforeScreenshot.apply(this, arguments);
}
function _beforeScreenshot() {
  _beforeScreenshot = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(browser) {
    var options,
      hide,
      remove,
      _args = arguments;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          hide = options.hide, remove = options.remove; // show elements
          if (!(Array.isArray(hide) && hide.length)) {
            _context.next = 6;
            break;
          }
          logger.verbose('show the following elements again: %s', hide.join(', '));
          _context.next = 6;
          return browser.execute(modifyElements, hide, 'opacity', '');
        case 6:
          if (!(Array.isArray(remove) && remove.length)) {
            _context.next = 10;
            break;
          }
          logger.verbose('add the following elements again: %s', remove.join(', '));
          _context.next = 10;
          return browser.execute(modifyElements, remove, 'display', '');
        case 10:
          // show scrollbars
          logger.verbose('show scrollbars again');
          _context.next = 13;
          return browser.execute(scrollbars, true);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _beforeScreenshot.apply(this, arguments);
}
module.exports = beforeScreenshot;