function showCartTable(items) {
    container = document.getElementById('cart-table');
    container.innerHTML = '';

    if ($.isEmptyObject(cart)) {
        container.innerHTML = '<thead><tr><td><p class="empty-cart-message">КОРЗИНА ПУСТА :( </p></td><td><p><a class="link-in-text" href="#">Купити мангу</a></p></td></tr></thead><tbody></tbody>';
    } else {
        let out = [];
        let totalCost = 0;
        out.push('<thead><tr><th>назва</th><th>к-сть</th><th>ціна за шт.</th><th>сума</th><th></th></tr></thead><tbody>');

        for (let key in cart) { // keys from cart in localStorage
            let totalItemCost = cart[key] * items[key].cost; // quantity * cost
            out.push(
                '<tr><td>',
                items[key].name,
                '</td><td><div class="change-quantity-group"><button class="table-btn minus-item" data-art="',
                key,
                '"><i class="fa fa-minus"></i></button><input type="text" class="quantity-text" size = "1" value="',
                cart[key],
                '"><button class="table-btn plus-item" data-art="',
                key,
                '"><i class="fa fa-plus"></i></button></td><td>',
                items[key].cost,
                '<span> грн.</span></td><td class="main-color-text">',
                totalItemCost,
                '<span class="main-color-text"> грн.</span></td><td><button class="delete-item table-btn" data-art="',
                key,
                '"><i class="fa fa-times-circle"></i></button></td></tr>'
            );
            totalCost += totalItemCost;
        }
        out.push('<tr><td colspan="5"> РАЗОМ: ' + totalCost + '<span class="main-color-text"> грн.</span></td></tr></tbody>');
        container.innerHTML += out.join('');
        out = [];

        $('.minus-item').on('click', minusItemQuantity);
        $('.plus-item').on('click', plusItemQuantity);
        $('.delete-item').on('click', deleteItem);
        setEventForQuntity();
    }

    function plusItemQuantity() {
        let articul = $(this).attr('data-art');
        cart[articul]++;
        saveCartToLS();
        showCartTable(items);
        showTotalQuantity();
    }

    function minusItemQuantity() {
        let articul = $(this).attr('data-art');
        if (cart[articul] > 1) {
            cart[articul]--;
        } else {
            delete cart[articul];
        }
        saveCartToLS();
        showCartTable(items);
        showTotalQuantity();
    }

    function deleteItem() {
        let articul = $(this).attr('data-art');
        delete cart[articul];
        saveCartToLS();
        showCartTable(items);
        showTotalQuantity();
    }


    function setEventForQuntity() {
        let quantityContainer = document.querySelectorAll('.change-quantity-group');
        
        // fixed scroll, body, html don`t scrolling
        $('.change-quantity-group').on('DOMMouseScroll mousewheel', function (ev) {
            let $this = $(this),
                scrollTop = this.scrollTop,
                scrollHeight = this.scrollHeight,
                height = $this.height(),
                delta = (ev.type == 'DOMMouseScroll' ?
                    ev.originalEvent.detail * -40 :
                    ev.originalEvent.wheelDelta),
                up = delta > 0;

            let prevent = function () {
                ev.stopPropagation();
                ev.preventDefault();
                ev.returnValue = false;
                return false;
            }

            if (!up && -delta > scrollHeight - height - scrollTop) {
                // Scrolling down, but this will take us past the bottom.
                $this.scrollTop(scrollHeight);
                return prevent();
            } else if (up && delta > scrollTop) {
                // Scrolling up, but this will take us past the top.
                $this.scrollTop(0);
                return prevent();
            }
        });
        
        //add minus goods
        [].forEach.call(quantityContainer, function (e) {
            e.addEventListener('mousewheel', function (y) {
                let btn = e.querySelector('.plus-item');
                let articul = btn.getAttribute('data-art');

                if (y.deltaY > 1) {
                    if (cart[articul] > 1) {
                        cart[articul]--;
                    } else {
                        delete cart[articul];
                    }
                    saveCartToLS();
                    showCartTable(items);
                    showTotalQuantity();
                } else if (y.deltaY < -1) {
                    cart[articul]++;
                    saveCartToLS();
                    showCartTable(items);
                    showTotalQuantity();
                }
            });
        });
    }
}

// save changes in cart to localStorage
function saveCartToLS() {
    localStorage.setItem('cart', JSON.stringify(cart));
}
