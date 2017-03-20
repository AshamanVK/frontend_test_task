jQuery(document).ready(function($) {

  $('.order_slider__mark .point').click(function(event) {
    $('.order_slider__mark .point').removeClass('active');
    $(this).addClass('active');
  });

});