$('document').ready(function () {
    let nav_toggle_flag = false;
    let nav_toggle = document.querySelector('.navbar-toggle');
    let navbar = document.querySelector('.navbar-collapse');

    nav_toggle.addEventListener('click', function () {

        if (nav_toggle_flag) {
            navbar.style.visibility = "hidden";
            navbar.style.maxHeight = "0px";
            nav_toggle_flag = false;
        } else {
            navbar.style.visibility = "visible";
            navbar.style.maxHeight = "700px";
            nav_toggle_flag = true;
        }
    });

    dropDownToggle = document.querySelectorAll('.dropdown-mobile');
    [].forEach.call(dropDownToggle, function (e) {
        e.addEventListener('click', function () {
            dropDown = this.querySelector('.dropdown-menu-mobile');
            dropDown.classList.toggle("open");
        });
    });
});
