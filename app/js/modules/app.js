const initTestGoods = () => {
    window.goods = JSON.parse(`[
        { "id": 1, "filter": "bath", "src": "images/goods/good-1.png", "title": "body spray", "price": 15 },
        { "id": 2, "filter": "bath", "src": "images/goods/good-2.png", "title": "bar soap", "price": 8 },
        { "id": 3, "filter": "decor", "src": "images/goods/good-3.png", "title": "cosmetic powder", "price": 30 },
        { "id": 4, "filter": "bath", "src": "images/goods/good-4.png", "title": "hand cream", "price": 12 },
        { "id": 5, "filter": "antiage", "src": "images/goods/good-5.png", "title": "face serum", "price": 15 },
        { "id": 6, "filter": "decor", "src": "images/goods/good-6.png", "title": "lipstick", "price": 6 },
        { "id": 7, "filter": "bath", "src": "images/goods/good-7.png", "title": "shower gel", "price": 14 },
        { "id": 8, "filter": "decor", "src": "images/goods/good-8.png", "title": "mascara", "price": 21 },
        { "id": 9, "filter": "bath", "src": "images/goods/good-9.png", "title": "anti-akne serum", "price": 29 },
        { "id": 10, "filter": "bath", "src": "images/goods/good-10.png", "title": "moisturizer", "price": 18 },
        { "id": 11, "filter": "decor", "src": "images/goods/good-11.png", "title": "cosmetic bag", "price": 57 },
        { "id": 12, "filter": "bath", "src": "images/goods/good-12.png", "title": "body lotion", "price": 14 },
        { "id": 13, "filter": "antiage", "src": "images/goods/good-13.png", "title": "anti-age serum", "price": 22 },
        { "id": 14, "filter": "bath", "src": "images/goods/good-14.png", "title": "body wash", "price": 13 },
        { "id": 15, "filter": "bath", "src": "images/goods/good-15.png", "title": "shampoo", "price": 14 },
        { "id": 16, "filter": "decor", "src": "images/goods/good-16.png", "title": "lipstick", "price": 9 },
        { "id": 17, "filter": "bath", "src": "images/goods/good-17.png", "title": "body oil", "price": 27 },
        { "id": 18, "filter": "bath", "src": "images/goods/good-18.png", "title": "botanical shampoo", "price": 29 },
        { "id": 19, "filter": "bath", "src": "images/goods/good-19.png", "title": "bamboo shampoo", "price": 32 },
        { "id": 20, "filter": "antiage", "src": "images/goods/good-20.png", "title": "energy cream", "price": 28 },
        { "id": 21, "filter": "bath", "src": "images/goods/good-21.png", "title": "special shampoo", "price": 51 },
        { "id": 22, "filter": "bath", "src": "images/goods/good-22.png", "title": "body milk", "price": 14 },
        { "id": 23, "filter": "bath", "src": "images/goods/good-23.png", "title": "surface cleaner", "price": 5 },
        { "id": 24, "filter": "antiage", "src": "images/goods/good-24.png", "title": "facial tonic", "price": 34 },
        { "id": 25, "filter": "decor", "src": "images/goods/good-25.png", "title": "cosmetic brush", "price": 3 },
        { "id": 26, "filter": "decor", "src": "images/goods/good-26.png", "title": "mascara", "price": 15 },
        { "id": 27, "filter": "decor", "src": "images/goods/good-27.png", "title": "mascara", "price": 21 },
        { "id": 28, "filter": "decor", "src": "images/goods/good-28.png", "title": "lipstick", "price": 18 },
        { "id": 29, "filter": "antiage", "src": "images/goods/good-29.png", "title": "mask cream", "price": 47 },
        { "id": 30, "filter": "decor", "src": "images/goods/good-30.png", "title": "lipstick", "price": 16 },
        { "id": 31, "filter": "antiage", "src": "images/goods/good-31.png", "title": "anti-wrinkle cream", "price": 56 },
        { "id": 32, "filter": "decor", "src": "images/goods/good-32.png", "title": "vampire lipstick", "price": 32 },
        { "id": 33, "filter": "antiage", "src": "images/goods/good-33.png", "title": "face serum", "price": 49 },
        { "id": 34, "filter": "decor", "src": "images/goods/good-34.png", "title": "tonic", "price": 12 },
        { "id": 35, "filter": "antiage", "src": "images/goods/good-35.png", "title": "face gel serum", "price": 39 },
        { "id": 36, "filter": "decor", "src": "images/goods/good-36.png", "title": "gift box", "price": 62 },
        { "id": 37, "filter": "decor", "src": "images/goods/good-37.png", "title": "moisturizing tonic", "price": 26 },
        { "id": 38, "filter": "decor", "src": "images/goods/good-38.png", "title": "laque", "price": 8 },
        { "id": 39, "filter": "antiage", "src": "images/goods/good-39.png", "title": "anti-age cream", "price": 43 }
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
                isCartOpen: false,
                isGoToCart: false
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
                return result;
            },
            mainFilterGoods() {
                const filterGoods = this.filterGoods;

                const onMobile = window.screen.width < 760;

                if (onMobile) {
                    return filterGoods.slice(0, 4);
                } else {
                    return filterGoods.slice(0, 8);
                }
            },
            totalPrice() {
                if (this.activeGood === null) {
                    return 0;
                }
                return this.activeGood.price * this.goodCounter;
            },
            totalCartPrice() {
                let res = 0;
                for (const good of this.cart) {
                    res += good.price * good.count;
                }
                return res;
            },
            amountInCart() {
                let res = 0;
                for (const good of this.cart) {
                    res += good.count;
                }
                return res;
            },
            isCartEmpty() {
                return this.cart.length === 0
            }
        },
        created() {
            // Можно было написать this.goods = window.goods;
            this.allGoods = window.goods.map(good => { return { ...good } });
            this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
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
            openCart() {
                this.isCartOpen = true;
            },
            closeCart() {
                this.isCartOpen = false;
            },
            openGoToCart() {
                this.isGoToCart = true;
            },
            closeGoToCart() {
                console.log('close');
                this.isGoToCart = false;
            },
            openCartFromModal() {
                this.closeGoToCart();
                this.openCart();
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
                this.openGoToCart();
                // console.log('cart', this.cart);
                localStorage.setItem('cart', JSON.stringify(this.cart));
            },
            deleteGood(deleteGood) {
                const index = this.cart.findIndex(good => {
                    return good.id === deleteGood.id && good.volume === deleteGood.volume &&
                        good.type === deleteGood.type;
                });
                if (index !== -1) {
                    this.cart.splice(index, 1);
                }
                localStorage.setItem('cart', JSON.stringify(this.cart));
            },
            placeOrder() {
                if (this.cart.length === 0) return;
                window.location.replace('pay.html');
            }
        }
    });

    app.directive('click-outside', {
        mounted(el, binding) {
          el.clickOutsideEvent = function(event) {
            if (!(el === event.target || el.contains(event.target))) {
              binding.value(event, el);
            }
          };
          document.body.addEventListener('click', el.clickOutsideEvent);
        },
        unmounted(el) {
          document.body.removeEventListener('click', el.clickOutsideEvent);
        }
      });

    app.mount('#app');
}
