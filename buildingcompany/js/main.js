'use strict'

/* Slider 
========================================*/

let slideIndex = 1;
showDivs(slideIndex);

function changeSlide( n, className) {
    showDivs(slideIndex += n, className);
}

function chooseSlide(n) {
    showDivs(slideIndex = n, "slideInUp");
}

function showDivs( n, className) {
    let i;
    let slides = document.querySelectorAll(".slider-item");
    let dots = document.querySelectorAll(".dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].className = "slider-item";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    }
    slides[slideIndex - 1].style.display = "block";
    className = " animate__animated animate__" + className;
    slides[slideIndex - 1].className += className;
    dots[slideIndex - 1].style.backgroundColor = "rgba(255, 255, 255, 0.9)";
}
