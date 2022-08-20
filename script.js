//script.js

$(function(){
    alert('Hello?');
})

$(document).on('ready', function() {
    $(".vertical-center-4").slick({
      dots: true,
      vertical: true,
      centerMode: true,
      slidesToShow: 4,
      slidesToScroll: 2
    });
})