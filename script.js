(function () {
  const toggle = document.getElementById('menuToggle');
  const panel = document.getElementById('menuPanel');

  if (!toggle || !panel) return;

  function openMenu() {
    panel.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    panel.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function isOpen() {
    return panel.classList.contains('open');
  }

  toggle.addEventListener('click', function (event) {
    event.stopPropagation();
    isOpen() ? closeMenu() : openMenu();
  });

  document.addEventListener('click', function (event) {
    if (isOpen() && !panel.contains(event.target) && event.target !== toggle) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen()) {
      closeMenu();
      toggle.focus();
    }
  });
})();
