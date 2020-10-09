let viewSlideCount = 5;
let fadeInClassName = "animate__zoomInLeft";
let fadeOutClassName = "animate__zoomOut";

window.onload = function () {
    let slide = document.querySelectorAll(".slide-show__slide");
    let slideCount = slide.length;

    for (let i = 0; i < slideCount; i++) {
        slide[i].style.display = "none";
        slide[i].className = "slide-show__slide";
    }

    for (let i = 0; i < viewSlideCount; i++) {
        slide[i].style.visibility = "hidden";
        slide[i].style.display = "block";
    }

    let showSlideIndex = 0;
    let hideSlideIndex = 0;
    let hideSlideIndex2 = 0;

    showLoop(0);
    loop();

    function loop() {
        setTimeout(function () {
            hideLoop(0);
            loop();
        }, 10000);
    }

    function hideLoop(i) {
        setTimeout(function () {
            if (hideSlideIndex > slideCount - 1) {
                hideSlideIndex = 0;
            }
            slide[hideSlideIndex].className = "slide-show__slide";
            className = " animate__animated " + fadeOutClassName;
            slide[hideSlideIndex].className += className;
            console.log(hideSlideIndex + " hide");
            hideSlideIndex++;
            i++
            if (i < viewSlideCount) {
                hideLoop(i);
            } else {
                setTimeout(function () {
                    for (let i = 0; i < slideCount; i++) {
                        if (hideSlideIndex2 > slideCount - 1) {
                            hideSlideIndex2 = 0;
                        }
                        slide[hideSlideIndex2].style.display = "none";
                        hideSlideIndex2++;
                    }

                    let tmpSlideIndex = showSlideIndex;
                    for (let i = 0; i < viewSlideCount; i++) {
                        if (tmpSlideIndex > slideCount - 1) {
                            tmpSlideIndex = 0;
                        }
                         slide[tmpSlideIndex].style.display = "block";
                        slide[tmpSlideIndex].style.visibility = "hidden";
                       
                        tmpSlideIndex++;
                    }
                    showLoop(0);
                }, 300);
            }
        }, 300);
    }

    function showLoop(i) {
        setTimeout(function () {
            if (showSlideIndex > slideCount - 1) {
                showSlideIndex = 0;
            }
            slide[showSlideIndex].className = "slide-show__slide";
            slide[showSlideIndex].style.visibility = "visible";
            className = " animate__animated " + fadeInClassName;
            slide[showSlideIndex].className += className;
            console.log(showSlideIndex + " show");
            showSlideIndex++;
            i++
            if (i < viewSlideCount) {
                showLoop(i);
            }
        }, 300);
    }
}
