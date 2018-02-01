'use strict';

var _parent = $('#opdp_test');
new Swiper(_parent.find('.swiper-container'), {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 50,
    loop: true,
    paginationClickable: true,
    prevButton: _parent.find('.left'),
    nextButton: _parent.find('.right'),
    pagination: _parent.find('.swiper-pagination')
});
//# sourceMappingURL=../maps/opdp_test.js.map