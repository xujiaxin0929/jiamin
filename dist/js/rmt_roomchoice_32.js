'use strict';

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var roomchoice_parent = $('#rmt_roomchoice_32'),
    roomchoice_swiper = roomchoice_parent.find('.swiper-container'),
    roomchoice_control = roomchoice_parent.find('.control');
new Swiper(roomchoice_swiper, (_ref = {
    slidesPerView: 'auto',
    spaceBetween: 34
}, _defineProperty(_ref, 'slidesPerView', 3), _defineProperty(_ref, 'prevButton', roomchoice_parent.find('.left')), _defineProperty(_ref, 'nextButton', roomchoice_parent.find('.right')), _defineProperty(_ref, 'loop', true), _defineProperty(_ref, 'simulateTouch', false), _defineProperty(_ref, 'breakpoints', {
    767: {
        //xs
        slidesPerView: 1,
        simulateTouch: true
    },
    991: {
        //sm
        slidesPerView: 2,
        simulateTouch: true
    },
    1199: {
        //md
        slidesPerView: 3
    }
}), _defineProperty(_ref, 'onInit', function onInit(swiper) {
    roomchoice_control.show();
    if ($(window).width() < 767) {
        swiper.slides.length <= swiper.params.slidesPerView ? roomchoice_control.hide() : roomchoice_control.show();
    }
}), _defineProperty(_ref, 'onAfterResize', function onAfterResize(swiper) {
    roomchoice_control.show();
    if ($(window).width() < 767) {
        swiper.slides.length <= swiper.params.slidesPerView ? roomchoice_control.hide() : roomchoice_control.show();
    }
}), _ref));
//# sourceMappingURL=../maps/rmt_roomchoice_32.js.map
