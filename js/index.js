
var mySwiper = new Swiper ('.swiper-container', {
  // ここからオプション
  loop: true,
  slidesPerView: "3",
  speed:15e3,
  spaceBetween: 0,
  autoplay: {
    delay:0,

  },
})

window.sr = ScrollReveal();
sr.reveal('.animate',{ origin:'top',easing: 'ease', duration: 2000, distance: '400px', opacity: 1, scale: 1 });

$(function() {
$('.animated').on('inview', function(event, isInView) {
 if (isInView) {
 //表示領域に入った時
   $(this).addClass('fadeInDown');
 } else {
 //表示領域から出た時
   $(this).removeClass('fadeInDown');
   $(this).cs('opacity',0); //非表示にしておく
 }
});      
});