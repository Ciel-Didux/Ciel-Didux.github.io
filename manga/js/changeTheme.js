$('document').ready(function () {
    // day theme
    let dayItems = {
        bgGradient: 'linear-gradient(310deg, rgba(209, 209, 255, 0.6), rgba(230, 230, 250, 1))',
        bgHeader: 'url(../image/header_bg.png)',
        bgMain: 'rgba(255, 255, 255, 0.5)',
        fontColor: '#000036',
        darkColor: '#333'
    }

    // night theme
    let nightItems = {
        bgGradient: 'linear-gradient(310deg, rgba(97, 74, 134, 0.6), rgb(28, 28, 80))',
        bgHeader: 'url(../image/header_bg_night.jpg)',
        bgMain: 'rgba(0, 0, 0, 0.5)',
        fontColor: '#cbcbcb',
        darkColor: '#181834'
    }

    let sunChanger = document.querySelector('#sun-changer');
    let moonChanger = document.querySelector('#moon-changer');

    let header = document.querySelector('header');
    let headerHtml = document.querySelector('header .bg');
    let headerBar = document.querySelectorAll('.header-bar *');
    let mainHtml = document.querySelector('main');
    let cssRoot = document.querySelector(':root');

    let isSun = true;

    // day theme
    sunChanger.addEventListener("click", function () {
        if (isSun) {
            //buttons style change
            moonChanger.style.cursor = 'pointer';
            moonChanger.style.opacity = '1';
            sunChanger.classList.add('off');

            //change all page
            cssRoot.style.setProperty('--font-color', nightItems.fontColor);
            cssRoot.style.setProperty('--block-background', nightItems.bgGradient);
            cssRoot.style.setProperty('--dark', nightItems.darkColor);
            header.style.setProperty('--color', nightItems.fontColor);
            headerHtml.style.backgroundImage = nightItems.bgHeader;
            mainHtml.style.backgroundColor = nightItems.bgMain;

            isSun = false;
        } else {
            return;
        }
    })

    // night theme
    moonChanger.addEventListener("click", function () {
        //buttons style change
        if (isSun) {
            return;
        } else {
            //buttons style change
            moonChanger.style.cursor = "default";
            moonChanger.style.opacity = "0";
            sunChanger.classList.remove("off");

            //change all page
            cssRoot.style.setProperty('--font-color', dayItems.fontColor);
            cssRoot.style.setProperty('--block-background', dayItems.bgGradient);
            cssRoot.style.setProperty('--dark', dayItems.darkColor);
            header.style.setProperty('--color', '#333');
            headerHtml.style.backgroundImage = dayItems.bgHeader;
            mainHtml.style.backgroundColor = dayItems.bgMain;

            isSun = true;
        }
    })
});