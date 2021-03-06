(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const menuBtnRefClose = document.querySelector('[data-menu-button-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  const desktopAccountBtnRef = document.querySelector('[desktop-data-account-button]');
  const accountBtnRef = document.querySelector('[data-account-button]');
  const accountMenuRef = document.querySelector('[data-account-menu]');
  const accountBtnRefClose = document.querySelector('[data-account-button-close]');

  const desktopBasketBtnRef = document.querySelector('[desktop-data-basket-button]');
  const basketBtnRef = document.querySelector('[data-basket-button]');
  const basketMenuRef = document.querySelector('[data-basket-menu]');
  const basketBtnRefClose = document.querySelector('[data-basket-button-close]');

  const desktopShopBtnRef = document.querySelector('[desktop-data-shop-button]');
  const shopMenuRef = document.querySelector('[data-shop-menu]');
  const shopBtnRefClose = document.querySelector('[data-shop-button-close]');

  const desktopAboutBtnRef = document.querySelector('[desktop-data-about-button]');
  const aboutMenuRef = document.querySelector('[data-about-menu]');
  const aboutBtnRefClose = document.querySelector('[data-about-button-close]');

  //BURGER MENU MOBILE//

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });

  menuBtnRefClose.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
  });

  //ACCOUNT MENU//

  accountBtnRef.addEventListener('click', () => {
    const expanded = accountBtnRef.getAttribute('aria-expanded') === 'true' || false;
    const expandedDesktop = desktopAccountBtnRef.getAttribute('aria-expanded') === 'true' || false;

    desktopAccountBtnRef.setAttribute('aria-expanded', !expandedDesktop);
    accountBtnRef.setAttribute('aria-expanded', !expanded);

    accountMenuRef.classList.toggle('is-open');
  });

  desktopAccountBtnRef.addEventListener('click', () => {
    const expanded = desktopAccountBtnRef.getAttribute('aria-expanded') === 'true' || false;
    const expandedMobile = accountBtnRef.getAttribute('aria-expanded') === 'true' || false;

    accountBtnRef.setAttribute('aria-expanded', !expandedMobile);
    desktopAccountBtnRef.setAttribute('aria-expanded', !expanded);

    accountMenuRef.classList.toggle('is-open');
  });

  accountBtnRefClose.addEventListener('click', () => {
    const expanded = accountBtnRef.getAttribute('aria-expanded') === 'true' || false;
    const expandedDesktop = desktopAccountBtnRef.getAttribute('aria-expanded') === 'true' || false;

    accountBtnRef.setAttribute('aria-expanded', !expanded);
    desktopAccountBtnRef.setAttribute('aria-expanded', !expandedDesktop);
    accountMenuRef.classList.toggle('is-open');
  });

  //BASKET MENU//

  basketBtnRef.addEventListener('click', () => {
    const expanded = basketBtnRef.getAttribute('aria-expanded') === 'true' || false;

    basketBtnRef.classList.toggle('is-open');
    basketBtnRef.setAttribute('aria-expanded', !expanded);

    basketMenuRef.classList.toggle('is-open');
  });

  desktopBasketBtnRef.addEventListener('click', () => {
    const expanded = desktopBasketBtnRef.getAttribute('aria-expanded') === 'true' || false;

    desktopBasketBtnRef.classList.toggle('is-open');
    desktopBasketBtnRef.setAttribute('aria-expanded', !expanded);

    basketMenuRef.classList.toggle('is-open');
  });

  basketBtnRefClose.addEventListener('click', () => {
    const expanded = basketBtnRef.getAttribute('aria-expanded') === 'true' || false;

    basketBtnRef.setAttribute('aria-expanded', !expanded);
    basketMenuRef.classList.toggle('is-open');
  });

  //SHOP//

  desktopShopBtnRef.addEventListener('click', () => {
    const expanded = desktopShopBtnRef.getAttribute('aria-expanded') === 'true' || false;

    desktopShopBtnRef.classList.toggle('is-open');
    desktopShopBtnRef.setAttribute('aria-expanded', !expanded);

    shopMenuRef.classList.toggle('is-open');
  });

  shopBtnRefClose.addEventListener('click', () => {
    const expanded = desktopShopBtnRef.getAttribute('aria-expanded') === 'true' || false;

    desktopShopBtnRef.setAttribute('aria-expanded', !expanded);
    shopMenuRef.classList.toggle('is-open');
  });

  //ABOUT//

  desktopAboutBtnRef.addEventListener('click', () => {
    const expanded = desktopAboutBtnRef.getAttribute('aria-expanded') === 'true' || false;

    desktopAboutBtnRef.classList.toggle('is-open');
    desktopAboutBtnRef.setAttribute('aria-expanded', !expanded);

    aboutMenuRef.classList.toggle('is-open');
  });

  aboutBtnRefClose.addEventListener('click', () => {
    const expanded = desktopAboutBtnRef.getAttribute('aria-expanded') === 'true' || false;

    desktopAboutBtnRef.setAttribute('aria-expanded', !expanded);
    aboutMenuRef.classList.toggle('is-open');
  });
})();
