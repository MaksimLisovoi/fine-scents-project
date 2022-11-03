const header = document.querySelector('.header');

let prevScrollY = 0;
let minScrollY = 100;

console.log(header);

window.addEventListener('scroll', function (e) {
  if (window.scrollY <= 50) {
    header.classList.add('header--transparent-bg');
  } else {
    header.classList.remove('header--transparent-bg');
  }
  if (window.scrollY < prevScrollY) {
    header.classList.add('header--visible');
  } else if (window.scrollY > prevScrollY) {
    if (window.scrollY < minScrollY) return;
    header.classList.remove('header--visible');
  }

  prevScrollY = window.scrollY;
});
