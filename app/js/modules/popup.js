const popup = () => {
    const goods = document.querySelectorAll('.catalog__goods-item a');
    goods.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();

            var destinationPopup = element.getAttribute('href').substring(1);
            var popup = document.getElementById(destinationPopup);
            const popupClose = document.querySelector('.popup__close');

            popup.classList.add('popup-show');
            popupClose.addEventListener('click', () => {
                console.log('close')
                popup.classList.remove('popup-show');
            })

        })
    });
};
