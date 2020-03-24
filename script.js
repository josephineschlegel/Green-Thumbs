$(document).ready(function() {
  $(".open").click(function() {
    $("#triangle-down").addClass("hidden");
    $("#triangle-up").addClass("hidden");
    $("content").addClass("curtains");
    $("#triangle-up").delay(700).fadeOut();
    $("#title").fadeOut(300);
    $(".titleHide").fadeOut(300);
    $(".textHide").hide();
    $("content").fadeIn(400);
    $("#triangle-down").delay(700).fadeOut();
    $("#wrapper").css({'z-index': '-5'});
    $(".hideBackground").css({overflow: 'auto', overflowX: 'hidden'});
      $("#firstTbox").addClass("anim");

  });


});

