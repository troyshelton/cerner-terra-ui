"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shallowWithIntl = exports.renderWithIntl = exports.mountWithIntl = exports.mockIntl = exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _enzyme = require("enzyme");
var _IntlWrapper = _interopRequireDefault(require("./IntlWrapper"));
var _excluded = ["wrappingComponent", "wrappingComponentProps"],
  _excluded2 = ["wrappingComponent", "wrappingComponentProps"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var mockIntl = {
  defaultLocale: 'en',
  formatDate: function formatDate() {
    return 'mock date';
  },
  formatMessage: function formatMessage(_ref) {
    var id = _ref.id;
    return id;
  },
  formatNumber: function formatNumber(value) {
    return "".concat(value);
  },
  formatPlural: function formatPlural(value) {
    return "".concat(value);
  },
  formatTime: function formatTime(value) {
    return "".concat(value);
  },
  formatRelativeTime: function formatRelativeTime(value) {
    return "".concat(value);
  }
};
exports.mockIntl = mockIntl;
var messageProxy = new Proxy({}, {
  get: function get(_, property) {
    return property;
  },
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor() {
    return {
      configurable: true,
      enumerable: true
    };
  }
}); // eslint-disable-line compat/compat
var locale = 'en';
var defaultLocale = 'en';
var mountWithIntl = function mountWithIntl(node) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var wrappingComponent = _ref2.wrappingComponent,
    wrappingComponentProps = _ref2.wrappingComponentProps,
    options = (0, _objectWithoutProperties2.default)(_ref2, _excluded);
  var opts = _objectSpread({
    wrappingComponent: _IntlWrapper.default,
    wrappingComponentProps: {
      locale: locale,
      defaultLocale: defaultLocale,
      messages: messageProxy,
      WrappingComponent: wrappingComponent,
      wrappingComponentProps: wrappingComponentProps
    }
  }, options);
  return (0, _enzyme.mount)(node, opts);
};
exports.mountWithIntl = mountWithIntl;
var renderWithIntl = function renderWithIntl(node) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var subject = /*#__PURE__*/(0, _react.createElement)(_IntlWrapper.default, {
    locale: locale,
    defaultLocale: defaultLocale,
    messages: messageProxy
  }, node);
  return (0, _enzyme.render)(subject, options);
};
exports.renderWithIntl = renderWithIntl;
var shallowWithIntl = function shallowWithIntl(node) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var wrappingComponent = _ref3.wrappingComponent,
    wrappingComponentProps = _ref3.wrappingComponentProps,
    options = (0, _objectWithoutProperties2.default)(_ref3, _excluded2);
  var opts = _objectSpread({
    wrappingComponent: _IntlWrapper.default,
    wrappingComponentProps: {
      locale: locale,
      defaultLocale: defaultLocale,
      messages: messageProxy,
      WrappingComponent: wrappingComponent,
      wrappingComponentProps: wrappingComponentProps
    }
  }, options);
  return (0, _enzyme.shallow)(node, opts);
};
exports.shallowWithIntl = shallowWithIntl;
var _default = {
  mockIntl: mockIntl,
  mountWithIntl: mountWithIntl,
  shallowWithIntl: shallowWithIntl,
  renderWithIntl: renderWithIntl
};
exports.default = _default;