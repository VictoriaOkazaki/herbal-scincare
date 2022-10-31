
const scroll = () => {
    const addSmoothScrollOnClick = (elemToClick, elemToScroll) => {
        elemToClick.addEventListener('click', (event) => {
            event.preventDefault();
    
            elemToScroll.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    const addToScrollArr = (scrollArr, elemToClick, elemToScroll) => {
        scrollArr.push({
            elemToClick,
            elemToScroll
        });
    }

    const headerLinks = document.querySelectorAll('.header__menu-item a');

    const scrollArr = [];

    for (const headerLink of headerLinks) {
        const id = headerLink.getAttribute('href').substring(1);
        const section = document.getElementById(id);
        addToScrollArr(scrollArr, headerLink, section);
    }

    const backToTop = document.querySelector('.footer__to-top');
    const homeSection = document.getElementById('home');
    addToScrollArr(scrollArr, backToTop, homeSection);

    const homeArrow = document.querySelector('.home__right-arrow');
    const catalogSection = document.getElementById('catalog');
    const homeBtn = document.getElementById('home-btn');
    addToScrollArr(scrollArr, homeArrow, catalogSection);
    addToScrollArr(scrollArr, homeBtn, catalogSection);

    for (const elem of scrollArr) {
        addSmoothScrollOnClick(elem.elemToClick, elem.elemToScroll);
    }
};
