"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _require = require('@cerner/terra-cli'),
  Logger = _require.Logger;
var scroll = require('../scripts/scroll');
var scrollbars = require('../scripts/scrollbars');
var modifyElements = require('../scripts/modifyElements');
var triggerResize = require('../scripts/triggerResize');
var logger = new Logger({
  prefix: '[wdio-visual-regression-service:beforeScreenshot]'
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
      x,
      y,
      pause,
      _args = arguments;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          hide = options.hide, remove = options.remove; // hide scrollbars
          logger.verbose('hide scrollbars');
          _context.next = 5;
          return browser.execute(scrollbars, false);
        case 5:
          logger.verbose('trigger resize event to allow js components to resize properly');
          _context.next = 8;
          return browser.execute(triggerResize);
        case 8:
          if (!(Array.isArray(hide) && hide.length)) {
            _context.next = 12;
            break;
          }
          logger.verbose('hide the following elements: %s', hide.join(', '));
          _context.next = 12;
          return browser.execute(modifyElements, hide, 'opacity', '0');
        case 12:
          if (!(Array.isArray(remove) && remove.length)) {
            _context.next = 16;
            break;
          }
          logger.verbose('remove the following elements: %s', remove.join(', '));
          _context.next = 16;
          return browser.execute(modifyElements, remove, 'display', 'none');
        case 16:
          // scroll back to start
          x = 0;
          y = 0;
          logger.verbose('scroll back to start x: %s, y: %s', x, y);
          _context.next = 21;
          return browser.execute(scroll, x, y);
        case 21:
          // wait a bit for browser render
          pause = 200;
          logger.verbose('wait %s ms for browser render', pause);
          _context.next = 25;
          return browser.pause(pause);
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _beforeScreenshot.apply(this, arguments);
}
module.exports = beforeScreenshot;