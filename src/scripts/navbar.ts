const nav = document.querySelector<HTMLElement>('[data-navbar]');
const sentinel = document.querySelector<HTMLElement>('[data-nav-sentinel]');

if (nav && sentinel) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      nav.classList.toggle('is-scrolled', !entry.isIntersecting);
    },
    { threshold: 0 }
  );
  observer.observe(sentinel);
}

const toggle = document.querySelector<HTMLElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');

if (toggle && menu) {
  const closeMenu = () => {
    menu.classList.add('hidden');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('overflow-hidden');
  };

  const openMenu = () => {
    menu.classList.remove('hidden');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('overflow-hidden');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggle.classList.contains('open')) closeMenu();
  });
}
