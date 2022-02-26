$("#slider").click(function () {
  $("#slider-bar").css("left", "-100%");
  $("#slider").css("opacity", "0");
  setTimeout(function () {
    $("#slider").css("display", "none");
  }, 300);
});

$("#ham-menu").click(function () {
  $("#slider").css("display", "block");
  setTimeout(function () {
    $("#slider").css("opacity", "1");
    $("#slider-bar").css("left", "0%");
  }, 80);
});
