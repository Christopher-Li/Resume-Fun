var nav = document.getElementById("nav");

$(".full-screen").css("height", $(window).height() - 42 + "px");

$( ".strip" ).hover(
  function() {
    $( this">.picture" ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  }
);