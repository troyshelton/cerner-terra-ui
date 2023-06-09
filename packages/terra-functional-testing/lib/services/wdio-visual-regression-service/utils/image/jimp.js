"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var Jimp = require('jimp');
var CropDimension = require('../CropDimension');

/**
 * Crops an image
 * @param  {string} base64Screenshot image to crop
 * @param  {CropDimension} cropDimensions   dimensions
 * @return {string}                  cropped image
 */
function cropImage(_x, _x2) {
  return _cropImage.apply(this, arguments);
}
/**
 * Scales an image down or up
 * @param base64Screenshot  image to scale
 * @param scaleFactor       scale factor, e.g. 0.5 for downscale or 1.5 for upscale
 * @returns {string}        screenshot
 */
function _cropImage() {
  _cropImage = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(base64Screenshot, cropDimensions) {
    var image, height, x, y, diffHeight;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (cropDimensions instanceof CropDimension) {
            _context.next = 2;
            break;
          }
          throw new Error('Please provide a valid instance of CropDimension!');
        case 2:
          _context.next = 4;
          return Jimp.read(new Buffer.from(base64Screenshot, 'base64'));
        case 4:
          image = _context.sent;
          // eslint-disable-line new-cap

          if (cropDimensions.getRotation() !== 0) {
            image.rotate(-cropDimensions.getRotation());
          }
          height = image.bitmap.height;
          x = cropDimensions.getX();
          y = cropDimensions.getY();
          if (cropDimensions.getGravity() === 'SouthWest') {
            diffHeight = height - y - cropDimensions.getHeight();
            y = diffHeight;
          }

          // image.gravity(cropDimensions.getGravity());
          image.crop(x, y, cropDimensions.getWidth(), cropDimensions.getHeight());
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            // eslint-disable-next-line func-names, space-before-function-paren, prefer-arrow-callback
            image.getBuffer(Jimp.MIME_PNG, function (err, buffer) {
              if (err) {
                return reject(err);
              }
              return resolve(buffer.toString('base64'));
            });
          }));
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _cropImage.apply(this, arguments);
}
function scaleImage(_x3, _x4) {
  return _scaleImage.apply(this, arguments);
}
/**
 * Merges mulidimensional array of images to a single image:
 * @param  {string[][]} images array of images
 * @return {string}        screenshot
 */
function _scaleImage() {
  _scaleImage = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(base64Screenshot, scaleFactor) {
    var image;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Jimp.read(new Buffer.from(base64Screenshot, 'base64'));
        case 2:
          image = _context2.sent;
          // eslint-disable-line new-cap
          image.scale(scaleFactor);
          return _context2.abrupt("return", new Promise(function (resolve, reject) {
            // eslint-disable-next-line func-names, space-before-function-paren, prefer-arrow-callback
            image.getBuffer(Jimp.MIME_PNG, function (err, buffer) {
              if (err) {
                return reject(err);
              }
              return resolve(buffer.toString('base64'));
            });
          }));
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _scaleImage.apply(this, arguments);
}
function mergeImages(_x5) {
  return _mergeImages.apply(this, arguments);
}
function _mergeImages() {
  _mergeImages = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(images) {
    var imageWidth, imageHeight, rowImagePromises, rowImages, image, y, _iterator2, _step2, rowImage, base64Screenshot;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          imageWidth = 0;
          imageHeight = 0; // merge horizontal
          // eslint-disable-next-line func-names, space-before-function-paren, prefer-arrow-callback
          rowImagePromises = images.map( /*#__PURE__*/function () {
            var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(row) {
              var width, height, colImagesPromises, colImages, image, x, _iterator, _step, colImage;
              return _regenerator.default.wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    width = 0;
                    height = 0; // eslint-disable-next-line func-names, space-before-function-paren, prefer-arrow-callback
                    colImagesPromises = row.map( /*#__PURE__*/function () {
                      var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(colImage) {
                        var image;
                        return _regenerator.default.wrap(function _callee3$(_context3) {
                          while (1) switch (_context3.prev = _context3.next) {
                            case 0:
                              _context3.next = 2;
                              return Jimp.read(colImage);
                            case 2:
                              image = _context3.sent;
                              width += image.bitmap.width;
                              height = image.bitmap.height;
                              return _context3.abrupt("return", image);
                            case 6:
                            case "end":
                              return _context3.stop();
                          }
                        }, _callee3);
                      }));
                      return function (_x7) {
                        return _ref2.apply(this, arguments);
                      };
                    }());
                    _context4.next = 5;
                    return Promise.all(colImagesPromises);
                  case 5:
                    colImages = _context4.sent;
                    _context4.next = 8;
                    return new Jimp(width, height);
                  case 8:
                    image = _context4.sent;
                    x = 0; // eslint-disable-next-line no-restricted-syntax
                    _iterator = _createForOfIteratorHelper(colImages);
                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        colImage = _step.value;
                        image.blit(colImage, x, 0);
                        x += colImage.bitmap.width;
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                    imageWidth = image.bitmap.width;
                    imageHeight += image.bitmap.height;
                    return _context4.abrupt("return", image);
                  case 15:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4);
            }));
            return function (_x6) {
              return _ref.apply(this, arguments);
            };
          }());
          _context5.next = 5;
          return Promise.all(rowImagePromises);
        case 5:
          rowImages = _context5.sent;
          _context5.next = 8;
          return new Jimp(imageWidth, imageHeight);
        case 8:
          image = _context5.sent;
          y = 0; // eslint-disable-next-line no-restricted-syntax
          _iterator2 = _createForOfIteratorHelper(rowImages);
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              rowImage = _step2.value;
              image.blit(rowImage, 0, y);
              y += rowImage.bitmap.height;
            }

            // finally get screenshot
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          _context5.next = 14;
          return new Promise(function (resolve, reject) {
            // eslint-disable-next-line func-names, space-before-function-paren, prefer-arrow-callback
            image.getBuffer(Jimp.MIME_PNG, function (err, buffer) {
              if (err) {
                return reject(err);
              }
              return resolve(buffer.toString('base64'));
            });
          });
        case 14:
          base64Screenshot = _context5.sent;
          return _context5.abrupt("return", base64Screenshot);
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _mergeImages.apply(this, arguments);
}
module.exports = {
  cropImage: cropImage,
  mergeImages: mergeImages,
  scaleImage: scaleImage
};