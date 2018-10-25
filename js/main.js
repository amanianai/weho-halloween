require('bootstrap');
require('slick-carousel');
var Plyr = require('plyr');

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

  // Video Player
  var player = new Plyr('#video-player', {});
  window.player = player;

  // Countdown timer
  var countDownDate = new Date("Oct 31, 2018 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var completeText = "Today!";

    // Display the result in the element with id="demo"
    $('#countdown-timer').html('<span class="timer-date"><span class="timer-date__value">' + days + '</span><span class="timer-date__unit">Days</span></span><span class="timer-date"><span class="timer-date__value">' + hours + '</span><span class="timer-date__unit">Hours</span></span><span class="timer-date"><span class="timer-date__value">' + minutes + '</span><span class="timer-date__unit">Mins</span></span>');

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      $('#countdown-timer').html('<span class="timer-date"><span class="timer-date__value">' + completeText + '</span></span>');
    }
  }, 1000);
});
