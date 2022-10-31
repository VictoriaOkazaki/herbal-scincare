const burger = () => {
    const burger = document.querySelector('.burger');
    const burgerWindow = document.querySelector('.burger__window');
    
    burger.addEventListener('click', () => {
        console.log('click');
        
        burgerWindow.classList.toggle('burger__window--active');
    });

    const headerLinks = document.querySelectorAll('.header__menu-item a');
    headerLinks.forEach((elem) => {
        elem.addEventListener('click', () => {
            burgerWindow.classList.remove('burger__window--active');
        })
    });
};