'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _nl = require('react-intl/locale-data/nl');

var _nl2 = _interopRequireDefault(_nl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_nl2.default);

var messages = {
  "Terra.AbstractModal.BeginModalDialog": "Begin de modale dialoog",
  "Terra.AbstractModal.EndModalDialog": "Modale dialoog beëindigen",
  "Terra.actionHeader.back": "Terug",
  "Terra.actionHeader.close": "Sluiten",
  "Terra.actionHeader.close.description": "Selecteer de knop om {text} te sluiten",
  "Terra.actionHeader.maximize": "Maximalisatie",
  "Terra.actionHeader.maximize.description": "Selecteer de knop om {text} te maximaliseren",
  "Terra.actionHeader.minimize": "Minimaliseren",
  "Terra.actionHeader.minimize.description": "Selecteer de knop om {text} te minimaliseren",
  "Terra.actionHeader.next": "Volgende",
  "Terra.actionHeader.previous": "Vorige",
  "Terra.ajax.error": "Deze inhoud kon niet worden geladen.",
  "Terra.avatar.deceased": "Overleden",
  "Terra.demographicsBanner.dateOfBirth": "Geboortedatum",
  "Terra.demographicsBanner.dateOfBirthFullText": "Geboortedatum",
  "Terra.demographicsBanner.deceased": "Overleden",
  "Terra.demographicsBanner.gestationalAge": "Zwangerschapsduur",
  "Terra.demographicsBanner.gestationalAgeFullText": "Zwangerschapsduur",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "Postmenstruele leeftijd",
  "Terra.demographicsBanner.postMenstrualAgeFullText": "Postmenstruele leeftijd",
  "Terra.icon.IconConsultInstructionsForUse.title": "Pictogram Elektronische gebruiksaanwijzing",
  "Terra.notification.dialog.error": "Fout",
  "Terra.notification.dialog.hazard-high": "Adviserend",
  "Terra.notification.dialog.hazard-low": "Informatie",
  "Terra.notification.dialog.hazard-medium": "Waarschuwing",
  "Terra.Overlay.loading": "Bezig met laden",
  "Terra.popup.header.close": "Sluiten",
  "Terra.status-view.error": "Fout",
  "Terra.status-view.no-data": "Geen resultaten",
  "Terra.status-view.no-matching-results": "Geen overeenkomende resultaten",
  "Terra.status-view.not-authorized": "Niet geautoriseerd",
  "terraApplication.actionMenu.headerCloseButtonLabel": "Sluiten",
  "terraApplication.errorBoundary.defaultErrorMessage": "In het systeem is een fout opgetreden: {errorDetails}",
  "terraApplication.navigation.drawerMenu.navigation": "Navigatie-items",
  "terraApplication.navigation.drawerMenu.utilities": "Hulp-items",
  "terraApplication.navigation.extensions.rollupButtonDescription": "Aanvullende tools",
  "terraApplication.navigation.extensions.rollupMenuHeaderTitle": "Aanvullende tools",
  "terraApplication.navigation.header.menuButtonTitle": "Menu",
  "terraApplication.navigation.header.skipToContentTitle": "Doorgaan naar content",
  "terraApplication.navigation.header.utilityButtonTitleNoUser": "Opties",
  "terraApplication.navigation.header.utilityButtonTitleUser": "Gebruikersinstellingen voor {currentUserName}",
  "terraApplication.navigation.notifications.new": "Nieuw",
  "terraApplication.navigation.tabs.rollupButtonDescription": "Meer navigatie",
  "terraApplication.navigation.tabs.rollupButtonTitle": "Meer",
  "terraApplication.navigation.tabs.rollupMenuHeaderTitle": "Meer navigatie",
  "terraApplication.navigation.utilityMenu.headerTitle": "Hulpprogramma's",
  "terraApplication.navigation.utilityMenu.help": "Help",
  "terraApplication.navigation.utilityMenu.logout": "Afmelden",
  "terraApplication.navigation.utilityMenu.settings": "Instellingen",
  "terraApplication.notificationBanner.advisory": "Advies.",
  "terraApplication.notificationBanner.alert": "Waarschuwing.",
  "terraApplication.notificationBanner.dismiss": "Negeren",
  "terraApplication.notificationBanner.error": "Fout.",
  "terraApplication.notificationBanner.info": "Informatie.",
  "terraApplication.notificationBanner.success": "Geslaagd.",
  "terraApplication.notificationBanner.unsatisfied": "Vereiste actie.",
  "terraApplication.notificationBanner.unverified": "Externe records.",
  "terraApplication.notificationBanner.warning": "Waarschuwing.",
  "terraApplication.notifications.newNotificationLabel": "Nieuwe {label}-melding. {bannerType} {bannerDescription}, {bannerAction}, {bannerDismiss}.",
  "terraApplication.notifications.regionLabel": "{label}-meldingen.",
  "terraApplication.notifications.removedNotificationLabel": "Verwijderde {label}-melding. {bannerType} {bannerDescription}.",
  "terraApplication.notifications.totalCountLabel": "Totaal {label}-meldingen:{count}",
  "terraApplication.statusLayout.error": "Fout",
  "terraApplication.statusLayout.no-data": "Geen resultaten",
  "terraApplication.statusLayout.no-matching-results": "Geen resultaten",
  "terraApplication.statusLayout.not-authorized": "Niet geautoriseerd",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "Niet opslaan",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "Er zijn niet-opgeslagen wijzigingen in het volgende:",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "Deze wijzigingen gaan verloren als u ze niet opslaat. Hoe wilt u verder gaan?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Doorgaan met bewerken",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "Er zijn niet-opgeslagen wijzigingen in {promptDescription}.",
  "terraApplication.unsavedChangesPrompt.title": "Niet-opgeslagen wijzigingen",
  "terraApplication.workspace.activityOverlay.loading": "Bezig met laden",
  "terraApplication.workspace.hideWorkspaceLabel": "Werkruimte verbergen",
  "terraApplication.workspace.showWorkspaceLabel": "Werkruimte weergeven",
  "terraApplication.workspace.skipToLabel": "Doorgaan naar werkruimte",
  "terraApplication.workspace.workspaceLabel": "Werkruimte",
  "terraApplication.workspace.workspaceSettingsLabel": "Instellingen werkruimte"
};
var areTranslationsLoaded = true;
var locale = 'nl-BE';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
