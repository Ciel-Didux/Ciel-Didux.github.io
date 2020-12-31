let cart = {};
let totallItemQuantity = 0;

function addToCart() {
    let articul = $(this).attr('data-art'); // <button class="btn-buy" data-art="10003">купити</button>
    if (cart[articul] != undefined) {
        cart[articul]++;
        globalItemQuantity++;
    } else {
        cart[articul] = 1;
        globalItemQuantity = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart)); // set cart as string
    showTotalQuantity();
}

function checkCart() {
    // check items in local storage
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart')); //from local storage to Object 'cart'
    }
}

//check total items quantity 
function checkTotalQuantity() {
    totallItemQuantity = 0;
    for (let key in cart) {
        totallItemQuantity += cart[key];
    }
}

function showTotalQuantity() {
    checkTotalQuantity();
    $('#cart-total').html(totallItemQuantity);
}