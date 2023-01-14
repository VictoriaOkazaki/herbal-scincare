try {
    // Закомментировать тестовые товары при переносе на WordPress
    initTestGoods();
    createVueApp();
    filter();
    loader();
} catch (err) {
    console.error(err);
}