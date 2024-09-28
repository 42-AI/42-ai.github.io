TODO

/**
 * Add custom listener for LANGUAGE mode toggle (fr/en)
 */
const toggle = document.getElementById('language-toggle');

export function languageWatcher() {
  if (!toggle) {
    return;
  }

  toggle.addEventListener('click', () => {
    languageToggle.flipMode();
  });