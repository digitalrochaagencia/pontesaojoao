const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

if (toggle && nav) {
  const desktop = window.matchMedia('(min-width: 1024px)');

  function setMenuOpen(open) {
    nav.classList.toggle('open', open);
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }

  toggle.addEventListener('click', () => {
    setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('click', (event) => {
    if (nav.classList.contains('open') && !nav.contains(event.target) && !toggle.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      setMenuOpen(false);
      toggle.focus();
    }
  });

  desktop.addEventListener('change', (event) => {
    if (event.matches) setMenuOpen(false);
  });
}

const whatsappButton = document.querySelector('.whatsapp-float');
const heroPhoto = document.querySelector('.hero-inspired .hero-photo');
const mobileViewport = window.matchMedia('(max-width: 820px)');

if (whatsappButton && heroPhoto) {
  function positionWhatsAppBelowHero() {
    whatsappButton.style.removeProperty('top');
    whatsappButton.style.removeProperty('bottom');
    whatsappButton.style.removeProperty('visibility');

    if (!mobileViewport.matches) return;

    const photo = heroPhoto.getBoundingClientRect();
    const buttonHeight = whatsappButton.getBoundingClientRect().height || 44;
    const gap = 6;
    const buttonTop = photo.bottom + gap;
    const safeBottom = window.innerHeight - 8;
    const photoIsVisible = photo.bottom > 0 && photo.top < window.innerHeight;
    const fitsBelowPhoto = buttonTop + buttonHeight <= safeBottom;
    const heroBounds = heroPhoto.closest('.hero-inspired')?.getBoundingClientRect();
    const heroIsVisible = Boolean(heroBounds && heroBounds.bottom > 0 && heroBounds.top < window.innerHeight);

    if (!heroIsVisible) return;

    if (!heroPhoto.closest('.hero-team')) {
      whatsappButton.style.top = `${buttonTop}px`;
      whatsappButton.style.bottom = 'auto';
      if (!photoIsVisible || !fitsBelowPhoto) whatsappButton.style.visibility = 'hidden';
      return;
    }

    if (window.scrollY > 1) return;

    if (photoIsVisible && fitsBelowPhoto) {
      whatsappButton.style.top = `${buttonTop}px`;
      whatsappButton.style.bottom = 'auto';
    }
  }

  window.addEventListener('scroll', positionWhatsAppBelowHero, { passive: true });
  window.addEventListener('resize', positionWhatsAppBelowHero, { passive: true });
  window.addEventListener('load', positionWhatsAppBelowHero, { once: true });
  mobileViewport.addEventListener('change', positionWhatsAppBelowHero);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(positionWhatsAppBelowHero);
  positionWhatsAppBelowHero();
}
