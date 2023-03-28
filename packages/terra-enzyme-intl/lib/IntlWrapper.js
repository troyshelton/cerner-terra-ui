"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactIntl = require("react-intl");
var propTypes = {
  /**
   * Current locale.
   */
  locale: _propTypes.default.string,
  /**
   * Locale to default to.
   */
  defaultLocale: _propTypes.default.string,
  /**
   * Object containing localize messages with keys.
   */
  messages: _propTypes.default.shape({}),
  /**
   * Component to be wrapped around intlProvider.
   */
  WrappingComponent: _propTypes.default.elementType,
  /**
   * Object containing props to be passed down to wrapping component.
   */
  wrappingComponentProps: _propTypes.default.shape({})
};
var IntlWrapper = function IntlWrapper(_ref) {
  var locale = _ref.locale,
    defaultLocale = _ref.defaultLocale,
    messages = _ref.messages,
    children = _ref.children,
    WrappingComponent = _ref.WrappingComponent,
    wrappingComponentProps = _ref.wrappingComponentProps;
  var intlProvider = /*#__PURE__*/_react.default.createElement(_reactIntl.IntlProvider, {
    locale: locale,
    defaultLocale: defaultLocale,
    messages: messages
  }, children);
  if (WrappingComponent) {
    return /*#__PURE__*/_react.default.createElement(WrappingComponent, wrappingComponentProps, intlProvider);
  }
  return intlProvider;
};
IntlWrapper.propTypes = propTypes;
var _default = IntlWrapper;
exports.default = _default;