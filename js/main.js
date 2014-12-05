var nav = document.getElementById("nav");

$(".full-screen").css("height", $(window).height() - 42 + "px");

$( ".strip" ).hover(
  function() {
    // alert($(this).children(".picture"));
    $( this ).children(".picture").addClass("activepicture").removeClass("passivepicture");

  }, function() {
    $( this ).children(".picture").addClass("passivepicture").removeClass("activepicture");
  }
);