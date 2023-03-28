'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _pt = require('react-intl/locale-data/pt');

var _pt2 = _interopRequireDefault(_pt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_pt2.default);

var messages = {
  "Terra.AbstractModal.BeginModalDialog": "Iniciar diálogo modal",
  "Terra.AbstractModal.EndModalDialog": "Caixa de diálogo modal final",
  "Terra.actionHeader.back": "Voltar",
  "Terra.actionHeader.close": "Fechar",
  "Terra.actionHeader.close.description": "Selecione o botão para fechar {text}",
  "Terra.actionHeader.maximize": "Maximizar",
  "Terra.actionHeader.maximize.description": "Selecione o botão para maximizar {text}",
  "Terra.actionHeader.minimize": "Minimizar",
  "Terra.actionHeader.minimize.description": "Selecione o botão para minimizar {text}",
  "Terra.actionHeader.next": "Próximo",
  "Terra.actionHeader.previous": "Anterior",
  "Terra.ajax.error": "Falha ao carregar conteúdo.",
  "Terra.avatar.deceased": "Óbito",
  "Terra.demographicsBanner.dateOfBirth": "DN",
  "Terra.demographicsBanner.dateOfBirthFullText": "Data Nasc",
  "Terra.demographicsBanner.deceased": "Óbito",
  "Terra.demographicsBanner.gestationalAge": "IG",
  "Terra.demographicsBanner.gestationalAgeFullText": "Idade gestacional",
  "Terra.demographicsBanner.noDataProvided": "--",
  "Terra.demographicsBanner.postMenstrualAge": "IPM",
  "Terra.demographicsBanner.postMenstrualAgeFullText": "Idade pós-mentrual",
  "Terra.icon.IconConsultInstructionsForUse.title": "Instruções eletrônicas para ícone de uso",
  "Terra.notification.dialog.error": "Erro",
  "Terra.notification.dialog.hazard-high": "Alerta",
  "Terra.notification.dialog.hazard-low": "Informações",
  "Terra.notification.dialog.hazard-medium": "Advertência",
  "Terra.Overlay.loading": "Carregando...",
  "Terra.popup.header.close": "Fechar",
  "Terra.status-view.error": "Erro",
  "Terra.status-view.no-data": "Sem resultados",
  "Terra.status-view.no-matching-results": "Não há resultados correspondentes",
  "Terra.status-view.not-authorized": "Não autorizado",
  "terraApplication.actionMenu.headerCloseButtonLabel": "Fechar",
  "terraApplication.errorBoundary.defaultErrorMessage": "Erro no sistema: {errorDetails}",
  "terraApplication.navigation.drawerMenu.navigation": "Itens de navegação",
  "terraApplication.navigation.drawerMenu.utilities": "Itens de utilitários",
  "terraApplication.navigation.extensions.rollupButtonDescription": "Ferramentas adicionais",
  "terraApplication.navigation.extensions.rollupMenuHeaderTitle": "Ferramentas adicionais",
  "terraApplication.navigation.header.menuButtonTitle": "Menu",
  "terraApplication.navigation.header.skipToContentTitle": "Pular para conteúdo",
  "terraApplication.navigation.header.utilityButtonTitleNoUser": "Opções",
  "terraApplication.navigation.header.utilityButtonTitleUser": "Configurações do usuário para: {currentUserName}",
  "terraApplication.navigation.notifications.new": "Novo",
  "terraApplication.navigation.tabs.rollupButtonDescription": "Mais navegação",
  "terraApplication.navigation.tabs.rollupButtonTitle": "Mais",
  "terraApplication.navigation.tabs.rollupMenuHeaderTitle": "Mais navegação",
  "terraApplication.navigation.utilityMenu.headerTitle": "Utilitários",
  "terraApplication.navigation.utilityMenu.help": "Ajuda",
  "terraApplication.navigation.utilityMenu.logout": "Logoff",
  "terraApplication.navigation.utilityMenu.settings": "Configurações",
  "terraApplication.notificationBanner.advisory": "Aviso.",
  "terraApplication.notificationBanner.alert": "Alerta.",
  "terraApplication.notificationBanner.dismiss": "Dispensar",
  "terraApplication.notificationBanner.error": "Erro.",
  "terraApplication.notificationBanner.info": "Informações.",
  "terraApplication.notificationBanner.success": "Sucesso.",
  "terraApplication.notificationBanner.unsatisfied": "Ação obrigatória.",
  "terraApplication.notificationBanner.unverified": "Registros externos.",
  "terraApplication.notificationBanner.warning": "Cuidado.",
  "terraApplication.notifications.newNotificationLabel": "Nova notificação {label}. {bannerType} {bannerDescription}, {bannerAction}, {bannerDismiss}.",
  "terraApplication.notifications.regionLabel": "{label} notificações.",
  "terraApplication.notifications.removedNotificationLabel": "Notificação {label} removida. {bannerType} {bannerDescription}.",
  "terraApplication.notifications.totalCountLabel": "Total de notificações {label}: {count}",
  "terraApplication.statusLayout.error": "Erro",
  "terraApplication.statusLayout.no-data": "Não há resultados",
  "terraApplication.statusLayout.no-matching-results": "Não há resultados correspondentes",
  "terraApplication.statusLayout.not-authorized": "Não autorizado",
  "terraApplication.unsavedChangesPrompt.acceptButtonText": "Não salvar",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro": "Alterações não salvas feitas em:",
  "terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro": "Se você não as salvar, essas alterações serão perdidas. Deseja continuar?",
  "terraApplication.unsavedChangesPrompt.rejectButtonText": "Continuar editando",
  "terraApplication.unsavedChangesPrompt.singlePromptMessage": "Alterações não salvas feitas em {promptDescription}.",
  "terraApplication.unsavedChangesPrompt.title": "Alterações sem salvar",
  "terraApplication.workspace.activityOverlay.loading": "Carregando...",
  "terraApplication.workspace.hideWorkspaceLabel": "Ocultar espaço de trabalho",
  "terraApplication.workspace.showWorkspaceLabel": "Mostrar espaço de trabalho",
  "terraApplication.workspace.skipToLabel": "Pular para espaço de trabalho",
  "terraApplication.workspace.workspaceLabel": "Espaço de trabalho",
  "terraApplication.workspace.workspaceSettingsLabel": "Configurações do espaço de trabalho"
};
var areTranslationsLoaded = true;
var locale = 'pt';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
