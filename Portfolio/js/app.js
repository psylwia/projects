$(document).ready(function(){
    $(document).on('click', 'a', function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
    });

    var emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,10})+$/;   
    var emailText = $("#email").val();
    if (emailFilter.test(emailText)) {
      $("#email").css({
        "color" : "#609D29"
      });
    }
    else {
      $("#email").css({
        "color" : "#CE3B46"
      });
    }
    
    var nameFilter = /^([a-zA-Z \t]{3,15})+$/;
    var nameText = $("#name").val();
    if (nameFilter.test(nameText)) {
      $("#name").css({
        "color" : "#609D29"
      });
    }
    else {
      $("#name").css({
        "color" : "#CE3B46"
      });
    }
    
    
    if (!emailFilter.test(emailText)) || (!nameFilter.test(nameText)) {
      return false;
    }
    if (emailFilter.test(emailText)) && (nameFilter.test(nameText)) {
      $("#contact_form").css("display", "none");
      $("#contact_form").append("<h2>Wysłano!</h2>");
      return false;
    }
  });       
    
});

  