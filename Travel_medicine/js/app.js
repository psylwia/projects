$(document).ready(function(){
  $('.bxslider').bxSlider();

    
$(".map_image a").click(function() {
    var countryDesc = $(this).data('description');
    var test = $('.test');   
    
    var newDiv = $("<div>" + countryDesc + "</div>");
 
    test.after(newDiv);
    
    $('.button_x').click(function(){
        $('.vax_info').addClass('hidden');
        newDiv.empty();
    });
       
    });       
    
    var url = window.location.href; 

    // passes on every "a" tag 
    $("a").each(function() {
            // checks if its the same on the address bar
        if(url == (this.href)) { 
            $(this).closest("li").addClass("active");
        }
    });
});

var map = document.querySelector('#map');
var paths = map.querySelectorAll('.map_image a');
var vax = map.querySelector('.map_image section');
var button = document.querySelector('.button_x');
var test = document.querySelector('.test');

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