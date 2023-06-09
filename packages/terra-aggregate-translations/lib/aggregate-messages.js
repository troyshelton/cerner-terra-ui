"use strict";

var path = require('path');
var chalk = require('chalk');
var aggregateTranslationMessages = function aggregateTranslationMessages(translationDirectories, locales, fileSystem) {
  var translations = {};
  locales.forEach(function (language) {
    translations[language] = {};
  });
  translationDirectories.forEach(function (dir) {
    return locales.forEach(function (language) {
      // Check the directory for a translation file for each locale
      var translationFile = path.resolve(dir, "".concat(language, ".json"));
      try {
        Object.assign(translations[language], JSON.parse(fileSystem.readFileSync(translationFile, 'utf8')));
      } catch (e) {
        // Only warn if the JSON is invalid or if the base language is missing
        if (e instanceof SyntaxError) {
          /* eslint-disable-next-line no-console */
          console.warn(chalk.yellow("There was an error reading your translations file ".concat(translationFile, ".\n Exception Message: ").concat(e.message, " \n")));
        } else if (language.split('-').length === 1) {
          /* eslint-disable-next-line no-console */
          console.warn(chalk.yellow("The base translation file for ".concat(language, " is missing at ").concat(translationFile, ".\n")));
        }
      }
    });
  });
  return translations;
};
module.exports = aggregateTranslationMessages;