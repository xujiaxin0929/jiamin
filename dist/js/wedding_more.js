'use strict';

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var wedding_more_parent = $('#wedding_more'),
    wedding_more_container = wedding_more_parent.find('.swiper-container'),
    wedding_more_control = wedding_more_parent.find('.control');
new Swiper(wedding_more_container, (_ref = {
  slidesPerView: 'auto',
  spaceBetween: 30
}, _defineProperty(_ref, 'slidesPerView', 3), _defineProperty(_ref, 'loop', true), _defineProperty(_ref, 'simulateTouch', false), _defineProperty(_ref, 'prevButton', wedding_more_parent.find('.left')), _defineProperty(_ref, 'nextButton', wedding_more_parent.find('.right')), _defineProperty(_ref, 'onInit', function onInit(swiper) {
  if ($(window).width() < 991) {
    swiper.slides.length <= swiper.params.slidesPerView ? wedding_more_control.hide() : wedding_more_control.show();
  } else {
    wedding_more_control.hide();
  }
}), _defineProperty(_ref, 'onAfterResize', function onAfterResize(swiper) {
  if ($(window).width() < 991) {
    swiper.slides.length <= swiper.params.slidesPerView ? wedding_more_control.hide() : wedding_more_control.show();
  } else if (wedding_more_control.is(':visible')) {
    wedding_more_control.hide();
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
//# sourceMappingURL=../maps/wedding_more.js.map
