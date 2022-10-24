const swiper = new Swiper('.main-swiper-slider', {
  direction: 'horizontal',
  //   loop: true,
  speed: 2000,
  //   loop: true,

  //   breakpoints: {
  //     320: {
  //       spaceBetween: 200,
  //     },
  //     768: {
  //       spaceBetween: 0,
  //     },
  //   },

  pagination: {
    el: '.main-swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: addZero,
    formatFractionTotal: addZero,
  },

  scrollbar: {
    el: '.main-scrollbar',
    draggable: true,
    // dragsize: 30,
  },

  autoHeigth: true,

  autoplay: {
    delay: 2500,
  },
});

function addZero(num) {
  return num > 9 ? `${num}.` : `0${num}.`;
}
