try {
    // Закомментировать тестовые товары при переносе на WordPress
    initTestGoods();
    createVueApp();
    scroll();
    filter();
    burger();
    loader();
} catch (err) {
    console.error(err);
}