'use strict';

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

new Swiper($('#hotel_advantages').find('.swiper-container'), (_ref = {
	slidesPerView: 'auto',
	spaceBetween: 160
}, _defineProperty(_ref, 'slidesPerView', 3), _defineProperty(_ref, 'prevButton', $('#hotel_advantages').find('.left')), _defineProperty(_ref, 'nextButton', $('#hotel_advantages').find('.right')), _defineProperty(_ref, 'breakpoints', {
	767: {
		//xs
		slidesPerView: 3,
		spaceBetween: 20
	},
	991: {
		//sm
		slidesPerView: 3,
		spaceBetween: 50
	},
	1199: {
		//md
		slidesPerView: 3,
		spaceBetween: 100
	}
}), _ref));
//# sourceMappingURL=../maps/hotel_advantages.js.map
