$(document).ready(function(){
    $(document).on('click', '.hover', function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
    });    
    
});

  