const requireVersionSet = require('./requireVersionSet');

const versionSet = [
  { name: 'terra-action-footer', versionRange: '>2.5.0' },
  { name: 'terra-action-header', versionRange: '>2.8.0' },
  { name: 'terra-aggregator', versionRange: '>4.6.0' },
  { name: 'terra-alert', versionRange: '>3.8.0' },
  { name: 'terra-arrange', versionRange: '>3.5.0' },
  { name: 'terra-avatar', versionRange: '>2.11.0' },
  { name: 'terra-badge', versionRange: '>3.7.0' },
  { name: 'terra-brand-footer', versionRange: '>2.3.0' },
  { name: 'terra-button-group', versionRange: '>3.7.0' },
  { name: 'terra-button', versionRange: '>3.7.0' },
  { name: 'terra-card', versionRange: '>3.4.0' },
  { name: 'terra-clinical-data-grid', versionRange: '>2.3.0' },
  { name: 'terra-clinical-detail-view', versionRange: '>3.3.0' },
  { name: 'terra-clinical-header', versionRange: '>3.2.0' },
  { name: 'terra-clinical-item-display', versionRange: '>3.2.0' },
  { name: 'terra-clinical-item-view', versionRange: '>3.2.0' },
  { name: 'terra-clinical-label-value-view', versionRange: '>3.3.0' },
  { name: 'terra-clinical-onset-picker', versionRange: '>4.0.0' },
  { name: 'terra-collapsible-menu-view', versionRange: '>5.4.0' },
  { name: 'terra-content-container', versionRange: '>3.5.0' },
  { name: 'terra-date-picker', versionRange: '>3.9.0' },
  { name: 'terra-date-time-picker', versionRange: '>3.10.0' },
  { name: 'terra-demographics-banner', versionRange: '>3.6.0' },
  { name: 'terra-dialog-modal', versionRange: '>2.6.0' },
  { name: 'terra-disclosure-manager', versionRange: '>4.1.0' },
  { name: 'terra-divider', versionRange: '>3.4.0' },
  { name: 'terra-dynamic-grid', versionRange: '>3.4.0' },
  { name: 'terra-embedded-content-consumer', versionRange: '>3.1.0' },
  { name: 'terra-form-checkbox', versionRange: '>3.6.0' },
  { name: 'terra-form-field', versionRange: '>3.5.0' },
  { name: 'terra-form-fieldset', versionRange: '>2.8.0' },
  { name: 'terra-form-input', versionRange: '>2.7.0' },
  { name: 'terra-form-radio', versionRange: '>3.7.0' },
  { name: 'terra-form-select', versionRange: '>5.10.0' },
  { name: 'terra-form-textarea', versionRange: '>3.7.0' },
  { name: 'terra-grid', versionRange: '>5.6.0' },
  { name: 'terra-heading', versionRange: '>4.1.0' },
  { name: 'terra-hookshot', versionRange: '>5.4.0' },
  { name: 'terra-hyperlink', versionRange: '>2.6.0' },
  { name: 'terra-icon', versionRange: '>3.5.0' },
  { name: 'terra-image', versionRange: '>3.4.0' },
  { name: 'terra-infinite-list', versionRange: '>3.0.0' },
  { name: 'terra-list', versionRange: '>4.2.0' },
  { name: 'terra-menu', versionRange: '>5.4.0' },
  { name: 'terra-modal-manager', versionRange: '>5.6.0' },
  { name: 'terra-notification-dialog', versionRange: '>2.6.0' },
  { name: 'terra-overlay', versionRange: '>3.7.0' },
  { name: 'terra-paginator', versionRange: '>2.8.0' },
  { name: 'terra-popup', versionRange: '>5.6.0' },
  { name: 'terra-profile-image', versionRange: '>3.4.0' },
  { name: 'terra-progress-bar', versionRange: '>4.1.0' },
  { name: 'terra-responsive-element', versionRange: '>4.4.0' },
  { name: 'terra-scroll', versionRange: '>2.4.0' },
  { name: 'terra-search-field', versionRange: '>3.7.0' },
  { name: 'terra-section-header', versionRange: '>2.7.0' },
  { name: 'terra-show-hide', versionRange: '>2.6.0' },
  { name: 'terra-signature', versionRange: '>2.8.0' },
  { name: 'terra-slide-group', versionRange: '>3.1.0' },
  { name: 'terra-slide-panel-manager', versionRange: '>4.6.0' },
  { name: 'terra-slide-panel', versionRange: '>3.1.0' },
  { name: 'terra-spacer', versionRange: '>3.5.0' },
  { name: 'terra-status-view', versionRange: '>3.8.0' },
  { name: 'terra-status', versionRange: '>4.1.0' },
  { name: 'terra-table', versionRange: '>3.7.0' },
  { name: 'terra-tabs', versionRange: '>5.4.0' },
  { name: 'terra-tag', versionRange: '>2.7.0' },
  { name: 'terra-text', versionRange: '>4.1.0' },
  { name: 'terra-theme-provider', versionRange: '>3.1.0' },
  { name: 'terra-time-input', versionRange: '>3.5.0' },
  { name: 'terra-toggle-button', versionRange: '>3.5.0' },
  { name: 'terra-toggle-section-header', versionRange: '>2.5.0' },
  { name: 'terra-toggle', versionRange: '>3.5.0' },
  { name: 'terra-visually-hidden-text', versionRange: '>2.4.0' },
];

module.exports = {
  create: ({ ruleConfig, projectType, report }) => ({
    dependencies: (dependencies) => requireVersionSet({
      versionSet, dependencies, ruleConfig, projectType, report, lintId: 'require-no-terra-base-peer-dependency-versions', messageString: 'no terra base peer dependencies',
    }),
  }),
};
