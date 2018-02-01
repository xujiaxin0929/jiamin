'use strict';

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var wedding_parent = $('#wedding_recommend'),
    wedding_swiper = wedding_parent.find('.swiper-container'),
    wedding_control = wedding_parent.find('.control');
new Swiper(wedding_swiper, (_ref = {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  simulateTouch: false
}, _defineProperty(_ref, 'slidesPerView', 3), _defineProperty(_ref, 'prevButton', wedding_parent.find('.left')), _defineProperty(_ref, 'nextButton', wedding_parent.find('.right')), _defineProperty(_ref, 'onInit', function onInit(swiper) {
  if ($(window).width() < 991) {
    swiper.slides.length <= swiper.params.slidesPerView ? wedding_control.hide() : wedding_control.show();
  } else {
    wedding_control.hide();
  }
}), _defineProperty(_ref, 'onAfterResize', function onAfterResize(swiper) {
  if ($(window).width() < 991) {
    swiper.slides.length <= swiper.params.slidesPerView ? wedding_control.hide() : wedding_control.show();
  } else if (wedding_control.is(':visible')) {
    wedding_control.hide();
  }
}), _defineProperty(_ref, 'breakpoints', {
  500: {
    //xs
    slidesPerView: 1
  },
  991: {
    //sm
    slidesPerView: 2
  },
  1199: {
    //md
    slidesPerView: 3
  }
}), _ref));
//# sourceMappingURL=../maps/wedding_recommend.js.map
