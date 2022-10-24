const swiper = new Swiper('.bathroom-swiper-slider', {
  // Optional parameters
  direction: 'horizontal',

  speed: 800,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 200,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    950: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: '.bathroom-next',
    prevEl: '.bathroom-prev',
  },

  autoHeigth: true,
});
