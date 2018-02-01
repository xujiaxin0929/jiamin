"use strict";

$(function () {
    $('.thumslider').thumslider({
        animation: "slide",
        controlNav: "thumbnails",
        pauseOnHover: true,
        touch: true,
        mousewheel: false,
        drag: true,
        start: function start() {
            black_bg();
        }

    });
});

$(document).ready(function () {
    slide_img();
    black_bg();
});

function black_bg() {
    var con_wid = $(".container").width();
    var win_wid = $(window).width();
    var left_val = (win_wid - con_wid) / 2;
    if (win_wid > 992) {
        $(".thum-control-nav.thum-control-thumbs").css({ "width": con_wid, "left": left_val });
    } else {
        $(".thum-control-nav.thum-control-thumbs").css({ "width": "100%", "left": 0 });
    }
}
$(window).resize(function () {

    slide_img();
    black_bg();
});

function slide_img() {
    var $bgs = $('.shop_details_thumbnail_slider1 .slide-bg');
    var _width = $(window).width();
    var _height = $(window).height();

    if (_width / _height > 1440 / 700) {
        var _w = _width;
        var _h = _height; //Math.round(_width * 700/1440)
        $bgs.css({
            left: 0,
            top: 0 + 'px',
            width: _w + 'px',
            height: _h + 'px'
        });
    } else {
        var _w = Math.round(_height * 1440 / 700);
        var _h = _height;
        $bgs.css({
            left: -Math.round((_w - _width) / 1) + 'px',
            top: 0,
            width: _w + 'px',
            height: _h + 'px'
        });
    }
}
//# sourceMappingURL=../maps/shop_details_thumbnail_slider.js.map
