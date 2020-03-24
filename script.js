$(document).ready(function() {
  $(".open").click(function() {
    $("#triangle-down").addClass("hidden");
    $("#triangle-up").addClass("hidden");
    $("content").addClass("curtains");
    $("#triangle-up").delay(700).fadeOut();
    $("#title").fadeOut(300);
    $(".titleHide").fadeOut(300);
    $(".textHide").hide();
    $("content").delay(700).fadeIn(400);
    $("#triangle-down").delay(700).fadeOut();
    $(".hideBackground").css({overflow: 'auto', overflowX: 'hidden'});

  });


});

