const initTestPoints = () => {
    window.pickupPoints = JSON.parse(`[
        { "id": 1, "title": "Bridgeport", "adress": "2422 Colony Street", "time": "Every day: 09:00 - 23:00" },
        { "id": 2, "title": "Mount Zion", "adress": "2336 Spring Street", "time": "Every day: 10:00 - 21:00" }
    ]`);
    window.postPoints = JSON.parse(`[
        { "id": 1, "title": "Bridgeport1", "adress": "2422 Colony Street", "time": "Every day: 09:00 - 23:00" },
        { "id": 2, "title": "Mount Zion1", "adress": "2336 Spring Street", "time": "Every day: 10:00 - 21:00" }
    ]`);
}

const createVueAppPay = () => {
    const app = Vue.createApp({
        data() {
            return {
                firstName: '',
                lastName: '',
                phone: '',
                pickupPoints: [],
                postPoints: [],
                activePoint: null,
                delieveryType: 0,
                paymentType: 0,
                cart: [],
                isDelieveryError: false,
                firstNameError: false,
                lastNameError: false,
                phoneError: false,
                courierAdress: ''
            };
        },
        computed: {
            selectTitle() {
                if (!this.activePoint) {
                    if (this.delieveryType === 2) {
                        return 'Choose post point';   
                    }
                    return 'Choose pickup point';
                }
                return this.activePoint.title;
            },
            delieveryDays() {
                if (this.delieveryType === 0) return 4;
                if (this.delieveryType === 1) return 3;
                if (this.delieveryType === 2) return 2;
                else return 0;
            },
            delieveryTitle() {
                if (this.delieveryType === 0) return 'pickup point';
                if (this.delieveryType === 1) return 'courier delievery';
                if (this.delieveryType === 2) return 'post service';
                else return '';
            },
            paymentTitle() {
                if (this.paymentType === 0) return 'pay now';
                if (this.paymentType === 1) return 'pay upon receipt with a card';
                if (this.paymentType === 2) return 'pay upon receipt with cash';
                else return '';
            },
            isCartEmpty() {
                return this.cart.length === 0
            }
        },
        created() {
            // Можно было написать this.points = window.points;
            this.pickupPoints = window.pickupPoints.map(point => { return { ...point } });
            this.postPoints = window.postPoints.map(point => { return { ...point } });
            this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
        },
        methods: {
            chooseActivePoint(point) {
                this.isDelieveryError = false;
                this.activePoint = point;
            },
            validateDelievery() {
                if (this.delieveryType === 1) {
                    if (!this.courierAdress) return false;
                    return true;
                }
                if (!this.activePoint) return false;
                return true;
            },
            validateUser() {
                let result = true;

                this.firstNameError = false;
                this.lastNameError = false;
                this.phoneError = false;

                if (!this.firstName) {
                    this.firstNameError = true;
                    result = false;
                }
                if (!this.lastName) {
                    this.lastNameError = true;
                    result = false;
                }
                if (!this.phone) {
                    this.phoneError = true;
                    result = false;
                }
                const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                if (!pattern.test(this.phone)) {
                    this.phoneError = true;
                    result = false;
                }

                return result;
            },
            sendOrder() {
                if (this.cart.length === 0) return;
                let valid = true;
                if (!this.validateUser()) {
                    console.warn('User validation failed');
                    valid = false;
                }
                if (!this.validateDelievery()) {
                    console.warn('Delievery validation failed');
                    this.isDelieveryError = true;
                    valid = false;
                }
                if (!valid) return;
                // localStorage.removeItem('cart');
                let message = `Client: ${this.firstName} ${this.lastName}, phone: ${this.phone}\n`
                message += 'Cart:\n';
                message += this.cart.map(el => `\tTitle: ${el.title}, Price: ${el.price}, Type: ${el.type}, Volume: ${el.volume}, Count: ${el.count}`).join('\n');
                message += `\nDelievery Type: ${this.delieveryTitle}\n`;
                if (this.delieveryType !== 1) {
                    const { title, adress, time } = this.activePoint;
                    message += `Point: Title: ${title}, Adress: ${adress}, Time: ${time}\n`;
                } else {
                    message += `Courier Adress: ${this.courierAdress}\n`;
                }
                message += `Payment Type: ${this.paymentTitle}`;
                console.log(message);
                // Делаем кнопку неактивной, когда уже отправили на сервер данные
                // Но если данные на сервер не отправили, например, ошибка сети, то не очищаем, чтобы можно было отправить снова
                // this.cart = [];
            }
        }
    });

    app.component('selector', {
        props: ['points', 'title', 'error'],
        template: `
            <div class="delievery__select" @click="toggleSelect">
                <div class="delievery__option-front" :style="titleStyle">{{title}}
                    <img src="images/list-arrow.svg" alt="arrow" class="delievery__option-img"
                        :class="{ 'delievery__option-img--active': isOpenSelect }">
                </div>
                <div class="delievery__options" :class="{ 'delievery__options--active': isOpenSelect }">
                    <div class="delievery__option"
                        v-for="point in points"
                        @click="chooseActivePoint(point)">
                        <h5 class="delievery__title">{{point.title}}</h5>
                        <p class="delievery__adress">{{point.adress}}</p>
                        <p class="delievery__time">{{point.time}}</p>
                    </div>
                </div>
            </div>
        `,
        data() {
            return {
                isOpenSelect: false
            }
        },
        computed: {
            titleStyle() {
                if (this.error) {
                    return {
                        color: 'red',
                        borderColor: 'red'
                    };
                }
                return {};
            }
        },
        methods: {
            toggleSelect() {
                this.isOpenSelect = !this.isOpenSelect;
            },
            chooseActivePoint(point) {
                this.$emit('change-point', point);
            }
        }
    });

    app.component('app-input', {
        props: ['error', 'clearerror', 'modelValue', 'placeholder'],
        emits: ['update:modelValue'],
        template: `
            <div :class="{'pay-form__valid-error': error}" class="pay-form__input">
                <input
                    :value="modelValue"
                    type="text"
                    class="form__input"
                    style="width: 100%;"
                    :placeholder="placeholder"
                    :class="{'pay-form__border-error': error}"
                    @input="event => onInput(event.target.value)">
            </div>
        `,
        methods: {
            onInput(text) {
                this.clearerror();
                this.$emit('update:modelValue', text);
            }
        }
    });

    app.mount('#pay-app');
}