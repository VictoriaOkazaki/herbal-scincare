const filter = () => {
    const filterList = document.querySelectorAll('.catalog__filters-item');
    
        filterList.forEach(item => {
            item.addEventListener('click', () => {
                filterList.forEach(openItem => {
                    if (openItem.classList.contains('catalog__filters-item--active') && openItem !== item) {
                        openItem.classList.remove('catalog__filters-item--active');
                    }
                })
                item.classList.toggle('catalog__filters-item--active');
            })
        });
}
