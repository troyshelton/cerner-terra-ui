"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var path = require('path');
var chalk = require('chalk');
var fse = require('fs-extra');
var glob = require('glob');
var supportedLocales = require('./config/i18nSupportedLocales');
var aggregateMessages = require('./aggregate-messages');
var writeAggregatedTranslations = require('./write-aggregated-translations');
var defaultSearchPatterns = require('./config/defaultSearchPatterns');
var isFile = function isFile(filePath) {
  return fse.existsSync(filePath) && !fse.lstatSync(filePath).isDirectory();
};
var loadConfigFile = function loadConfigFile(configPath) {
  if (configPath) {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    return require(configPath);
  }
  var localPath = path.resolve(process.cwd(), 'terraI18n.config.js');
  if (isFile(localPath)) {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    return require(localPath);
  }
  return {};
};
var defaults = function defaults() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = loadConfigFile(options.configPath);
  var defaultConfig = {
    baseDir: options.baseDir || config.baseDir || process.cwd(),
    directories: options.directories || config.directories || [],
    fileSystem: options.outputFileSystem || config.outputFileSystem || fse,
    locales: options.locales || config.locales || supportedLocales,
    outputDir: options.outputDir || './aggregated-translations',
    excludes: options.excludes || config.excludes || [],
    format: options.format || 'es5'
  };
  if (!defaultConfig.locales.includes('en')) {
    defaultConfig.locales.push('en');
  }
  return defaultConfig;
};

/**
 * Aggregates translation files and initializes the appropriate internationalization loaders.
 * @param {Object} options - The aggregation options.
 * @param {string} options.baseDir - Directory to search from and to prepend to the output directory.
 * @param {string|string[]} options.directories - Translation directory regex pattern(s) to glob, in addition to the default search patterns.
 * @param {FileSystem} options.fileSystem - The filesystem to use to write the translation and loader files.
 * @param {string[]} options.locales - The list of locale codes to aggregate.
 * @param {string} options.outputDir - Output directory for the translation and loader files.
 * @param {string|string[]} options.excludes - Translation directory regex pattern(s) to glob exclude from the search patterns.
 * @param {string} options.format - The format of syntax to output the translations with. Possible values are 'es5' and 'es6'.
 * @returns {array} - An array of supported locales.
 */
var aggregatedTranslations = function aggregatedTranslations(options) {
  var _defaults = defaults(options),
    baseDir = _defaults.baseDir,
    directories = _defaults.directories,
    fileSystem = _defaults.fileSystem,
    locales = _defaults.locales,
    outputDir = _defaults.outputDir,
    excludes = _defaults.excludes;
  var searchPaths = [].concat((0, _toConsumableArray2.default)(defaultSearchPatterns), (0, _toConsumableArray2.default)(directories));
  var translationDirectories = [];
  searchPaths.forEach(function (searchPath) {
    translationDirectories = translationDirectories.concat(glob.sync(searchPath, {
      cwd: baseDir,
      ignore: excludes,
      follow: true
    }));
  });
  var context = chalk.bold.dim('[terra-aggregate-translations]');
  var localesText = chalk.bold.cyan(locales);
  /* eslint-disable-next-line no-console */
  console.log(chalk.grey("".concat(context, " Aggregating translations for ").concat(localesText, " locales.")));

  // Aggregate translation messages for each of the translations directories
  var aggregatedMessages = aggregateMessages(translationDirectories, locales, fileSystem);
  var outputDirectory = path.resolve(baseDir, outputDir);
  fileSystem.mkdirpSync(outputDirectory);

  // Write aggregated translation messages to a file for each locale
  writeAggregatedTranslations(aggregatedMessages, locales, fileSystem, outputDirectory);
  return locales;
};
module.exports = aggregatedTranslations;