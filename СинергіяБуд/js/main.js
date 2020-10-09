'use strict'

var wrapper = document.querySelector(".main-top_content-right_text-content > small");
var text = document.querySelector(".main-top_content-right_text-content h4");

var textCont = text.textContent;
text.style.display = "none";

for (var i = 0; i < textCont.length; i++) {
    (function (i) {
        setTimeout(function () {
            // Created textNode to append
            var texts = document.createTextNode(textCont[i])
            var span = document.createElement('span');
            span.appendChild(texts);

            span.classList.add("text");
            wrapper.appendChild(span);

        }, 70 * i);
    }(i));
}

$(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top < document.documentElement.clientHeight - 100) $("header").css({
        top: '-100px'
    });
    else $("header").css({
        position: 'fixed',
        top: '0'
    });
});

let clickIndex = 1;
$(document).ready(function () {
    $('.content_toggle').click(function () {
        $('.text-content__more').slideToggle(1000);
        if (clickIndex % 2 == 1) {
            $('.down-arrow').css({
                transform: 'scale(1,-1)'
            });
        } else {
            $('.down-arrow').css({
                transform: 'scale(-1,1)'
            });
        }
        clickIndex++;
        return false;
    });
});

/**/
let clickIndex1 = 1;

function showProjectMore(node) {
    $(node).hide(700);
    node.style.cursor = "default";
    node.parentNode.style.height = "auto";
    node.nextSibling.nextSibling.style.display = "block";
}

function closeProjectMore(node) {
    let moreBlock = node.parentNode; // ".service_more-info""
    let parent = moreBlock.parentNode; // ".diagonal-content__block"
    let coverBlock = moreBlock.previousSibling.previousSibling; // ".img-block"
    $(moreBlock).hide(700);
    parent.style.height = "350px";
    $(coverBlock).show(700);
    coverBlock.style.cursor = "pointer";
}

let slideIndex = 0;
let smallSlides = document.querySelectorAll('.projects__active-block');

$('.projects__active-block').click(function (e) {
    $('.projects__slider-container').fadeIn(300);
    document.querySelector('.projects__slider-container').style.display = "flex";
    for (let i = 0; i < smallSlides.length; i++) {
        if (smallSlides[i] == this) {
            slideIndex = i;
            console.log(slideIndex);
            break;
        }
    }
    showDivs("slideInUp");
    //document.body.style.overflow = "hidden";
});

jQuery(function ($) {
    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".projects__slider-container");
        if (div.has(e.target).length === 0) {
            div.fadeOut(300);
        }
    });
});

function changeSlide(n, className) {
    slideIndex += n;
    showDivs(className);
}

function showDivs(className) {
    let i;
    let slides = document.querySelectorAll(".slider-img");

    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].className = "slider-img";
    }
    slides[slideIndex].style.display = "block";
    className = " animate__animated animate__" + className;
    slides[slideIndex].className += className;
}
