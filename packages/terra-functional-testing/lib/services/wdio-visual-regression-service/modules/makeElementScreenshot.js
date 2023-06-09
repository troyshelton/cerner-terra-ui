"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _require = require('@cerner/terra-cli'),
  Logger = _require.Logger;
var makeAreaScreenshot = require('./makeAreaScreenshot');
var beforeScreenshot = require('./beforeScreenshot');
var afterScreenshot = require('./afterScreenshot');
var groupBoundingRect = require('../utils/groupBoundingRect');
var getBoundingRects = require('../scripts/getBoundingRects');
var logger = new Logger({
  prefix: '[wdio-visual-regression-service:makeDocumentScreenshot]'
});

/**
 * Captures a screenshot of a given element if the element is within the viewport dimensions.
 * This will remove scroll bars, hide any elements specified in the options, then take the screenshot
 * before restoring the dom to it's original position and structure.
 *
 * @alias browser.checkElement
 * @param {string=} fileName - The filename to use to save the screenshot.
 * @param {string} elementSelector - The css selector of the element that should be captured in the screenshot.
 * @param {Object=} options - The screenshot capturing and comparison options.
 * @param {string[]} options.hide - The list of elements to set opacity 0 on to 'hide' from the dom when capturing the screenshot.
 * @param {string[]} options.remove - The list of elements to set display: none on to 'remove' from dom when capturing the screenshot.
 * @returns {string} - The base64 string of the screenshot image that was captured.
 */
function makeElementScreenshot(_x, _x2) {
  return _makeElementScreenshot.apply(this, arguments);
}
function _makeElementScreenshot() {
  _makeElementScreenshot = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(browser, elementSelector) {
    var options,
      boundingRects,
      boundingRect,
      base64Image,
      _args = arguments;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
          logger.verbose('start element screenshot');

          // hide scrollbars, scroll to start, hide & remove elements, wait for render
          _context.next = 4;
          return beforeScreenshot(browser, options);
        case 4:
          _context.next = 6;
          return browser.execute(getBoundingRects, elementSelector);
        case 6:
          boundingRects = _context.sent;
          if (!(boundingRects.length === 0)) {
            _context.next = 9;
            break;
          }
          throw new Error("[wdio-visual-regression-service:makeDocumentScreenshot] Failed to capture the element using the \"".concat(elementSelector, "\" selector. Either update the test document to include this selector or use a different selector that exists on the document."));
        case 9:
          boundingRect = groupBoundingRect(boundingRects); // make screenshot of area
          _context.next = 12;
          return makeAreaScreenshot(browser, boundingRect.left, boundingRect.top, boundingRect.right, boundingRect.bottom);
        case 12:
          base64Image = _context.sent;
          _context.next = 15;
          return afterScreenshot(browser, options);
        case 15:
          logger.verbose('end element screenshot');
          return _context.abrupt("return", base64Image);
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _makeElementScreenshot.apply(this, arguments);
}
module.exports = makeElementScreenshot;