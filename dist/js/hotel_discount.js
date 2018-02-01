'use strict';

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var hotel_discount_parent = $('#hotel_discount'),
    hotel_discount_swiper = hotel_discount_parent.find('.swiper-container'),
    hotel_discount_control = hotel_discount_parent.find('.control');
new Swiper(hotel_discount_swiper, (_ref = {
  slidesPerView: 'auto',
  spaceBetween: 30
}, _defineProperty(_ref, 'slidesPerView', 3), _defineProperty(_ref, 'prevButton', hotel_discount_parent.find('.left')), _defineProperty(_ref, 'nextButton', hotel_discount_parent.find('.right')), _defineProperty(_ref, 'loop', true), _defineProperty(_ref, 'simulateTouch', false), _defineProperty(_ref, 'breakpoints', {
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
    swiper.slides.length <= swiper.params.slidesPerView ? hotel_discount_control.hide() : hotel_discount_control.show();
  } else {
    hotel_discount_control.hide();
  }
}), _defineProperty(_ref, 'onAfterResize', function onAfterResize(swiper) {
  if ($(window).width() < 991) {
    swiper.slides.length <= swiper.params.slidesPerView ? hotel_discount_control.hide() : hotel_discount_control.show();
  } else if (hotel_discount_control.is(':visible')) {
    hotel_discount_control.hide();
  }
}), _ref));
//# sourceMappingURL=../maps/hotel_discount.js.map
