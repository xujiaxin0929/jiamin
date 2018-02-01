'use strict';

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var hotel_more_parent = $('#hotel_more'),
    hotel_more_swiper = hotel_more_parent.find('.swiper-container'),
    hotel_more_control = hotel_more_parent.find('.control');
new Swiper(hotel_more_swiper, (_ref = {
  slidesPerView: 'auto',
  spaceBetween: 30
}, _defineProperty(_ref, 'slidesPerView', 3), _defineProperty(_ref, 'prevButton', hotel_more_parent.find('.left')), _defineProperty(_ref, 'nextButton', hotel_more_parent.find('.right')), _defineProperty(_ref, 'loop', true), _defineProperty(_ref, 'simulateTouch', false), _defineProperty(_ref, 'breakpoints', {
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
}), _defineProperty(_ref, 'onInit', function onInit(swiper) {
  if ($(window).width() < 991) {
    swiper.slides.length <= swiper.params.slidesPerView ? hotel_more_control.hide() : hotel_more_control.show();
  } else {
    hotel_more_control.hide();
  }
}), _defineProperty(_ref, 'onAfterResize', function onAfterResize(swiper) {
  if ($(window).width() < 991) {
    swiper.slides.length <= swiper.params.slidesPerView ? hotel_more_control.hide() : hotel_more_control.show();
  } else if (hotel_more_control.is(':visible')) {
    hotel_more_control.hide();
  }
}), _ref));
//# sourceMappingURL=../maps/hotel_more.js.map
