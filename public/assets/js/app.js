let catalogThumbs = new Swiper(".catalog .catalog__filter", {
  slidesPerView: "auto",
  spaceBetween: 15,
  breakpoints: {
    1025: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
    1680: {
      slidesPerView: 5,
      spaceBetween: 55,
    },
  },
  on: {
    slideChange: function () {
      catalogSwiper.slideTo(this.activeIndex);
    },
  },
});

let catalogSwiper = new Swiper(".catalog .catalog__list", {
  slidesPerView: 1,
  effect: "fade",
  autoHeight: true,
  allowTouchMove: false,
  thumbs: {
    swiper: catalogThumbs,
  },
});

let discountsSwiper = new Swiper(".discounts .discounts__list", {
  slidesPerView: "auto",
  spaceBetween: 12,
  navigation: {
    nextEl: ".discounts .swiper-button-next",
    prevEl: ".discounts .swiper-button-prev",
  },
  breakpoints: {
    475: {
      spaceBetween: 15,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
