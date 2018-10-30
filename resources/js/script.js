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

/*----------------*/
var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");

showSlides();

function showSlides() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 5 seconds
}

function currentSlide(no) {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex = no;
  slides[no - 1].style.display = "block";
}

function plusSlides(n) {
  var newslideIndex = slideIndex + n;
  if (newslideIndex < 5 && newslideIndex > 0) {
    currentSlide(newslideIndex);
  }
}
