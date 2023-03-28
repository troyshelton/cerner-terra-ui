'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _en = require('react-intl/locale-data/en');

var _en2 = _interopRequireDefault(_en);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_en2.default);

var messages = {
  "Terra.AbstractModal.BeginModalDialog": "Begin modal dialog",
  "Terra.AbstractModal.EndModalDialog": "End modal dialog",
  "Terra.actionHeader.back": "Back",
  "Terra.actionHeader.close": "Close",
  "Terra.actionHeader.close.description": "On Clicking the close button, {text} will be closed",
  "Terra.actionHeader.maximize": "Maximize",
  "Terra.actionHeader.maximize.description": "On Clicking the maximize button, {text} will be maximized",
  "Terra.actionHeader.minimize": "Minimize",
  "Terra.actionHeader.minimize.description": "On Clicking the minimize button, {text} will be minimized",
  "Terra.actionHeader.next": "Next",
  "Terra.actionHeader.previous": "Previous",
  "Terra.ajax.error": "This content failed to load.",
  "Terra.avatar.deceased": "Deceased",
  "Terra.demographicsBanner.dateOfBirth": "DOB",
  "Terra.demographicsBanner.dateOfBirthFullText": "Date of Birth",
  "Terra.demographicsBanner.deceased": "Deceased",
  "Terra.demographicsBanner.gestationalAge": "GA",
  "Terra.demographicsBanner.gestationalAgeFullText": "Gestational Age",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "PMA",
  "Terra.demographicsBanner.postMenstrualAgeFullText": "Post Menstrual Age",
  "Terra.icon.IconConsultInstructionsForUse.title": "Electronic Instructions for Use Icon",
  "Terra.notification.dialog.error": "Error",
  "Terra.notification.dialog.hazard-high": "Alert",
  "Terra.notification.dialog.hazard-low": "Information",
  "Terra.notification.dialog.hazard-medium": "Warning",
  "Terra.Overlay.loading": "Loading...",
  "Terra.popup.header.close": "Close",
  "Terra.status-view.error": "Error",
  "Terra.status-view.no-data": "No Results",
  "Terra.status-view.no-matching-results": "No Matching Results",
  "Terra.status-view.not-authorized": "Not Authorized",
  "terraApplication.actionMenu.headerCloseButtonLabel": "Close",
  "terraApplication.errorBoundary.defaultErrorMessage": "The system encountered an error: {errorDetails}",
  "terraApplication.navigation.drawerMenu.navigation": "Navigation Items",
  "terraApplication.navigation.drawerMenu.utilities": "Utility Items",
  "terraApplication.navigation.extensions.rollupButtonDescription": "Additional Tools",
  "terraApplication.navigation.extensions.rollupMenuHeaderTitle": "Additional Tools",
  "terraApplication.navigation.header.menuButtonTitle": "Menu",
  "terraApplication.navigation.header.skipToContentTitle": "Skip to Content",
  "terraApplication.navigation.header.utilityButtonTitleNoUser": "Options",
  "terraApplication.navigation.header.utilityButtonTitleUser": "User Settings for: {currentUserName}",
  "terraApplication.navigation.notifications.new": "New",
  "terraApplication.navigation.tabs.rollupButtonDescription": "More Navigation",
  "terraApplication.navigation.tabs.rollupButtonTitle": "More",
  "terraApplication.navigation.tabs.rollupMenuHeaderTitle": "More Navigation",
  "terraApplication.navigation.utilityMenu.headerTitle": "Utilities",
  "terraApplication.navigation.utilityMenu.help": "Help",
  "terraApplication.navigation.utilityMenu.logout": "Logout",
  "terraApplication.navigation.utilityMenu.settings": "Settings",
  "terraApplication.notificationBanner.advisory": "Advisory.",
  "terraApplication.notificationBanner.alert": "Alert.",
  "terraApplication.notificationBanner.dismiss": "Dismiss",
  "terraApplication.notificationBanner.error": "Error.",
  "terraApplication.notificationBanner.info": "Information.",
  "terraApplication.notificationBanner.success": "Success.",
  "terraApplication.notificationBanner.unsatisfied": "Required Action.",
  "terraApplication.notificationBanner.unverified": "Outside Records.",
  "terraApplication.notificationBanner.warning": "Warning.",
  "terraApplication.notifications.newNotificationLabel": "New {label} notification. {bannerType} {bannerDescription}, {bannerAction}, {bannerDismiss}.",
  "terraApplication.notifications.regionLabel": "{label} notifications.",
  "terraApplication.notifications.removedNotificationLabel": "Removed {label} notification. {bannerType} {bannerDescription}.",
  "terraApplication.notifications.totalCountLabel": "Total {label} notifications: {count}",
  "terraApplication.statusLayout.error": "Error",
  "terraApplication.statusLayout.no-data": "No Results",
  "terraApplication.statusLayout.no-matching-results": "No Matching Results",
  "terraApplication.statusLayout.not-authorized": "Not Authorized",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "Don't Save",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "Unsaved changes were made to the following:",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "Changes will be lost if you don't save them. How do you want to proceed?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Continue Editing",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "Unsaved changes were made to {promptDescription}.",
  "terraApplication.unsavedChangesPrompt.title": "Unsaved Changes",
  "terraApplication.workspace.activityOverlay.loading": "Loading...",
  "terraApplication.workspace.hideWorkspaceLabel": "Hide Workspace",
  "terraApplication.workspace.showWorkspaceLabel": "Show Workspace",
  "terraApplication.workspace.skipToLabel": "Skip To Workspace",
  "terraApplication.workspace.workspaceLabel": "Workspace",
  "terraApplication.workspace.workspaceSettingsLabel": "Workspace Settings"
};
var areTranslationsLoaded = true;
var locale = 'en';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
