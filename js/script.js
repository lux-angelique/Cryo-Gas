$(document).ready(function(){
    $('.slider-box').slick({
        arrows: false
    });
    $('.imgprev').click(function(){
      $('.slider-box').slick('slickPrev');
    });
  $('.imgnext').click(function () {
    $('.slider-box').slick('slickNext');
  });
});
