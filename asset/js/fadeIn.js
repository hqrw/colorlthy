$(function(){
  $(window).scroll(function (){
      $('.left-to-right, .right-to-left, .top-to-down').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 150){
              $(this).addClass('scrollin');
          }
      });
  });
});