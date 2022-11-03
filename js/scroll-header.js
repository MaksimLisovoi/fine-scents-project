const header = document.querySelector('[js-header]');

const logoText = document.querySelectorAll('.logo__text');
const logoIcon = document.querySelector('.logo__icon');
const nav = document.querySelector('.navigation-desktop__nav');

let prevScrollY = 0;
let minScrollY = 100;

// console.log(header);

window.addEventListener('scroll', function (e) {
  if (window.scrollY <= 50) {
    header.classList.add('header--transparent-bg');
    nav.classList.remove('scroll-nav');
    logoIcon.attributes.src.nodeValue = './images/logo-white.svg';
    logoIcon.classList.remove('logo__icon--black');
  } else {
    header.classList.remove('header--transparent-bg');

    nav.classList.add('scroll-nav');
    logoIcon.classList.add('logo__icon--black');
    logoIcon.attributes.src.nodeValue = './images/logo-for-scroll.svg';
  }
  if (window.scrollY < prevScrollY) {
    header.classList.add('header--visible');
  } else if (window.scrollY > prevScrollY) {
    if (window.scrollY < minScrollY) return;
    header.classList.remove('header--visible');
  }

  prevScrollY = window.scrollY;
});

// console.dir(logoText);
// console.dir(logoIcon.attributes.fill.value);
console.log(logoIcon.attributes.src.nodeValue);

// #e5dfd3
