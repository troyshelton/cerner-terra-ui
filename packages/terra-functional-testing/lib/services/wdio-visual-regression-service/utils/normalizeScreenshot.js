"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var CropDimension = require('./CropDimension');
var getBase64ImageSize = require('./getBase64ImageSize');
var _require = require('./image'),
  cropImage = _require.cropImage,
  scaleImage = _require.scaleImage;
function normalizeRetinaScreenshot(_x, _x2, _x3) {
  return _normalizeRetinaScreenshot.apply(this, arguments);
}
function _normalizeRetinaScreenshot() {
  _normalizeRetinaScreenshot = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(browser, screenDimensions, base64Screenshot) {
    var size, imageSizeMax, imageSizeMin, viewportSizeMax, viewportSizeMin, isImageScaled, normalizedScreenshot;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // check if image dimensions are different to viewport as browsers like firefox scales images automatically down
          size = getBase64ImageSize(base64Screenshot);
          imageSizeMax = Math.max(size.width, size.height);
          imageSizeMin = Math.min(size.width, size.height);
          viewportSizeMax = screenDimensions.applyScaleFactor(Math.max(screenDimensions.getViewportWidth(), screenDimensions.getViewportHeight()));
          viewportSizeMin = screenDimensions.applyScaleFactor(Math.min(screenDimensions.getViewportWidth(), screenDimensions.getViewportHeight()));
          isImageScaled = imageSizeMax !== viewportSizeMax && imageSizeMin !== viewportSizeMin;
          if (!isImageScaled) {
            _context.next = 11;
            break;
          }
          _context.next = 9;
          return scaleImage(base64Screenshot, 1 / screenDimensions.getPixelRatio());
        case 9:
          normalizedScreenshot = _context.sent;
          return _context.abrupt("return", normalizedScreenshot);
        case 11:
          return _context.abrupt("return", base64Screenshot);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _normalizeRetinaScreenshot.apply(this, arguments);
}
function normalizeIOSScreenshot(_x4, _x5, _x6) {
  return _normalizeIOSScreenshot.apply(this, arguments);
}
function _normalizeIOSScreenshot() {
  _normalizeIOSScreenshot = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(browser, screenDimensions, base64Screenshot) {
    var toolbarHeight, addressbarHeight, viewportHeight, viewportWidth, isIpad, isIphone, barsShown, barsHeight, size, deviceInLandscape, screenshotInLandscape, rotation, cropDimensions, croppedBase64Screenshot;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          toolbarHeight = 44; // bottom toolbar has always a fixed height of 44px
          addressbarHeight = 44; // bottom toolbar has always a fixed height of 44px
          viewportHeight = screenDimensions.applyScaleFactor(screenDimensions.getViewportHeight());
          viewportWidth = screenDimensions.applyScaleFactor(screenDimensions.getViewportWidth()); // all iPad's have 1024..
          isIpad = screenDimensions.getScreenHeight() === 1024 || screenDimensions.getScreenWidth() === 1024;
          isIphone = !isIpad; // detect if status bar + navigation bar is shown
          barsShown = viewportHeight < screenDimensions.getScreenHeight();
          barsHeight = 0;
          if (barsShown) {
            // calculate height of status + addressbar
            barsHeight = screenDimensions.getScreenHeight() - viewportHeight;
            if (isIphone && barsHeight > addressbarHeight) {
              // iPhone's have also sometimes toolbar at the bottom when navigation bar is shown, need to consider that
              barsHeight -= toolbarHeight;
            }
          }
          size = getBase64ImageSize(base64Screenshot);
          deviceInLandscape = screenDimensions.getScreenWidth() > screenDimensions.getScreenHeight();
          screenshotInLandscape = size.width > size.height;
          rotation = deviceInLandscape === screenshotInLandscape ? 0 : 270;
          if (!(barsHeight > 0 || rotation > 0)) {
            _context2.next = 19;
            break;
          }
          // crop only when necessary
          cropDimensions = new CropDimension(viewportWidth, viewportHeight, 0, barsHeight, true, rotation);
          _context2.next = 17;
          return cropImage(base64Screenshot, cropDimensions);
        case 17:
          croppedBase64Screenshot = _context2.sent;
          return _context2.abrupt("return", croppedBase64Screenshot);
        case 19:
          return _context2.abrupt("return", base64Screenshot);
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _normalizeIOSScreenshot.apply(this, arguments);
}
function normalizeScreenshot(_x7, _x8, _x9) {
  return _normalizeScreenshot.apply(this, arguments);
}
function _normalizeScreenshot() {
  _normalizeScreenshot = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(browser, screenDimensions, base64Screenshot) {
    var normalizedScreenshot;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          normalizedScreenshot = base64Screenshot; // check if we could have a retina image
          if (!(screenDimensions.getPixelRatio() > 1)) {
            _context3.next = 5;
            break;
          }
          _context3.next = 4;
          return normalizeRetinaScreenshot(browser, screenDimensions, normalizedScreenshot);
        case 4:
          normalizedScreenshot = _context3.sent;
        case 5:
          if (!(browser.isMobile && browser.isIOS)) {
            _context3.next = 9;
            break;
          }
          _context3.next = 8;
          return normalizeIOSScreenshot(browser, screenDimensions, normalizedScreenshot);
        case 8:
          normalizedScreenshot = _context3.sent;
        case 9:
          return _context3.abrupt("return", normalizedScreenshot);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _normalizeScreenshot.apply(this, arguments);
}
module.exports = {
  normalizeScreenshot: normalizeScreenshot,
  normalizeIOSScreenshot: normalizeIOSScreenshot,
  normalizeRetinaScreenshot: normalizeRetinaScreenshot
};