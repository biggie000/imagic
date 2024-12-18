
// Navigation
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const navLink = document.querySelector(".nav__link");

if(navToggle && header) {
  navToggle.addEventListener("click", function(e) {
    document.body.classList.toggle("nav-overlay");

    // Hide the nav
    if(header.classList.contains("nav-ready")) {
      
      header.classList.toggle("nav-visible");
      
      setTimeout(function() {
        header.classList.toggle("nav-ready");
      }, 300);
      
    // Show the nav
    } else {

      header.classList.toggle("nav-ready");
  
      setTimeout(function() {
        header.classList.toggle("nav-visible");
      }, 1);
    }

    e.preventDefault();
  });
}

navLink.addEventListener("click", function(e) {
    document.body.classList.toggle("nav-overlay");

    // Hide the nav
    if(header.classList.contains("nav-ready")) {
      
      header.classList.toggle("nav-visible");
      
      setTimeout(function() {
        header.classList.toggle("nav-ready");
      }, 300);
      
    // Show the nav
    } else {

      header.classList.toggle("nav-ready");
  
      setTimeout(function() {
        header.classList.toggle("nav-visible");
      }, 1);
    }
  });

$(document).ready(function(){
    $('.slider__reel').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      });
  });