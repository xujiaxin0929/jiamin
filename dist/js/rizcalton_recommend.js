'use strict';

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _parent = $('#rizcalton_recommend');
new Swiper(_parent.find('.swiper-container'), (_ref = {
    slidesPerView: 'auto',
    spaceBetween: 30
}, _defineProperty(_ref, 'slidesPerView', 3), _defineProperty(_ref, 'prevButton', _parent.find('.left')), _defineProperty(_ref, 'nextButton', _parent.find('.right')), _defineProperty(_ref, 'onAfterResize', function onAfterResize(swiper) {
    if (swiper.slides.length <= swiper.params.slidesPerView) {
        _parent.find('.control').hide();
    } else {
        _parent.find('.control').show();
    }
}), _defineProperty(_ref, 'onInit', function onInit(swiper) {
    if (swiper.slides.length <= swiper.params.slidesPerView) {
        _parent.find('.control').hide();
    } else {
        _parent.find('.control').show();
    }
}), _defineProperty(_ref, 'breakpoints', {
    500: {
        //xs
        slidesPerView: 1
    },
    767: {
        //xs
        slidesPerView: 2
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
//# sourceMappingURL=../maps/rizcalton_recommend.js.map
