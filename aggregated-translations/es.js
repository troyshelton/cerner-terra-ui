'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _es = require('react-intl/locale-data/es');

var _es2 = _interopRequireDefault(_es);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_es2.default);

var messages = {
  "Terra.AbstractModal.BeginModalDialog": "Comenzar el diálogo modal",
  "Terra.AbstractModal.EndModalDialog": "Finalizar el diálogo modal",
  "Terra.actionHeader.back": "Retroceder",
  "Terra.actionHeader.close": "Cerrar",
  "Terra.actionHeader.close.description": "Seleccione el botón para cerrar {text}",
  "Terra.actionHeader.maximize": "Maximizar",
  "Terra.actionHeader.maximize.description": "Seleccione el botón para maximizar {text}",
  "Terra.actionHeader.minimize": "Minimizar",
  "Terra.actionHeader.minimize.description": "Seleccione el botón para minimizar {text}",
  "Terra.actionHeader.next": "Siguiente",
  "Terra.actionHeader.previous": "Anterior",
  "Terra.ajax.error": "Error al cargar el contenido.",
  "Terra.avatar.deceased": "Fallecido/a",
  "Terra.demographicsBanner.dateOfBirth": "Fecha de nacimiento",
  "Terra.demographicsBanner.dateOfBirthFullText": "Fecha de nacimiento",
  "Terra.demographicsBanner.deceased": "Fallecido/a",
  "Terra.demographicsBanner.gestationalAge": "EG",
  "Terra.demographicsBanner.gestationalAgeFullText": "Edad gestacional",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "EPM",
  "Terra.demographicsBanner.postMenstrualAgeFullText": "Edad postmenstrual",
  "Terra.icon.IconConsultInstructionsForUse.title": "Icono para instrucciones electrónicas de uso",
  "Terra.notification.dialog.error": "Error",
  "Terra.notification.dialog.hazard-high": "Alerta",
  "Terra.notification.dialog.hazard-low": "Información",
  "Terra.notification.dialog.hazard-medium": "Advertencia",
  "Terra.Overlay.loading": "Cargando...",
  "Terra.popup.header.close": "Cerrar",
  "Terra.status-view.error": "Error",
  "Terra.status-view.no-data": "Sin resultados",
  "Terra.status-view.no-matching-results": "Sin resultados coincidentes",
  "Terra.status-view.not-authorized": "No autorizado",
  "terraApplication.actionMenu.headerCloseButtonLabel": "Cerrar",
  "terraApplication.errorBoundary.defaultErrorMessage": "El sistema detectó un error: {errorDetails}",
  "terraApplication.navigation.drawerMenu.navigation": "Elementos de navegación",
  "terraApplication.navigation.drawerMenu.utilities": "Elementos de utilidades",
  "terraApplication.navigation.extensions.rollupButtonDescription": "Herramientas adicionales",
  "terraApplication.navigation.extensions.rollupMenuHeaderTitle": "Herramientas adicionales",
  "terraApplication.navigation.header.menuButtonTitle": "Menú",
  "terraApplication.navigation.header.skipToContentTitle": "Saltar al contenido",
  "terraApplication.navigation.header.utilityButtonTitleNoUser": "Opciones",
  "terraApplication.navigation.header.utilityButtonTitleUser": "Configuración del usuario para: {currentUserName}",
  "terraApplication.navigation.notifications.new": "Nuevo",
  "terraApplication.navigation.tabs.rollupButtonDescription": "Más opciones de navegación",
  "terraApplication.navigation.tabs.rollupButtonTitle": "Más",
  "terraApplication.navigation.tabs.rollupMenuHeaderTitle": "Más opciones de navegación",
  "terraApplication.navigation.utilityMenu.headerTitle": "Utilidades",
  "terraApplication.navigation.utilityMenu.help": "Ayuda",
  "terraApplication.navigation.utilityMenu.logout": "Cerrar sesión",
  "terraApplication.navigation.utilityMenu.settings": "Configuración",
  "terraApplication.notificationBanner.advisory": "Recomendación.",
  "terraApplication.notificationBanner.alert": "Alerta.",
  "terraApplication.notificationBanner.dismiss": "Descartar",
  "terraApplication.notificationBanner.error": "Error.",
  "terraApplication.notificationBanner.info": "Información.",
  "terraApplication.notificationBanner.success": "Realizado correctamente.",
  "terraApplication.notificationBanner.unsatisfied": "Acción obligatoria.",
  "terraApplication.notificationBanner.unverified": "Historias clínicas externas.",
  "terraApplication.notificationBanner.warning": "Advertencia.",
  "terraApplication.notifications.newNotificationLabel": "Nueva {label} notificación. {bannerType} {bannerDescription}, {bannerAction}, {bannerDismiss}.",
  "terraApplication.notifications.regionLabel": "{label} notificaciones.",
  "terraApplication.notifications.removedNotificationLabel": "Notificación {label} quitada. {bannerType} {bannerDescription}.",
  "terraApplication.notifications.totalCountLabel": "Total {label} de notificaciones: {count}",
  "terraApplication.statusLayout.error": "Error",
  "terraApplication.statusLayout.no-data": "Sin resultados",
  "terraApplication.statusLayout.no-matching-results": "Ningún resultado coincidente",
  "terraApplication.statusLayout.not-authorized": "No autorizado",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "No guardar",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "Los cambios no guardados se hicieron en:",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "Los cambios se perderán si no los guarda. ¿Qué desea hacer?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Continuar editando",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "Se hicieron cambios no guardados en {promptDescription}.",
  "terraApplication.unsavedChangesPrompt.title": "Cambios no guardados",
  "terraApplication.workspace.activityOverlay.loading": "Cargando...",
  "terraApplication.workspace.hideWorkspaceLabel": "Ocultar área de trabajo",
  "terraApplication.workspace.showWorkspaceLabel": "Mostrar área de trabajo",
  "terraApplication.workspace.skipToLabel": "Pasar al Espacio de trabajo",
  "terraApplication.workspace.workspaceLabel": "Área de trabajo",
  "terraApplication.workspace.workspaceSettingsLabel": "Configuración del área de trabajo"
};
var areTranslationsLoaded = true;
var locale = 'es';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
