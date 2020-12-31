$('document').ready(function() {
    loadItems();
    checkCart();
    showTotalQuantity();
});

function loadItems() {
    //load items to web page
    $.getJSON('items.json', function(data) {
        container = document.getElementById('top-sales');
        let out = [];
        let i = 0; // break for()
        for (let key in data) {
            if( i > 3) {break;}
            out.push(
                '<div class="products-item"><div><div class="item__img-block"><img src="',
                data[key]['image'],
                '" alt="manga photo"></div><div class="item__title"><h5>',    
                data[key]['name'],
                '</h5></div></div><div><div class="item__price">',
                data[key]['cost'],
                '<span class="price-currency"> грн.</span></div><div class="item__buy-form"><button class="btn-buy" data-art="',
                key,
                '">купити</button></div></div></div>'
            );
            container.innerHTML += out.join('');
            out = [];
            i++;
        }
        btn = document.querySelectorAll('.btn-buy');
        [].forEach.call( btn, function(e){
            e.addEventListener('click', addToCart)
        });
    })
}