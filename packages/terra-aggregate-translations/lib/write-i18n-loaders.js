"use strict";

var path = require('path');
var chalk = require('chalk');
var startCase = require('lodash.startcase');
var supportedLocales = require('./config/i18nSupportedLocales');
var createIntlLoader = function createIntlLoader(loaderName, locale, format) {
  if (format === 'es6') {
    return "const ".concat(loaderName, " = () =>\n   import('intl/locale-data/jsonp/").concat(locale, ".js')\n   .catch(error => console.log('An error occurred while loading intl/locale-data/jsonp/").concat(locale, ".js' + \"\\n\" + error));\n\n");
  }
  return "var ".concat(loaderName, " = function ").concat(loaderName, "() {\n  return require.ensure([], function (require) {\n    return require('intl/locale-data/jsonp/").concat(locale, ".js');\n  }, '").concat(locale, "-intl-local');\n};\n\n");
};
var createTranslationLoader = function createTranslationLoader(loaderName, locale, format) {
  if (format === 'es6') {
    return "const ".concat(loaderName, " = (callback, scope) =>\n   import( /* webpackChunkName: \"").concat(locale, "-translations\" */ '").concat(locale, ".js')\n     .then((module) => { callback.call(scope, module);})\n     .catch(error => console.log('An error occurred while loading ").concat(locale, ".js' + \"\\n\" + error));\n\n");
  }
  return "var ".concat(loaderName, " = function ").concat(loaderName, "(callback, scope) {\n  return require.ensure([], function (require) {\n    // eslint-disable-next-line\n    var i18n = require('./").concat(locale, ".js');\n    callback.call(scope, i18n);\n    return i18n;\n  }, '").concat(locale, "-translations');\n};\n\n");
};
var writeLoaders = function writeLoaders(type, locales, fileSystem, outputDir, format) {
  var loaders = {};
  var loaderFile = "'use strict';\n\n";

  // Create the intl and translations loaders for each locale
  locales.forEach(function (locale) {
    if (type === 'intl' && !supportedLocales.includes(locale)) {
      /* eslint-disable-next-line no-console */
      console.warn(chalk.yellow("WARNING: ".concat(locale, " is NOT a Terra supported locale. Creating a translation and intl loader for ").concat(locale, ", but be sure the lanaguage specified is supported by intl, otherwise no locale-date will exist and the import will result in an error.")));
    }
    var localeLoaderName = startCase(locale).replace(' ', '');
    var loaderName = "load".concat(localeLoaderName).concat(startCase(type));
    loaders["'".concat(locale, "'")] = loaderName;
    if (type === 'intl') {
      loaderFile += createIntlLoader(loaderName, locale, format);
    } else {
      loaderFile += createTranslationLoader(loaderName, locale, format);
    }
  });

  // Create the loader exports
  var loaderString = JSON.stringify(loaders, null, 2).replace(/"/g, '');
  loaderFile += "var ".concat(type, "Loaders = ").concat(loaderString, ";\n\nmodule.exports = ").concat(type, "Loaders;");

  // Write the loaders file
  var loaderPath = path.resolve(outputDir, "".concat(type, "Loaders.js"));
  fileSystem.writeFileSync(loaderPath, loaderFile);
};
var writeI18nLoaders = function writeI18nLoaders(locales, fileSystem, outputDir, format) {
  writeLoaders('intl', locales, fileSystem, outputDir, format);
  writeLoaders('translations', locales, fileSystem, outputDir, format);
};
module.exports = writeI18nLoaders;