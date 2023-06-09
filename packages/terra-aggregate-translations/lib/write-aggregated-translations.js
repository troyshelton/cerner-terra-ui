"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var path = require('path');
var chalk = require('chalk');
var supportedLocales = require('./config/i18nSupportedLocales');
var generateTranslationFile = require('./generate-translation-file');
var writeAggregatedTranslations = function writeAggregatedTranslations(aggregatedMessages, locales, fileSystem, outputDir) {
  // Create a file of aggregated translation messages for each locale
  locales.forEach(function (locale) {
    if (locale in aggregatedMessages) {
      if (!supportedLocales.includes(locale)) {
        /* eslint-disable-next-line no-console */
        console.warn(chalk.yellow("WARNING: ".concat(locale, " is NOT a Terra supported locale. Creating an aggregate translation file for ").concat(locale, ", but be sure to include the appropriate translations messages for each terra component used in your application otherwise the translations will fail and the fallback will be displayed.")));
      }
      var translationFilePath = path.resolve(outputDir, "".concat(locale, ".js"));
      var messages = aggregatedMessages[locale];
      var _locale$split = locale.split('-'),
        _locale$split2 = (0, _slicedToArray2.default)(_locale$split, 2),
        baseLocale = _locale$split2[0],
        region = _locale$split2[1];
      var mergedMessages = messages;
      if (region) {
        var baseLocaleMessages = aggregatedMessages[baseLocale];
        if (baseLocaleMessages) {
          // Merge base locale messages into regional locale messages, regional locale messages listed last so they will take precedence.
          mergedMessages = _objectSpread(_objectSpread({}, baseLocaleMessages), messages);
        }
      }
      fileSystem.writeFileSync(translationFilePath, generateTranslationFile(mergedMessages));
    } else {
      throw new Error(chalk.red("Translations aggregated for ".concat(locale, " locale, but messages were not loaded correctly. Please check that your translated modules were installed correctly.")));
    }
  });
};
module.exports = writeAggregatedTranslations;