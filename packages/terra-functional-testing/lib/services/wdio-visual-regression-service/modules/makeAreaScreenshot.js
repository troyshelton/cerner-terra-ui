"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var fsExtra = require('fs-extra');
var path = require('path');
var uuidv4 = require('uuid/v4');
var _require = require('@cerner/terra-cli'),
  Logger = _require.Logger;
var ScreenshotStrategyManager = require('../utils/ScreenshotStrategyManager');
var getScreenDimensions = require('../scripts/getScreenDimensions');
var virtualScroll = require('../scripts/virtualScroll');
var pageHeight = require('../scripts/pageHeight');
var saveBase64Image = require('../utils/saveBase64Image');
var _require2 = require('../utils/image'),
  cropImage = _require2.cropImage,
  mergeImages = _require2.mergeImages;
var ScreenDimension = require('../utils/ScreenDimension');
var _require3 = require('../utils/normalizeScreenshot'),
  normalizeScreenshot = _require3.normalizeScreenshot;
var logger = new Logger({
  prefix: '[wdio-visual-regression-service:makeAreaScreenshot]'
});
var tmpDir = path.resolve(__dirname, '..', '..', 'tmp');
function storeScreenshot(_x, _x2, _x3, _x4, _x5) {
  return _storeScreenshot.apply(this, arguments);
}
function _storeScreenshot() {
  _storeScreenshot = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(browser, screenDimensions, cropDimensions, base64Screenshot, filePath) {
    var normalizedBase64Screenshot, croppedBase64Screenshot;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return normalizeScreenshot(browser, screenDimensions, base64Screenshot);
        case 2:
          normalizedBase64Screenshot = _context.sent;
          logger.verbose('crop screenshot with width: %s, height: %s, offsetX: %s, offsetY: %s', cropDimensions.getWidth(), cropDimensions.getHeight(), cropDimensions.getX(), cropDimensions.getY());
          _context.next = 6;
          return cropImage(normalizedBase64Screenshot, cropDimensions);
        case 6:
          croppedBase64Screenshot = _context.sent;
          _context.next = 9;
          return saveBase64Image(filePath, croppedBase64Screenshot);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _storeScreenshot.apply(this, arguments);
}
function makeAreaScreenshot(_x6, _x7, _x8, _x9, _x10) {
  return _makeAreaScreenshot.apply(this, arguments);
}
function _makeAreaScreenshot() {
  _makeAreaScreenshot = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(browser, startX, startY, endX, endY) {
    var screenDimensions, screenDimension, screenshotStrategy, uuid, dir, cropImages, screenshotPromises, loop, _screenshotStrategy$g, x, y, indexX, indexY, base64Screenshot, cropDimensions, filePath, _yield$Promise$all, _yield$Promise$all2, mergedBase64Screenshot;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          logger.verbose('requested a screenshot for the following area: %j', {
            startX: startX,
            startY: startY,
            endX: endX,
            endY: endY
          });
          _context4.next = 3;
          return browser.execute(getScreenDimensions);
        case 3:
          screenDimensions = _context4.sent;
          logger.verbose('detected screenDimensions %j', screenDimensions);
          screenDimension = new ScreenDimension(screenDimensions, browser);
          screenshotStrategy = ScreenshotStrategyManager.getStrategy(browser, screenDimension);
          screenshotStrategy.setScrollArea(startX, startY, endX, endY);
          uuid = uuidv4();
          dir = path.join(tmpDir, uuid);
          _context4.prev = 10;
          _context4.next = 13;
          return fsExtra.ensureDir(dir);
        case 13:
          cropImages = [];
          screenshotPromises = [];
          logger.verbose('set page height to %s px', screenDimension.getDocumentHeight());
          _context4.next = 18;
          return browser.execute(pageHeight, "".concat(screenDimension.getDocumentHeight(), "px"));
        case 18:
          loop = false;
        case 19:
          _screenshotStrategy$g = screenshotStrategy.getScrollPosition(), x = _screenshotStrategy$g.x, y = _screenshotStrategy$g.y, indexX = _screenshotStrategy$g.indexX, indexY = _screenshotStrategy$g.indexY;
          logger.verbose('scroll to coordinates x: %s, y: %s for index x: %s, y: %s', x, y, indexX, indexY);
          /* eslint-disable no-await-in-loop */
          _context4.next = 23;
          return browser.execute(virtualScroll, x, y, false);
        case 23:
          _context4.next = 25;
          return browser.pause(100);
        case 25:
          logger.verbose('take screenshot');
          _context4.next = 28;
          return browser.takeScreenshot();
        case 28:
          base64Screenshot = _context4.sent;
          cropDimensions = screenshotStrategy.getCropDimensions();
          filePath = path.join(dir, "".concat(indexY, "-").concat(indexX, ".png"));
          /* eslint-enable no-await-in-loop */
          screenshotPromises.push(storeScreenshot(browser, screenDimension, cropDimensions, base64Screenshot, filePath));
          if (!Array.isArray(cropImages[indexY])) {
            cropImages[indexY] = [];
          }
          cropImages[indexY][indexX] = filePath;
          loop = screenshotStrategy.hasNextScrollPosition();
          screenshotStrategy.moveToNextScrollPosition();
        case 36:
          if (loop) {
            _context4.next = 19;
            break;
          }
        case 37:
          _context4.next = 39;
          return Promise.all([Promise.resolve().then( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
            var mergedBase64Images;
            return _regenerator.default.wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return Promise.all(screenshotPromises);
                case 2:
                  logger.verbose('merge images together');
                  _context2.next = 5;
                  return mergeImages(cropImages);
                case 5:
                  mergedBase64Images = _context2.sent;
                  logger.verbose('remove temp dir');
                  _context2.next = 9;
                  return fsExtra.remove(dir);
                case 9:
                  return _context2.abrupt("return", mergedBase64Images);
                case 10:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }))), Promise.resolve().then( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
            return _regenerator.default.wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  logger.verbose('reset page height');
                  _context3.next = 3;
                  return browser.execute(pageHeight, '');
                case 3:
                  logger.verbose('revert scroll to x: %s, y: %s', 0, 0);
                  _context3.next = 6;
                  return browser.execute(virtualScroll, 0, 0, true);
                case 6:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })))]);
        case 39:
          _yield$Promise$all = _context4.sent;
          _yield$Promise$all2 = (0, _slicedToArray2.default)(_yield$Promise$all, 1);
          mergedBase64Screenshot = _yield$Promise$all2[0];
          return _context4.abrupt("return", mergedBase64Screenshot);
        case 45:
          _context4.prev = 45;
          _context4.t0 = _context4["catch"](10);
          _context4.prev = 47;
          _context4.next = 50;
          return fsExtra.remove(dir);
        case 50:
          _context4.next = 54;
          break;
        case 52:
          _context4.prev = 52;
          _context4.t1 = _context4["catch"](47);
        case 54:
          throw _context4.t0;
        case 55:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[10, 45], [47, 52]]);
  }));
  return _makeAreaScreenshot.apply(this, arguments);
}
module.exports = makeAreaScreenshot;