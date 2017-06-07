$(document).ready(function(){
// Slider
  $('.bxslider').bxSlider();

// Zawartość okna z informacją o szczepieniach 
   $(".map_image a").click(function() {
        var countryName = $(this).data('title');
        var vaxRutine = $(this).data('rutine');
        var vaxRequired = $(this).data('required');
        var vaxAdvised = $(this).data('advised');
        var test = $('.test');   
    
    var newDiv = $("<button class='button_x'>X</button><div class='box country'>" + countryName + "</div>" +  "<div class='box required'>Szczepienia wymagane:</div><div class='box'>" + vaxRequired + "</div>" + "<div class='box advised'>Szczepienia zalecane:</div><div class='box'>" + vaxAdvised + "</div>" + "<div class='box rutine'>Szczepienia zalecane wybranym podróżnym:</div><div class='box'>" + vaxRutine + "</div>" + );
    test.html(newDiv);
    
 
// Funkcjonalność guzika zamknięcia okna
       var button = $('button');
    $(button).click(function(){
        console.log('click');
        $('.vax_info').addClass('hidden');
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
