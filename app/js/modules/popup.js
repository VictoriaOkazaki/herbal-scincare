const popup = () => {
    const plusButton = document.getElementById('popup-plus');
    const minusButton = document.getElementById('popup-minus');
    const number = document.querySelector('.popup__filters-title');
    let count = 1;
    number.innerHTML = count;

    const updateTotalPrice = () => {
        const itemPrice = document.querySelector('.popup__good-price').innerHTML;
        const totalPrice = document.querySelector('.popup__amount-price');
        const price = parseInt(itemPrice.match(/\d+/));
        totalPrice.innerHTML = price * count + '$';
        console.log(`Update total price (price: ${price}, count: ${count}, totalPrice: ${totalPrice.innerHTML}).`);
    }

    
    plusButton.addEventListener('click', () => {
        count++;
        number.innerHTML = count;
        updateTotalPrice();
    });
    
    minusButton.addEventListener('click', () => {
        if (count > 1) {
            count--;
            number.innerHTML = count;
            updateTotalPrice();
        }
    });

    const goods = document.querySelectorAll('.catalog__goods-item a');

    goods.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            count = 1;

            var destinationPopup = element.getAttribute('href').substring(1);
            var popup = document.getElementById(destinationPopup);
            const itemTitle = element.querySelector('.catalog__goods-title').innerHTML;
            const itemPrice = element.querySelector('.catalog__goods-price').innerHTML;
            const itemImg = element.querySelector('.catalog__goods-img').src;

            const popupItemTitle = document.querySelector('.popup__good-title');
            const popupItemPrice = document.querySelector('.popup__good-price');
            const popupItemImg = document.querySelector('.popup__good-img');
            popupItemTitle.innerHTML = itemTitle;
            popupItemPrice.innerHTML = itemPrice;
            popupItemImg.src = itemImg;

            updateTotalPrice();

            popup.classList.add('popup-show');

            const popupClose = document.querySelector('.popup__close');
            popupClose.addEventListener('click', () => {
                popup.classList.remove('popup-show');
            })

        })
    });

    

    
};
