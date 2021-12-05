function resizeImg() {

  $('.resize').each(function() {

    if ( $(window).width()<768 ) {
      var imgName = $(this).attr('src').replace('.jpg', '');
      $(this).attr('src', imgName+'-sm.jpg');
    }

  });
  
}

function autoPlayVideoModal() {

  var trigger = $('body').find('[data-toggle="modal"]');

  trigger.click(function() {

    var theModal = $(this).data( 'target' ),
        videoSRC = $(this).attr( 'data-theVideo' );

    $(theModal+' video').attr('src', videoSRC);

    $(theModal).on('hidden.bs.modal', function() {
      $(theModal+' video').attr('src', '');
    });

  });

}


$(function() {
  
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 200) {
      $('#backToTop').fadeIn();
    } else {
      $('#backToTop').fadeOut();
    }
  });

  $('#backToTop').on('click', function() {
    $('html,body').animate({
      'scrollTop': 0
    }, 1000)
  });

});