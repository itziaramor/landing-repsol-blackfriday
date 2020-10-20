jQuery(document).ready(function () {
  function init() {
    onCarousel();
    scroll();
  }
  
  
  function onCarousel() {
    var $slickPager = $('.carousel__dots');
    var $slickCarousel = $('.js-carousel');
    
    $slickCarousel.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $slickPager.text(i + ' DE ' + slick.slideCount);
    });
    $('.js-carousel').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: $('.button-prev'),
      nextArrow: $('.button-next')
    });
  }
  
  
  function scroll() {
    var gridWidth = $('.js-grid-cols').outerWidth(true);
    var gridListWidth = $('.js-grid-list').outerWidth(true);
    $(".js-grid-cols").scrollLeft(gridWidth/2);
    $(".js-grid-list").scrollLeft(gridListWidth/2);
  }
  
  init();
});