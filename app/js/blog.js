try {
    // Закомментировать тестовые статьи при переносе на WordPress
    initTestArticles();
    createVueApp();
    loader();
} catch (err) {
    console.error(err);
}