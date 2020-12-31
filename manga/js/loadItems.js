$('document').ready(function () {
    loadItems();
    checkCart();
    showCart();
});

function loadItems() {
    //load items to web page
    $.getJSON('items.json', function (data) {
        container = document.getElementById('top-sales');
        let out = [];
        for (let key in data) {
            out.push(
                '<div class="products-item"><div><div class="item__img-block"><img src="',
                data[key]['image'],
                '" alt="manga photo"></div><div class="item__title"><h5>',
                data[key]['name'],
                '</h5></div></div><div><div class="item__price">',
                data[key]['cost'],
                '<span class="price-currency"> грн.</span></div><div class="item__buy-form"><button class="btn-buy">купити</button></div></div></div>'
            );
            container.innerHTML += out.join('');
            out = [];
        }
    })
}

btn = document.querySelectorAll('.btn');
[].forEach.call(btn, function (e) {
    e.addEventListener("submit", function (event) {
        event.preventDefault();
        return false;
    });
});
