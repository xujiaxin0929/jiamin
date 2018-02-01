'use strict';

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var enjoyingtreatment_parent = $('#enjoyingtreatment'),
    enjoyingtreatment_swiper = enjoyingtreatment_parent.find('.swiper-container'),
    enjoyingtreatment_control = enjoyingtreatment_parent.find('.control');
new Swiper(enjoyingtreatment_swiper, (_ref = {
    slidesPerView: 'auto',
    spaceBetween: 30
}, _defineProperty(_ref, 'slidesPerView', 3), _defineProperty(_ref, 'loop', true), _defineProperty(_ref, 'simulateTouch', false), _defineProperty(_ref, 'prevButton', enjoyingtreatment_parent.find('.left')), _defineProperty(_ref, 'nextButton', enjoyingtreatment_parent.find('.right')), _defineProperty(_ref, 'breakpoints', {
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
//# sourceMappingURL=../maps/enjoyingtreatment.js.map
