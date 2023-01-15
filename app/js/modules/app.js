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

const initTestArticles = () => {
    window.articles = JSON.parse(
        `[
            { "id": 1, "date": "17 October, 2022", "src": "images/blog/blog-1.jpg", "title": "how to eat healthy and live not to eat", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" },
            { "id": 2, "date": "12 October, 2022", "src": "images/blog/blog-2.jpg", "title": "our new office in south carolina", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"},
            { "id": 3, "date": "5 October, 2022", "src": "images/blog/blog-3.jpg", "title": "which kinds of coffee is good for health", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"},
            { "id": 4, "date": "28 September, 2022", "src": "images/blog/blog-4.jpg", "title": "this plant is something fantastic", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" },
            { "id": 5, "date": "17 October, 2022", "src": "images/blog/blog-1.jpg", "title": "how to eat healthy and live not to eat", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" },
            { "id": 6, "date": "12 October, 2022", "src": "images/blog/blog-2.jpg", "title": "our new office in south carolina", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"},
            { "id": 7, "date": "5 October, 2022", "src": "images/blog/blog-3.jpg", "title": "which kinds of coffee is good for health", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"},
            { "id": 8, "date": "28 September, 2022", "src": "images/blog/blog-4.jpg", "title": "this plant is something fantastic", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" },
            { "id": 9, "date": "17 October, 2022", "src": "images/blog/blog-1.jpg", "title": "how to eat healthy and live not to eat", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" },
            { "id": 10, "date": "12 October, 2022", "src": "images/blog/blog-2.jpg", "title": "our new office in south carolina", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"},
            { "id": 11, "date": "5 October, 2022", "src": "images/blog/blog-3.jpg", "title": "which kinds of coffee is good for health", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"},
            { "id": 12, "date": "28 September, 2022", "src": "images/blog/blog-4.jpg", "title": "this plant is something fantastic", "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" }
        ]`
    )
}

const { ref, computed, onBeforeUnmount } = Vue;

const useWindowSizes = () => {
    const width = ref(window.screen.width);
    const height = ref(window.screen.height);

    const onResize = () => {
        width.value = window.screen.width;
        height.value = window.screen.height;
    }

    window.addEventListener("resize", onResize);

    onBeforeUnmount(() => {
        window.removeEventListener("resize", onResize);
    });

    return { width, height };
}

const useShowMore = (mainPageCount, mainPageMobileCount, increaseShowCount, items) => {
    const curShowCount = ref(increaseShowCount);
    const { width: screenWidth } = useWindowSizes();

    const itemsForMainPage = computed(() => {
        const onMobile = screenWidth.value < 760;
        const itemsCount = onMobile ? mainPageMobileCount : mainPageCount;
        const endIndex = items.value.length < itemsCount ? items.value.length : itemsCount;
        return items.value.slice(0, endIndex);
    });

    const itemsForFullPage = computed(() => {
        const endIndex = items.value.length < curShowCount.value ? items.value.length : curShowCount.value;
        return items.value.slice(0, endIndex);
    });

    const showMoreBtn = computed(() => {
        return curShowCount.value < items.value.length;
    });

    const increaseCurShowCount = () => {
        curShowCount.value += increaseShowCount;
    };

    return { itemsForMainPage, itemsForFullPage, increaseCurShowCount, showMoreBtn };
}

const useGoodsFilter = (allGoods) => {
    const filterType = ref('all');

    const filterGoods = computed(() => {
        let result = [];
        if (filterType.value === 'all') {
            result = allGoods.value;
        } else {
            result = allGoods.value.filter(good => good.filter === filterType.value);
        }
        return result;
    });

    const changeFilterType = (newFilterType) => {
        filterType.value = newFilterType;
    }

    return { filterGoods, changeFilterType }
}

const createVueApp = () => {
    const app = Vue.createApp({
        setup() {
            const allGoods = ref(window.goods);
            const articles = ref(window.articles);

            const BLOG_INCREASE_COUNT = 4;
            const BLOG_DESKTOP_COUNT = 4;
            const BLOG_MOBILE_COUNT = 4;
            const {
                itemsForMainPage: mainArticles,
                itemsForFullPage: blogArticles,
                showMoreBtn: showMoreArticlesBtn,
                increaseCurShowCount: showMoreArticles
            } = useShowMore(BLOG_DESKTOP_COUNT, BLOG_MOBILE_COUNT, BLOG_INCREASE_COUNT, articles);

            const { changeFilterType, filterGoods } = useGoodsFilter(allGoods);

            const GOOD_INCREASE_COUNT = 12;
            const GOOD_DESKTOP_COUNT = 8;
            const GOOD_MOBILE_COUNT = 4;
            const {
                itemsForMainPage: mainFilterGoods,
                itemsForFullPage: shopFilterGoods,
                showMoreBtn: showMoreGoodsBtn,
                increaseCurShowCount: showMoreGoods
            } = useShowMore(GOOD_DESKTOP_COUNT, GOOD_MOBILE_COUNT, GOOD_INCREASE_COUNT, filterGoods);

            return {
                allGoods,
                articles,
                changeFilterType,
                mainArticles,
                blogArticles,
                showMoreArticlesBtn,
                showMoreArticles,
                showMoreGoods,
                showMoreGoodsBtn,
                shopFilterGoods,
                mainFilterGoods
            };
        },
        data() {
            return {
                activeGood: null,
                goodCounter: 1,
                cart: [],
                radioVolume: '400',
                radioType: 'normal',
                isCartOpen: false,
                isGoToCart: false,
            };
        },
        computed: {
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
            this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
        },
        methods: {
            onGoodClick(good) {
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
