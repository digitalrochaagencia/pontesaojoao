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
  let frameRequested = false;

  function updateWhatsAppPosition() {
    frameRequested = false;

    if (!mobileViewport.matches) {
      whatsappButton.classList.remove('is-positioned-above-hero');
      whatsappButton.style.removeProperty('--whatsapp-hero-top');
      return;
    }

    if (whatsappButton.classList.contains('is-positioned-above-hero')) {
      whatsappButton.classList.remove('is-positioned-above-hero');
      whatsappButton.style.removeProperty('--whatsapp-hero-top');
    }

    const button = whatsappButton.getBoundingClientRect();
    const photo = heroPhoto.getBoundingClientRect();
    const overlaps = button.left < photo.right
      && button.right > photo.left
      && button.top < photo.bottom
      && button.bottom > photo.top;

    if (overlaps) {
      const top = Math.max(8, photo.top - button.height - 6);
      whatsappButton.style.setProperty('--whatsapp-hero-top', `${top}px`);
      whatsappButton.classList.add('is-positioned-above-hero');
    }
  }

  function scheduleWhatsAppPositionCheck() {
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame(updateWhatsAppPosition);
  }

  window.addEventListener('scroll', scheduleWhatsAppPositionCheck, { passive: true });
  window.addEventListener('resize', scheduleWhatsAppPositionCheck, { passive: true });
  window.addEventListener('load', scheduleWhatsAppPositionCheck, { once: true });
  mobileViewport.addEventListener('change', scheduleWhatsAppPositionCheck);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(scheduleWhatsAppPositionCheck);
  scheduleWhatsAppPositionCheck();
}
