$(function(){

  $(window).ready(function(){

    var $translatesLinks = $('.translate'),
        $content = $('.content'),
        windowHeight = $(window).height();

    if (windowHeight < 700) {
      $content.addClass('scrolled');
    }

    $(window).resize(function(){
      windowHeight = $(window).height();

      if (windowHeight < 700) {
        $content.addClass('scrolled');
      } else {
        $content.removeClass('scrolled');
      }
    });

  });

}());

