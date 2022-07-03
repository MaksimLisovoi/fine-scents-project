(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const menuBtnRefClose = document.querySelector('[data-menu-button-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  const accountBtnRef = document.querySelector('[data-account-button]');
  const accountMenuRef = document.querySelector('[data-account-menu]');
  const accountBtnRefClose = document.querySelector('[data-account-button-close]');

  const basketBtnRef = document.querySelector('[data-basket-button]');
  const basketMenuRef = document.querySelector('[data-basket-menu]');
  const basketBtnRefClose = document.querySelector('[data-basket-button-close]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });

  menuBtnRefClose.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
  });

  accountBtnRef.addEventListener('click', () => {
    const expanded = accountBtnRef.getAttribute('aria-expanded') === 'true' || false;

    accountBtnRef.classList.toggle('is-open');
    accountBtnRef.setAttribute('aria-expanded', !expanded);

    accountMenuRef.classList.toggle('is-open');
  });

  accountBtnRefClose.addEventListener('click', () => {
    const expanded = accountBtnRef.getAttribute('aria-expanded') === 'true' || false;

    accountBtnRef.setAttribute('aria-expanded', !expanded);
    accountMenuRef.classList.toggle('is-open');
  });

  basketBtnRef.addEventListener('click', () => {
    const expanded = basketBtnRef.getAttribute('aria-expanded') === 'true' || false;

    basketBtnRef.classList.toggle('is-open');
    basketBtnRef.setAttribute('aria-expanded', !expanded);

    basketMenuRef.classList.toggle('is-open');
  });

  basketBtnRefClose.addEventListener('click', () => {
    const expanded = basketBtnRef.getAttribute('aria-expanded') === 'true' || false;

    basketBtnRef.setAttribute('aria-expanded', !expanded);
    basketMenuRef.classList.toggle('is-open');
  });
})();
