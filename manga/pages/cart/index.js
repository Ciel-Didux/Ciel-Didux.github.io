$('document').ready(function () {
    $.getJSON('/items.json', function (data) {
        let items = data; //JSON items
        checkCart();
        showCartTable(items);
        showTotalQuantity();

        (function () {
            let tableContainer = document.querySelector('.cart-table-container > div');
            tableContainer.addEventListener('mouseenter', function () {
                this.classList.add('shadow');
                console.log('ddd');
            });

            tableContainer.addEventListener('mouseleave', function () {
                this.classList.remove('shadow');
                console.log('fee');
            });
        })();
    });
});
