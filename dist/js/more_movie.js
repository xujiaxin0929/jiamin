'use strict';

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var movie_parent = $('#more_movie'),
    movie_swiper = movie_parent.find('.swiper-container'),
    movie_control = movie_parent.find('.control');
new Swiper(movie_swiper, (_ref = {
    slidesPerView: 'auto',
    spaceBetween: 30
}, _defineProperty(_ref, 'slidesPerView', 4), _defineProperty(_ref, 'loop', true), _defineProperty(_ref, 'simulateTouch', false), _defineProperty(_ref, 'pagination', '.swiper-pagination'), _defineProperty(_ref, 'prevButton', movie_swiper.find('.left')), _defineProperty(_ref, 'nextButton', movie_swiper.find('.right')), _defineProperty(_ref, 'breakpoints', {
    500: {
        //xs
        slidesPerView: 2,
        spaceBetween: 13
    },
    767: {
        //xs
        slidesPerView: 2,
        spaceBetween: 13
    },
    991: {
        //sm
        slidesPerView: 3
    },
    1199: {
        //md
        slidesPerView: 4
    }
}), _defineProperty(_ref, 'onInit', function onInit(swiper) {
    if ($(window).width() < 991) {
        swiper.slides.length <= swiper.params.slidesPerView ? movie_control.hide() : movie_control.show();
    } else {
        movie_control.hide();
    }
}), _defineProperty(_ref, 'onAfterResize', function onAfterResize(swiper) {
    if ($(window).width() < 991) {
        swiper.slides.length <= swiper.params.slidesPerView ? movie_control.hide() : movie_control.show();
    } else if (movie_control.is(':visible')) {
        movie_control.hide();
    }
}), _ref));
//# sourceMappingURL=../maps/more_movie.js.map
