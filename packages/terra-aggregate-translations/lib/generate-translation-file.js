"use strict";

var sortMessages = function sortMessages(messages) {
  var sortedKeys = Object.keys(messages).sort(function (a, b) {
    var lowerA = a.toLowerCase();
    var lowerB = b.toLowerCase();
    if (lowerA === lowerB) {
      return 0;
    }
    return lowerA < lowerB ? -1 : 1;
  });
  var sortedMessages = {};
  sortedKeys.forEach(function (messageKey) {
    sortedMessages[messageKey] = messages[messageKey];
    return undefined;
  });
  return sortedMessages;
};
var translationFile = function translationFile(messages) {
  return "'use strict';\n\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n  exports.default = void 0;\n\n  var _default = ".concat(JSON.stringify(messages, null, 2), ";\n  exports.default = _default;\n");
};
var generateTranslationFile = function generateTranslationFile(messages) {
  var sortedMessages = sortMessages(messages);
  return translationFile(sortedMessages);
};
module.exports = generateTranslationFile;