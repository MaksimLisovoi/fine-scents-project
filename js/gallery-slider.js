const swiper = new Swiper('.gallery-swiper-slider', {
  direction: 'horizontal',
  //   loop: true,
  speed: 1800,

  breakpoints: {
    320: {
      spaceBetween: 30,
    },
    768: {
      spaceBetween: 30,
    },
    950: {
      spaceBetween: 400,
    },
    1800: {
      spaceBetween: 600,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: addZero,
    formatFractionTotal: addZero,
  },

  scrollbar: {
    el: '.gallery-scrollbar',
    draggable: true,
    // dragsize: 30,
  },

  navigation: {
    nextEl: '.gallery-next',
    prevEl: '.gallery-prev',
  },

  autoHeigth: true,
});

function addZero(num) {
  return num > 9 ? `${num}.` : `0${num}.`;
}
