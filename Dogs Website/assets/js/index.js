$(document).ready(function() {
  $(window).on('scroll', function() {
      if ($(window).scrollTop() > 0) {
          $('#navbar').addClass('white');
      } else {
          $('#navbar').removeClass('white');
      }
  })
})