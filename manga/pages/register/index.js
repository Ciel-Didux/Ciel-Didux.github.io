$('document').ready(function () {
    checkCart();
    showTotalQuantity();
    
    let registerBtn = document.getElementById('register-btn');
    registerBtn.addEventListener('click', function () {
        validate();
    });
});
