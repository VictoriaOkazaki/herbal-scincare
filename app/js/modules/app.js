const initTestGoods = () => {
    window.goods = JSON.parse(`[
        { "id": 1, "filter": "bath", "src": "images/goods/good-1.png", "title": "body spray", "price": 15 },
        { "id": 2, "filter": "bath", "src": "images/goods/good-2.png", "title": "bar soap", "price": 8 },
        { "id": 3, "filter": "decor", "src": "images/goods/good-3.png", "title": "cosmetic powder", "price": 30 },
        { "id": 4, "filter": "bath", "src": "images/goods/good-4.png", "title": "hand cream", "price": 12 },
        { "id": 5, "filter": "antiage", "src": "images/goods/good-5.png", "title": "face serum", "price": 15 },
        { "id": 6, "filter": "decor", "src": "images/goods/good-6.png", "title": "lipstick", "price": 6 },
        { "id": 7, "filter": "bath", "src": "images/goods/good-7.png", "title": "shower gel", "price": 14 },
        { "id": 8, "filter": "decor", "src": "images/goods/good-8.png", "title": "mascara", "price": 21 }
    ]`);
}

const createVueApp = () => {
    const app = Vue.createApp({
        data() {
            return {
                allGoods: [],
                filterType: 'all',
                activeGood: null,
                goodCounter: 1,
                cart: [],
                radioVolume: '400',
                radioType: 'normal',
                isCartOpen: false
            };
        },
        computed: {
            filterGoods() {
                let result = [];
                if (this.filterType === 'all') {
                    result = this.allGoods;
                } else {
                    result = this.allGoods.filter(good => good.filter === this.filterType);
                }

                const onMobile = window.screen.width < 760;

                if (onMobile) {
                    return result.slice(0, 4);
                } else {
                    return result;
                }
            },
            totalPrice() {
                if (this.activeGood === null) {
                    return 0;
                }
                return this.activeGood.price * this.goodCounter;
            }
        },
        created() {
            // Можно было написать this.goods = window.goods;
            this.allGoods = window.goods.map(good => { return { ...good } });
        },
        methods: {
            changeFilterType(newFilterType) {
                this.filterType = newFilterType;
            },
            onGoodClick(good) {
                // console.log('onGoodClick', good);
                this.activeGood = good;
            },
            closePopup() {
               this.activeGood = null;
               this.goodCounter = 1;
               this.radioVolume = '400';
               this.radioType = 'normal';
            },
            plusGoodCounter() {
                this.goodCounter++;
            },
            minusGoodCounter() {
                if (this.goodCounter > 1) {
                    this.goodCounter--;
                }
            },
            addGoodToCart() {
                const goodInCart = this.cart.find(good => {
                    return good.id === this.activeGood.id && good.volume === this.radioVolume &&
                        good.type === this.radioType;
                });
                if (goodInCart) {
                    goodInCart.count += this.goodCounter;
                } else {
                    this.cart.push({
                        ...this.activeGood,
                        count: this.goodCounter,
                        volume: this.radioVolume,
                        type: this.radioType
                    });
                }
                this.closePopup();
                // console.log('cart', this.cart);
            },
            deleteGood(deleteGood) {
                const index = this.cart.findIndex(good => {
                    return good.id === deleteGood.id && good.volume === deleteGood.volume &&
                        good.type === deleteGood.type;
                });
                if (index !== -1) {
                    this.cart.splice(index, 1);
                }
            }
        }
    });
    app.mount('#app');
}
