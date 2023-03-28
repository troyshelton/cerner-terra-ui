'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _fr = require('react-intl/locale-data/fr');

var _fr2 = _interopRequireDefault(_fr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_fr2.default);

var messages = {
  "Terra.AbstractModal.BeginModalDialog": "Commencer le dialogue modal",
  "Terra.AbstractModal.EndModalDialog": "Terminer le dialogue modal",
  "Terra.actionHeader.back": "Retour",
  "Terra.actionHeader.close": "Fermer",
  "Terra.actionHeader.close.description": "Sélectionnez le bouton pour fermer {text}.",
  "Terra.actionHeader.maximize": "Agrandir",
  "Terra.actionHeader.maximize.description": "Sélectionnez le bouton pour agrandir {text}.",
  "Terra.actionHeader.minimize": "Réduire",
  "Terra.actionHeader.minimize.description": "Sélectionnez le bouton pour réduire {text}.",
  "Terra.actionHeader.next": "Suivant",
  "Terra.actionHeader.previous": "Précédent",
  "Terra.ajax.error": "Échec du chargement du contenu.",
  "Terra.avatar.deceased": "Décédé(e)",
  "Terra.demographicsBanner.dateOfBirth": "Date de naissance",
  "Terra.demographicsBanner.dateOfBirthFullText": "Date de naissance",
  "Terra.demographicsBanner.deceased": "Décédé(e)",
  "Terra.demographicsBanner.gestationalAge": "Âge gestationnel",
  "Terra.demographicsBanner.gestationalAgeFullText": "Âge gestationnel",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "Âge postmenstruel",
  "Terra.demographicsBanner.postMenstrualAgeFullText": "Âge postmenstruel",
  "Terra.icon.IconConsultInstructionsForUse.title": "Icône Instructions électroniques pour l'utilisation",
  "Terra.notification.dialog.error": "Erreur",
  "Terra.notification.dialog.hazard-high": "Alerte",
  "Terra.notification.dialog.hazard-low": "Information",
  "Terra.notification.dialog.hazard-medium": "Avertissement",
  "Terra.Overlay.loading": "Chargement...",
  "Terra.popup.header.close": "Fermer",
  "Terra.status-view.error": "Erreur",
  "Terra.status-view.no-data": "Aucun résultat",
  "Terra.status-view.no-matching-results": "Aucun résultat correspondant",
  "Terra.status-view.not-authorized": "Non autorisé",
  "terraApplication.actionMenu.headerCloseButtonLabel": "Fermer",
  "terraApplication.errorBoundary.defaultErrorMessage": "Le système a rencontré une erreur : {errorDetails}",
  "terraApplication.navigation.drawerMenu.navigation": "Éléments de navigation",
  "terraApplication.navigation.drawerMenu.utilities": "Éléments de l'utilitaire",
  "terraApplication.navigation.extensions.rollupButtonDescription": "Outils supplémentaires",
  "terraApplication.navigation.extensions.rollupMenuHeaderTitle": "Outils supplémentaires",
  "terraApplication.navigation.header.menuButtonTitle": "Menu",
  "terraApplication.navigation.header.skipToContentTitle": "Accéder au contenu",
  "terraApplication.navigation.header.utilityButtonTitleNoUser": "Options",
  "terraApplication.navigation.header.utilityButtonTitleUser": "Paramètres utilisateur pour : {currentUserName}",
  "terraApplication.navigation.notifications.new": "Nouveau",
  "terraApplication.navigation.tabs.rollupButtonDescription": "Liens de navigation supplémentaires",
  "terraApplication.navigation.tabs.rollupButtonTitle": "Plus",
  "terraApplication.navigation.tabs.rollupMenuHeaderTitle": "Liens de navigation supplémentaires",
  "terraApplication.navigation.utilityMenu.headerTitle": "Utilitaires",
  "terraApplication.navigation.utilityMenu.help": "Aide",
  "terraApplication.navigation.utilityMenu.logout": "Déconnexion",
  "terraApplication.navigation.utilityMenu.settings": "Paramètres",
  "terraApplication.notificationBanner.advisory": "Recommandation.",
  "terraApplication.notificationBanner.alert": "Alerte.",
  "terraApplication.notificationBanner.dismiss": "Ignorer",
  "terraApplication.notificationBanner.error": "Erreur.",
  "terraApplication.notificationBanner.info": "Informations.",
  "terraApplication.notificationBanner.success": "Réussite.",
  "terraApplication.notificationBanner.unsatisfied": "Action requise.",
  "terraApplication.notificationBanner.unverified": "Dossiers extérieurs.",
  "terraApplication.notificationBanner.warning": "Avertissement.",
  "terraApplication.notifications.newNotificationLabel": "Nouvelle notification {label}. {bannerType} {bannerDescription}, {bannerAction}, {bannerDismiss}.",
  "terraApplication.notifications.regionLabel": "Notifications {label}.",
  "terraApplication.notifications.removedNotificationLabel": "Notification {label} supprimée. {bannerType} {bannerDescription}.",
  "terraApplication.notifications.totalCountLabel": "Total des notifications {label} : {count}",
  "terraApplication.statusLayout.error": "Erreur",
  "terraApplication.statusLayout.no-data": "Aucun résultat",
  "terraApplication.statusLayout.no-matching-results": "Aucun résultat correspondant",
  "terraApplication.statusLayout.not-authorized": "Non autorisé",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "Ne pas enregistrer",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "Des modifications apportées aux éléments suivants n'ont pas été enregistrées :",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "Si vous n'enregistrez pas les modifications, elles seront perdues. Comment voulez-vous procéder ?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Continuer la modification",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "Des modifications apportées au composant {promptDescription} n'ont pas été enregistrées.",
  "terraApplication.unsavedChangesPrompt.title": "Modifications non enregistrées",
  "terraApplication.workspace.activityOverlay.loading": "Chargement...",
  "terraApplication.workspace.hideWorkspaceLabel": "Masquer l'espace de travail",
  "terraApplication.workspace.showWorkspaceLabel": "Afficher l'espace de travail",
  "terraApplication.workspace.skipToLabel": "Accéder à l'espace de travail",
  "terraApplication.workspace.workspaceLabel": "l'espace de travail",
  "terraApplication.workspace.workspaceSettingsLabel": "Paramètres de l'espace de travail"
};
var areTranslationsLoaded = true;
var locale = 'fr-FR';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
