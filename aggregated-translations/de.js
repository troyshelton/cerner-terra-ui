'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _de = require('react-intl/locale-data/de');

var _de2 = _interopRequireDefault(_de);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_de2.default);

var messages = {
  "Terra.AbstractModal.BeginModalDialog": "Modaldialog starten",
  "Terra.AbstractModal.EndModalDialog": "Beenden Sie den modalen Dialog",
  "Terra.actionHeader.back": "Zurück",
  "Terra.actionHeader.close": "Schließen",
  "Terra.actionHeader.close.description": "Klicken Sie auf 'Schließen', um {text} zu schließen.",
  "Terra.actionHeader.maximize": "Maximieren",
  "Terra.actionHeader.maximize.description": "Klicken Sie auf 'Maximieren', um {text} zu maximieren.",
  "Terra.actionHeader.minimize": "Minimieren",
  "Terra.actionHeader.minimize.description": "Klicken Sie auf 'Minimieren', um {text} zu minimieren.",
  "Terra.actionHeader.next": "Nächste",
  "Terra.actionHeader.previous": "Vorherige",
  "Terra.ajax.error": "Inhalt konnte nicht geladen werden.",
  "Terra.avatar.deceased": "Verstorben",
  "Terra.demographicsBanner.dateOfBirth": "Geburtsdatum",
  "Terra.demographicsBanner.dateOfBirthFullText": "Geburtsdatum",
  "Terra.demographicsBanner.deceased": "Verstorben",
  "Terra.demographicsBanner.gestationalAge": "GA",
  "Terra.demographicsBanner.gestationalAgeFullText": "Gestationsalter",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "Postmenstruelles Alter",
  "Terra.demographicsBanner.postMenstrualAgeFullText": "Postmenstruelles Alter",
  "Terra.icon.IconConsultInstructionsForUse.title": "Symbol 'Elektronische Gebrauchsanweisung'",
  "Terra.notification.dialog.error": "Fehler",
  "Terra.notification.dialog.hazard-high": "Benachrichtigung",
  "Terra.notification.dialog.hazard-low": "Informationen",
  "Terra.notification.dialog.hazard-medium": "Warnung",
  "Terra.Overlay.loading": "Ladevorgang...",
  "Terra.popup.header.close": "Schließen",
  "Terra.status-view.error": "Fehler",
  "Terra.status-view.no-data": "Keine Ergebnisse",
  "Terra.status-view.no-matching-results": "Keine Übereinstimmungen",
  "Terra.status-view.not-authorized": "Nicht autorisiert",
  "terraApplication.actionMenu.headerCloseButtonLabel": "Schließen",
  "terraApplication.errorBoundary.defaultErrorMessage": "Fehler: {errorDetails}",
  "terraApplication.navigation.drawerMenu.navigation": "Navigationselemente",
  "terraApplication.navigation.drawerMenu.utilities": "Dienstprogrammelemente",
  "terraApplication.navigation.extensions.rollupButtonDescription": "Weitere Tools",
  "terraApplication.navigation.extensions.rollupMenuHeaderTitle": "Weitere Tools",
  "terraApplication.navigation.header.menuButtonTitle": "Menü",
  "terraApplication.navigation.header.skipToContentTitle": "Zum Inhalt",
  "terraApplication.navigation.header.utilityButtonTitleNoUser": "Optionen",
  "terraApplication.navigation.header.utilityButtonTitleUser": "Benutzereinstellungen für {currentUserName}",
  "terraApplication.navigation.notifications.new": "Neu",
  "terraApplication.navigation.tabs.rollupButtonDescription": "Mehr Navigation",
  "terraApplication.navigation.tabs.rollupButtonTitle": "Mehr",
  "terraApplication.navigation.tabs.rollupMenuHeaderTitle": "Mehr Navigation",
  "terraApplication.navigation.utilityMenu.headerTitle": "Dienstprogramme",
  "terraApplication.navigation.utilityMenu.help": "Hilfe",
  "terraApplication.navigation.utilityMenu.logout": "Abmelden",
  "terraApplication.navigation.utilityMenu.settings": "Einstellungen",
  "terraApplication.notificationBanner.advisory": "Hinweis.",
  "terraApplication.notificationBanner.alert": "Warnung.",
  "terraApplication.notificationBanner.dismiss": "Verwerfen",
  "terraApplication.notificationBanner.error": "Fehler.",
  "terraApplication.notificationBanner.info": "Informationen.",
  "terraApplication.notificationBanner.success": "Erfolg.",
  "terraApplication.notificationBanner.unsatisfied": "Erforderliche Aktion.",
  "terraApplication.notificationBanner.unverified": "Externe Datensätze.",
  "terraApplication.notificationBanner.warning": "Warnung.",
  "terraApplication.notifications.newNotificationLabel": "{label}-Benachrichtigung neu. {bannerType} {bannerDescription}, {bannerAction}, {bannerDismiss}.",
  "terraApplication.notifications.regionLabel": "{label}-Benachrichtigungen.",
  "terraApplication.notifications.removedNotificationLabel": "{label}-Benachrichtigung entfernt. {bannerType} {bannerDescription}.",
  "terraApplication.notifications.totalCountLabel": "{label}-Benachrichtigungen gesamt: {count}",
  "terraApplication.statusLayout.error": "Fehler",
  "terraApplication.statusLayout.no-data": "Keine Ergebnisse",
  "terraApplication.statusLayout.no-matching-results": "Keine Übereinstimmungen",
  "terraApplication.statusLayout.not-authorized": "Nicht autorisiert",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "Nicht speichern",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "Die Änderungen der folgenden Elemente wurden nicht gespeichert:",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "Wenn Sie Ihre Änderungen nicht speichern, gehen diese verloren. Wie möchten Sie fortfahren?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Mit der Bearbeitung fortfahren",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "Die Änderungen der folgenden Elemente wurden nicht gespeichert: {promptDescription}.",
  "terraApplication.unsavedChangesPrompt.title": "Nicht gespeicherte Änderungen",
  "terraApplication.workspace.activityOverlay.loading": "Ladevorgang...",
  "terraApplication.workspace.hideWorkspaceLabel": "Arbeitsplatz ausblenden",
  "terraApplication.workspace.showWorkspaceLabel": "Arbeitsplatz anzeigen",
  "terraApplication.workspace.skipToLabel": "Zum Arbeitsplatz",
  "terraApplication.workspace.workspaceLabel": "Arbeitsplatz",
  "terraApplication.workspace.workspaceSettingsLabel": "Einstellungen für Arbeitsplatz"
};
var areTranslationsLoaded = true;
var locale = 'de';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
