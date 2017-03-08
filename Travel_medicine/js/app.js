$(document).ready(function(){
// Slider
  $('.bxslider').bxSlider();

// Zawartość okna z informacją o szczepieniach 
   $(".map_image a").click(function() {
        var countryDesc = $(this).data('description');
        var countryDesc2 = $(this).data('name');
        var countryName = $(this).data('title');
        var test = $('.test');   
    
    var newDiv = $("<div>" + countryName + "</div>" + "<div class='box required'>Szczepienia wymagane:</div><div>" + countryDesc + "</div>" + "<div class='box advised'>Szczepienia zalecane:</div><div>" + countryDesc2 + "</div>");
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

var map = document.querySelector('#map');
var paths = map.querySelectorAll('.map_image a');
var vax = map.querySelector('.map_image section');

paths.forEach(function (path) {
   path.addEventListener('mouseenter', function(e){
      var id = this.id.replace('country_', '');
       map.querySelectorAll('.active').forEach(function(item){
           item.classList.remove('active');
       });
       
      document.querySelector('#country_' + id).classList.add('active');
   });
   
   path.addEventListener('click', function(e){
       vax.classList.remove('hidden');
   }); 

});
