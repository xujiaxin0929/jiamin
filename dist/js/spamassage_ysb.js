'use strict';

$('#spamassage_ysb').find('.swiper-container').each(function () {
    new Swiper($(this), {
        pagination: $(this).find('.swiper-pagination'),
        paginationClickable: true,
        prevButton: '.left',
        nextButton: '.right',
        loop: true
    });
});
if ($(window).width() > 991) {
    $('#spamassage_ysb').find('.swiper-container').hover(function () {
        $(this).find('.left').fadeIn();
        $(this).find('.right').fadeIn();
    }, function () {
        $(this).find('.left').fadeOut();
        $(this).find('.right').fadeOut();
    });
}
//# sourceMappingURL=../maps/spamassage_ysb.js.map
