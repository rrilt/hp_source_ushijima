
if (document.querySelector(".view-swiper")) {
  var mySwiper = new Swiper(".view-swiper", {
    loop: true, //ループさせる
    effect: "fade", //フェードのエフェクト
    autoplay: {
      delay: 4000, //４秒後に次の画像へ
      disableOnInteraction: false //ユーザー操作後に自動再生を再開する
    },
    speed: 2000 //２秒かけながら次の画像へ移動
  });
}

var mySwiper = new Swiper ('.recruit-swiper', {
  // ここからオプション
  loop: true,
  slidesPerView: "3",
  speed:15e3,
  spaceBetween: 0,
  autoplay: {
    delay:0,

  },
})





function switchByWidth(){
  if (window.matchMedia('(max-width: 767px)').matches) {
      //スマホ処理
      $(function () {
        "use strict";
        var flag = "view";
        $(window).on("scroll", function () {
          // scrollTop()が「200」より大きい場合
         //画面トップから、ナビゲーションメニューまでの高さ（ピクセル）を指定すれば、メニュースクロールで
         //消えていくタイミングでヘッダが表示されて固定される。  
          
          if ($(this).scrollTop() > 1) {
            if (flag === "view") {
              $(".animated").stop().css({opacity: '1.0'}).animate({
         //”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
                top: 0
              }, 500);
      
              flag = "hide";
            }
          } else {
            if (flag === "hide") {
              $(".animated").stop().animate({top:"-66px",opacity: 0}, 500);
          //上にあがり切ったら透過度を0%にして背景が生きるように
              　　　　//”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
              flag = "view";
            }
          }
        });
      });
  } else if (window.matchMedia('(min-width:768px)').matches) {
      //PC処理
      $(function () {
        "use strict";
        var flag = "view";
        $(window).on("scroll", function () {
          // scrollTop()が「200」より大きい場合
         //画面トップから、ナビゲーションメニューまでの高さ（ピクセル）を指定すれば、メニュースクロールで
         //消えていくタイミングでヘッダが表示されて固定される。  
          
          if ($(this).scrollTop() > 1200) {
            if (flag === "view") {
              $(".animated").stop().css({opacity: '1.0'}).animate({
         //”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
                top: 0
              }, 500);
      
              flag = "hide";
            }
          } else {
            if (flag === "hide") {
              $(".animated").stop().animate({top:"-66px",opacity: 0}, 500);
          //上にあがり切ったら透過度を0%にして背景が生きるように
              　　　　//”▲.fix-header”の部分は固定ヘッダとして表示させるブロックのID名もしくはクラス名に
              flag = "view";
            }
          }
        });
      });
  }
}

//ロードとリサイズの両方で同じ処理を付与する
window.onload = switchByWidth;
window.onresize = switchByWidth;


function initSmoothScroll() {
  $("a[href^='#']").bind("click", function(e) {
      e ? e.preventDefault() : window.event && (window.event.returnValue = !1);
      var n = $(this).attr("href")
        , i = $(n).offset()
        , t = $(".animated").height()
        , o = Math.min(i.top, $(document).height() - $(window).height());
      $("html,body").animate({
          scrollTop: o - 70
      }, 1e3, "easeOutExpo")
  })
}

function initInViewItem() {
  var e = [ ".about-wrapper", ".work-wrapper", ".recruit-wrapper", ".store-wrapper"];
  $(e.join(",")).css("opacity", "0");
  var n = 100
    , i = 800;
 
  $(".about-wrapper").on("inview", function() {
      $(this).delay(n).fadeTo(i, 1, "easeInOutSine")
  }),
  $(".work-wrapper").on("inview", function() {
      $(this).delay(n).fadeTo(i, 1, "easeInOutSine")
  }),
  $(".recruit-wrapper").on("inview", function() {
      $(this).delay(n).fadeTo(i, 1, "easeInOutSine")
  }),
  $(".store-wrapper").on("inview", function() {
      $(this).delay(n).fadeTo(i, 1, "easeInOutSine")
  })
}

$(function() {

  initSmoothScroll(),
  initInViewItem() ,
  $("head").append('<style type="text/css">#container { display: none; }</style>')
});
