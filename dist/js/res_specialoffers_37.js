'use strict';

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

new Swiper($('#res_specialoffers_37').find('.swiper-container'), (_ref = {
	slidesPerView: 'auto',
	spaceBetween: 30
}, _defineProperty(_ref, 'slidesPerView', 3), _defineProperty(_ref, 'loop', true), _defineProperty(_ref, 'prevButton', $('#res_specialoffers_37').find('.left')), _defineProperty(_ref, 'nextButton', $('#res_specialoffers_37').find('.right')), _defineProperty(_ref, 'breakpoints', {
	600: {
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
	if (swiper.slides.length <= swiper.params.slidesPerView) {
		$('#res_specialoffers_37').find('.left').hide();
		$('#res_specialoffers_37').find('.right').hide();
	}
}), _ref));
//# sourceMappingURL=../maps/res_specialoffers_37.js.map
