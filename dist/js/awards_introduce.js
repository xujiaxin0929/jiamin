'use strict';

$('.awards_select .dropdown-menu li').click(function () {
  var _parent = $(this).closest('.dropdown');
  _parent.find('.dropdown-toggle').text($(this).text());
});
//# sourceMappingURL=../maps/awards_introduce.js.map
