//ヘッダーの高さ分だけコンテンツを下げる
$(function() {
    var height=$("header").height();
    $("head-title").css("margin-top", height + 10);//10pxだけ余裕をもたせる
});

//ハンバーガーメニュー

(function($) {
    $(function () {
      $('#nav-toggle').on('click', function() {
        $('body').toggleClass('open');
      });
    });
})(jQuery);