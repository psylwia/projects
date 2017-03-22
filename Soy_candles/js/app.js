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
});

  