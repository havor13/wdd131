// Footer year and last modified
const yearEl = document.querySelector('#year');
const lmEl = document.querySelector('#last-modified');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
if (lmEl) {
  // Uses document.lastModified for assignment requirement
  lmEl.textContent = document.lastModified;
}

// Hamburger menu toggle (mobile only shown via CSS)
const toggleBtn = document.querySelector('#menu-toggle');
const nav = document.querySelector('#primary-nav');

function closeMenu() {
  nav.classList.remove('open');
  if (toggleBtn) {
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-label', 'Open menu');
    toggleBtn.textContent = '☰';
  }
}

function openMenu() {
  nav.classList.add('open');
  if (toggleBtn) {
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.setAttribute('aria-label', 'Close menu');
    toggleBtn.textContent = '✕';
  }
}

if (toggleBtn && nav) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = nav.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  // Close menu on link click (good UX)
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      closeMenu();
    }
  });

  // Ensure correct state on resize (e.g., switch to desktop)
  const mql = window.matchMedia('(min-width: 700px)');
  mql.addEventListener('change', () => {
    // If moving to desktop, ensure menu is closed and button state reset
    if (mql.matches) {
      closeMenu();
    }
  });
}
