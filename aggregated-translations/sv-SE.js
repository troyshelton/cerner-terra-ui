'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _sv = require('react-intl/locale-data/sv');

var _sv2 = _interopRequireDefault(_sv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_sv2.default);

var messages = {
  "Terra.AbstractModal.BeginModalDialog": "Börja modal dialog",
  "Terra.AbstractModal.EndModalDialog": "Avsluta modal dialog",
  "Terra.actionHeader.back": "Tillbaka",
  "Terra.actionHeader.close": "Stäng",
  "Terra.actionHeader.close.description": "Välj knappen för att stänga {text}",
  "Terra.actionHeader.maximize": "Maximera",
  "Terra.actionHeader.maximize.description": "Välj knappen för att maximera {text}",
  "Terra.actionHeader.minimize": "Minimera",
  "Terra.actionHeader.minimize.description": "Välj knappen för att minimera {text}",
  "Terra.actionHeader.next": "Nästa",
  "Terra.actionHeader.previous": "Föregående",
  "Terra.ajax.error": "Innehållet lästes inte in.",
  "Terra.avatar.deceased": "Avliden",
  "Terra.demographicsBanner.dateOfBirth": "Födelsedatum",
  "Terra.demographicsBanner.dateOfBirthFullText": "Födelsedatum",
  "Terra.demographicsBanner.deceased": "Avliden",
  "Terra.demographicsBanner.gestationalAge": "GA",
  "Terra.demographicsBanner.gestationalAgeFullText": "Graviditetstid",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "PMA",
  "Terra.demographicsBanner.postMenstrualAgeFullText": "Tid enligt senaste mens",
  "Terra.icon.IconConsultInstructionsForUse.title": "Indikator för elektroniska bruksanvisningar (eIFU)",
  "Terra.notification.dialog.error": "Fel",
  "Terra.notification.dialog.hazard-high": "Avisering",
  "Terra.notification.dialog.hazard-low": "Information",
  "Terra.notification.dialog.hazard-medium": "Varning",
  "Terra.Overlay.loading": "Läser in ...",
  "Terra.popup.header.close": "Stäng",
  "Terra.status-view.error": "Fel",
  "Terra.status-view.no-data": "Inga resultat",
  "Terra.status-view.no-matching-results": "Inga resultat matchar sökvillkoren",
  "Terra.status-view.not-authorized": "Behörighet saknas",
  "terraApplication.actionMenu.headerCloseButtonLabel": "Stäng",
  "terraApplication.errorBoundary.defaultErrorMessage": "Ett fel uppstod: {errorDetails}",
  "terraApplication.navigation.drawerMenu.navigation": "Navigeringsobjekt",
  "terraApplication.navigation.drawerMenu.utilities": "Verktygsobjekt",
  "terraApplication.navigation.extensions.rollupButtonDescription": "Ytterligare verktyg",
  "terraApplication.navigation.extensions.rollupMenuHeaderTitle": "Ytterligare verktyg",
  "terraApplication.navigation.header.menuButtonTitle": "Meny",
  "terraApplication.navigation.header.skipToContentTitle": "Gå till Innehåll",
  "terraApplication.navigation.header.utilityButtonTitleNoUser": "Alternativ",
  "terraApplication.navigation.header.utilityButtonTitleUser": "Användarinställningar för: {currentUserName}",
  "terraApplication.navigation.notifications.new": "Nytt",
  "terraApplication.navigation.tabs.rollupButtonDescription": "Fler navigeringslänkar",
  "terraApplication.navigation.tabs.rollupButtonTitle": "Mer",
  "terraApplication.navigation.tabs.rollupMenuHeaderTitle": "Fler navigeringslänkar",
  "terraApplication.navigation.utilityMenu.headerTitle": "Verktyg",
  "terraApplication.navigation.utilityMenu.help": "Hjälp",
  "terraApplication.navigation.utilityMenu.logout": "Logga ut",
  "terraApplication.navigation.utilityMenu.settings": "Inställningar",
  "terraApplication.notificationBanner.advisory": "Rekommendation.",
  "terraApplication.notificationBanner.alert": "Varning.",
  "terraApplication.notificationBanner.dismiss": "Stäng",
  "terraApplication.notificationBanner.error": "Fel.",
  "terraApplication.notificationBanner.info": "Information.",
  "terraApplication.notificationBanner.success": "Klar.",
  "terraApplication.notificationBanner.unsatisfied": "Åtgärd krävs.",
  "terraApplication.notificationBanner.unverified": "Externa journaler.",
  "terraApplication.notificationBanner.warning": "Obs!",
  "terraApplication.notifications.newNotificationLabel": "Nytt meddelande på {label}. {bannerType} {bannerDescription}, {bannerAction}, {bannerDismiss}.",
  "terraApplication.notifications.regionLabel": "Meddelanden på {label}.",
  "terraApplication.notifications.removedNotificationLabel": "Tog bort meddelande på {label}. {bannerType} {bannerDescription}.",
  "terraApplication.notifications.totalCountLabel": "Totalt antal meddelanden på {label}: {count}",
  "terraApplication.statusLayout.error": "Fel",
  "terraApplication.statusLayout.no-data": "Inga resultat",
  "terraApplication.statusLayout.no-matching-results": "Inga resultat matchar sökvillkoren",
  "terraApplication.statusLayout.not-authorized": "Behörighet saknas",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "Spara inte",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "Det finns osparade ändringar i följande:",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "Om du inte sparar ändringarna går de förlorade. Hur vill du fortsätta?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Fortsätt redigera",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "Det finns osparade ändringar i {promptDescription}.",
  "terraApplication.unsavedChangesPrompt.title": "Osparade ändringar",
  "terraApplication.workspace.activityOverlay.loading": "Läser in…",
  "terraApplication.workspace.hideWorkspaceLabel": "Dölj arbetsyta",
  "terraApplication.workspace.showWorkspaceLabel": "Visa arbetsyta",
  "terraApplication.workspace.skipToLabel": "Gå till arbetsyta",
  "terraApplication.workspace.workspaceLabel": "Arbetsyta",
  "terraApplication.workspace.workspaceSettingsLabel": "Inställningar för arbetsyta"
};
var areTranslationsLoaded = true;
var locale = 'sv-SE';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
