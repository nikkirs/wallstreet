$(document).ready(function() {
  var $meet = $(".js--about-us");
  $meet.waypoint(function(direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });
  $(".js--nav-icon").click(function() {
    var nav = $(".js--main-nav");
    nav.slideToggle(200);
  });

  $(window).resize(function() {
    if ($(window).width() <= 767) {
      $(".close").click(function() {
        var nav1 = $(".js--main-nav");
        nav1.slideUp();
      });
    }
  });
});
new GMaps({
  div: "#map",
  lat: -12.043333,
  lng: -77.028333
});
