'use strict';

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// new Swiper($('#room_more').find('.swiper-container'), {
//     slidesPerView: 'auto',
//     spaceBetween: 9,
//     prevButton:$('#room_more').find('.left'),
//     nextButton:$('#room_more').find('.right')
// })


new Swiper($('#room_more').find('.swiper-container'), (_ref = {
	slidesPerView: 'auto',
	spaceBetween: 9
}, _defineProperty(_ref, 'slidesPerView', 3), _defineProperty(_ref, 'prevButton', $('#room_more').find('.left')), _defineProperty(_ref, 'nextButton', $('#room_more').find('.right')), _defineProperty(_ref, 'breakpoints', {
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
}), _ref));
//# sourceMappingURL=../maps/room_more.js.map
