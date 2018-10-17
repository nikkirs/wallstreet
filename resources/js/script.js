$(document).ready(function() {
  var $meet = $(".js--about-us");
  $meet.waypoint(function(direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });
  var nav = $(".js--main-nav");
  $(".js--nav-icon").click(function() {
    nav.slideToggle(200);
    $(".close").click(function() {
      nav.slideUp(200);
    });
  });

});
