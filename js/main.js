require('bootstrap');
require('slick-carousel');

$(function () {
  // Photo Gallery Slider
  var prevArrowHtml = `<div class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></div>`;
  var nextArrowHtml = `<div class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></div>`;

  $(".photo-gallery-slider").slick({
    infinite: true,
    mobileFirst: true,
    prevArrow: prevArrowHtml,
    nextArrow: nextArrowHtml,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 1
      }
    }, {
      breakpoint: 0,
      settings: {
        slidesPerRow: 1,
        rows: 2
      }
    }]
  });

  // Content Slider
  $(".insider-tips-slider").slick({
    infinite: true,
    mobileFirst: true,
    prevArrow: prevArrowHtml,
    nextArrow: nextArrowHtml
  });
});