try {
    // Закомментировать тестовые товары при переносе на WordPress
    initTestGoods();
    initTestArticles();
    createVueApp();

    const backToTop = document.querySelector('.footer__to-top');
    const elemToScroll = document.getElementById('app');

    backToTop.addEventListener('click', (event) => {
        event.preventDefault();

        elemToScroll.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    filter();
    burger();
    loader();
} catch (err) {
    console.error(err);
}