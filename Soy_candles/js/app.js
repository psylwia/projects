$(document).ready(function(){
    $('.bxslider').bxSlider();


    $(function(){
       function show_popup(){
          $(".popup").removeClass("hidden");
       };
       window.setTimeout( show_popup, 5000 ); // 5 seconds
        
    });
    
     $(".button_x").click(function(){
        $('.popup').addClass('hidden');
    }); 
    
    var stickyNavTop = $('.menu').offset().top;
 
    var stickyNav = function(){
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) { 
        $('.nav').addClass('sticky').removeClass('hidden');
    } else {
        $('.nav').removeClass('sticky').addClass('hidden'); 
    }
    };

    stickyNav();

    $(window).scroll(function() {
      stickyNav();
    });
});

  