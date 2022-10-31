const filter = () => {
    const filterGoods = () => {
        const filters = document.querySelectorAll('.catalog__filters-item');
    
        filters.forEach(filter => { 
    
            filter.addEventListener('click', function() {
    
                let selectedFilter = filter.getAttribute('data-filter');
                let itemsToHide = document.querySelectorAll(`.catalog__goods .catalog__goods-item:not([data-filter='${selectedFilter}'])`);
                let itemsToShow = document.querySelectorAll(`.catalog__goods [data-filter='${selectedFilter}']`);
    
                if (selectedFilter == 'all') {
                itemsToHide = [];
                itemsToShow = document.querySelectorAll('.catalog__goods [data-filter]');
                }
    
                itemsToHide.forEach(el => {
                el.classList.add('hide');
                el.classList.remove('show');
                });
    
                itemsToShow.forEach(el => {
                el.classList.remove('hide');
                el.classList.add('show'); 
                });
            });
        });
    }
    
    const changeFilter = () => {
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
    };

    filterGoods();
    changeFilter();
}
