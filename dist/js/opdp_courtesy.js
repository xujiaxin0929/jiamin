'use strict';

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var courtesy_parent = $('#opdp_courtesy');
new Swiper(courtesy_parent.find('.swiper-container'), (_ref = {
    slidesPerView: 'auto',
    spaceBetween: 30
}, _defineProperty(_ref, 'slidesPerView', 4), _defineProperty(_ref, 'loop', true), _defineProperty(_ref, 'prevButton', courtesy_parent.find('.left')), _defineProperty(_ref, 'nextButton', courtesy_parent.find('.right')), _defineProperty(_ref, 'breakpoints', {
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
        slidesPerView: 4
    }
}), _ref));
//# sourceMappingURL=../maps/opdp_courtesy.js.map
