"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var gm = require('gm');
var fsExtra = require('fs-extra');
var path = require('path');
var uuidv4 = require('uuid/v4');
var CropDimension = require('../CropDimension');
var tmpDir = path.join(__dirname, '../../../tmp');

/**
 * Crops an image.
 * @param {string} base64Screenshot - image to crop
 * @param {CropDimension} cropDimensions - dimensions
 * @return {Promise} resolves to cropped image
 */
function cropImage(_x, _x2) {
  return _cropImage.apply(this, arguments);
}
/**
 * Scales an image down or up.
 * @param {string} base64Screenshot - image to scale
 * @param {number} scaleFactor - scale factor, e.g. 0.5 for downscale or 1.5 for upscale
 * @return {Promise} resolves to cropped image
 */
function _cropImage() {
  _cropImage = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(base64Screenshot, cropDimensions) {
    var image;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (cropDimensions instanceof CropDimension) {
            _context.next = 2;
            break;
          }
          throw new Error('Please provide a valid instance of CropDimension!');
        case 2:
          image = gm(new Buffer.from(base64Screenshot, 'base64')); // eslint-disable-line new-cap
          if (cropDimensions.getRotation() !== 0) {
            image.rotate('white', cropDimensions.getRotation());
          }
          image.gravity(cropDimensions.getGravity());
          image.crop(cropDimensions.getWidth(), cropDimensions.getHeight(), cropDimensions.getX(), cropDimensions.getY());
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            // eslint-disable-next-line func-names, space-before-function-paren, prefer-arrow-callback
            image.toBuffer('PNG', function (err, buffer) {
              if (err) {
                return reject(err);
              }
              return resolve(buffer.toString('base64'));
            });
          }));
        case 7:
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
 * Merges multidimensional array of images to a single image:
 * @param  {string[][]} images array of images
 * @return {string}        screenshot
 */
function _scaleImage() {
  _scaleImage = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(base64Screenshot, scaleFactor) {
    var image, percent;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          image = gm(new Buffer.from(base64Screenshot, 'base64')); // eslint-disable-line new-cap
          percent = scaleFactor * 100;
          image.filter('Box'); // to produce equal images as Jimp
          // image.filter('Sinc'); // works also but was slower in tests
          image.resize(percent, percent, '%');
          return _context2.abrupt("return", new Promise(function (resolve, reject) {
            // eslint-disable-next-line func-names, space-before-function-paren, prefer-arrow-callback
            image.toBuffer('PNG', function (err, buffer) {
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
  _mergeImages = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(images) {
    var uuid, dir, rowImagesPromises, base64Screenshot;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          uuid = uuidv4();
          dir = path.join(tmpDir, uuid);
          _context3.prev = 2;
          _context3.next = 5;
          return fsExtra.ensureDir(dir);
        case 5:
          // merge all horizontal screens
          rowImagesPromises = images.map(function (colImages, key) {
            var firstImage = colImages.shift();
            var rowImage = gm(firstImage);
            if (colImages.length) {
              colImages.push(true);
              rowImage.append.apply(rowImage, colImages); // eslint-disable-line prefer-spread
            }

            return new Promise(function (resolve, reject) {
              var file = path.join(dir, "".concat(key, ".png"));
              // eslint-disable-next-line func-names, space-before-function-paren, prefer-arrow-callback
              rowImage.write(file, function (err) {
                if (err) {
                  return reject(err);
                }
                return resolve(file);
              });
            });
          }); // merge all vertical screens
          _context3.next = 8;
          return Promise.all(rowImagesPromises).then(function (rowImages) {
            var firstImage = rowImages.shift();
            var mergedImage = gm(firstImage);
            if (rowImages.length) {
              mergedImage.append.apply(mergedImage, rowImages); // eslint-disable-line prefer-spread
            }

            return new Promise(function (resolve, reject) {
              // eslint-disable-next-line func-names, space-before-function-paren, prefer-arrow-callback
              mergedImage.toBuffer('PNG', function (err, buffer) {
                if (err) {
                  return reject(err);
                }
                return resolve(buffer.toString('base64'));
              });
            });
          });
        case 8:
          base64Screenshot = _context3.sent;
          _context3.next = 11;
          return fsExtra.remove(dir);
        case 11:
          return _context3.abrupt("return", base64Screenshot);
        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](2);
          _context3.prev = 16;
          _context3.next = 19;
          return fsExtra.remove(dir);
        case 19:
          _context3.next = 23;
          break;
        case 21:
          _context3.prev = 21;
          _context3.t1 = _context3["catch"](16);
        case 23:
          throw _context3.t0;
        case 24:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 14], [16, 21]]);
  }));
  return _mergeImages.apply(this, arguments);
}
module.exports = {
  cropImage: cropImage,
  mergeImages: mergeImages,
  scaleImage: scaleImage
};