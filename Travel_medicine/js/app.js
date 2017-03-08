
$(document).ready(function(){
// Slider
  $('.bxslider').bxSlider();

// Zawartość okna z informacją o szczepieniach 
    $(".map_image a").click(function() {
        var countryDesc = $(this).data('description');
        var test = $('.test');   
    
    var newDiv = $("<div>" + countryDesc + "</div>");
    test.after(newDiv);
 
// Funkcjonalność guzika zamknięcia okna
    $('.button_x').click(function(){
        $('.vax_info').addClass('hidden');
        newDiv.empty();
    });
       
    });       
   
// Podświetlenie aktywnej strony    
    var url = window.location.href; 

    $("a").each(function() {
        if(url == (this.href)) { 
            $(this).closest("li").addClass("active");
        }
    });
});

