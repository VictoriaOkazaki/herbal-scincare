const filter = () => {
    const onMobile = window.screen.width < 760;

    const hideGoodsOnMobile = () => {
        if (onMobile) {
            const allGoods = document.querySelectorAll('.catalog__goods-item');

            for (let i = 4; i < allGoods.length; i++) {
                allGoods[i].classList.add('hide');
            }
        }
    }

    const filterGoods = () => {
        const filters = document.querySelectorAll('.catalog__filters-item');
    
        filters.forEach(filter => { 
    
            filter.addEventListener('click', function() {
                const selectedFilter = filter.getAttribute('data-filter');
                let itemsToShow = [...document.querySelectorAll(`.catalog__goods [data-filter='${selectedFilter}']`)];
    
                if (selectedFilter == 'all') {
                    itemsToShow = [...document.querySelectorAll('.catalog__goods [data-filter]')];
                }

                if (onMobile) {
                    const maxShowCount = itemsToShow.length < 4 ? itemsToShow.length : 4;
                    itemsToShow = itemsToShow.slice(0, maxShowCount);
                }

                // console.log('-----------------');
    
                const visibleGoods = document.querySelectorAll('.catalog__goods-item.show');
                for (const itemToHide of visibleGoods) {
                    const index = itemsToShow.findIndex(item => {
                        return item.dataset.id !== undefined && item.dataset.id === itemToHide.dataset.id;
                    });
                    if (index !== -1) continue;
                    // console.log('hide', itemToHide.dataset.id, itemToHide.dataset.filter);
                    itemToHide.classList.add('hide');
                    itemToHide.classList.remove('show'); 
                }

                for (const itemToShow of itemsToShow) {
                    // console.log('show', itemToShow.dataset.id, itemToShow.dataset.filter);
                    itemToShow.classList.remove('hide');
                    itemToShow.classList.add('show'); 
                }
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

    hideGoodsOnMobile();
    filterGoods();
    changeFilter();
}
