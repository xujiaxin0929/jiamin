"use strict";

window.onload = function () {

  // 获取节点
  var block = document.getElementById("block");
  var oW, oH;
  // 绑定touchstart事件
  block.addEventListener("touchstart", function (e) {
    console.log(e);
    var touches = e.touches[0];
    oW = touches.clientX - block.offsetLeft;
    oH = touches.clientY - block.offsetTop;
    //阻止页面的滑动默认事件
    document.addEventListener("touchmove", defaultEvent, false);
  }, false);

  block.addEventListener("touchmove", function (e) {
    var touches = e.touches[0];
    var oLeft = touches.clientX - oW;
    var oTop = touches.clientY - oH;
    if (oLeft < 0) {
      oLeft = 0;
    } else if (oLeft > document.documentElement.clientWidth - block.offsetWidth) {
      oLeft = document.documentElement.clientWidth - block.offsetWidth;
    }
    block.style.left = oLeft + "px";
    block.style.top = oTop + "px";
  }, false);

  block.addEventListener("touchend", function () {
    document.removeEventListener("touchmove", defaultEvent, false);
  }, false);
  function defaultEvent(e) {
    e.preventDefault();
  }
};
//# sourceMappingURL=../maps/brands_catalog_map.js.map
