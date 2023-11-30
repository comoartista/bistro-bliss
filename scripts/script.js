
//Burger menu
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()

const btnContainer = document.getElementById('btnContainer');
const rootEl = document.querySelector('.tabs-container');

class Product {
    constructor(img, price, title, descr, type) {
      this.img = img;
      this.price = price;
      this.title = title;
      this.descr = descr;
      this.type = type;
    }
}

class ProductList  {
    products = [
        new Product (
            'fried-eggs.png',
            9.99,
            'Fried Eggs',
            'Made with eggs, lettuce, salt, oil and other ingredients.',
            ['breakfast', 'allDishes'],
        ),
        new Product (
            'pizza.png',
            15.99,
            'Hawaiian Pizza',
            'Made with eggs, lettuce, salt, oil and other ingredients.',
            ['mainDishes', 'allDishes'],
        ),
        new Product (
            'coctail.png',
            7.25,
            'Martinez Cocktail',
            'Made with eggs, lettuce, salt, oil and other ingredients.',
            ['drinks', 'allDishes'],

        ),
        new Product (
            'cake.png',
            20.99,
            'Butterscotch Cake',
            'Made with eggs, lettuce, salt, oil and other ingredients.',
            ['desserts', 'allDishes'],

        ),
        new Product (
            'lemonade.png',
            5.89,
            'Mint Lemonade',
            'Made with eggs, lettuce, salt, oil and other ingredients.',
            ['drinks', 'allDishes'],

        ),
        new Product (
            'icecream.png',
            18.05,
            'Chocolate Icecream',
            'Made with eggs, lettuce, salt, oil and other ingredients.',
            ['desserts', 'allDishes'],

        ),
        new Product (
            'burger.png',
            12.55,
            'Cheese Burger',
            'Made with eggs, lettuce, salt, oil and other ingredients.',
            ['mainDishes', 'allDishes'],

        ),
        new Product (
            'waffles.png',
            12.99,
            'Classic Waffles',
            'Made with eggs, lettuce, salt, oil and other ingredients.',
            ['breakfest', 'allDishes'],

        )
    ];
    
    renderProducts(filterType = 'allDishes') {
        rootEl.innerHTML = '';
        const filteredProducts = filterType
            ? this.products.filter((prod) => prod.type.includes(filterType))
            : this.products;

        for (const prod of filteredProducts) {
            const prodEl = document.createElement('div');
            prodEl.classList.add('tabcontent');
    
            prodEl.innerHTML += `
                    <img src="images/menu/${prod.img}" alt="${prod.title}" class="tabcontent__img">
                    <div class="tabcontent__container">
                        <div class="tabcontent__price">$${prod.price}</div>
                        <h5 class="tabcontent__title">${prod.title}</h5>
                        <p class="tabcontent__descr">${prod.descr}</p>
                `;
            rootEl.append(prodEl);
        }
    }

    btnsHandler() {
        btnContainer.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                const btnType = event.target.id;
                this.renderProducts(btnType);
            }
        });
    }
}

const list = new ProductList();
list.btnsHandler();
list.renderProducts();


//Timer
const deadline = '2023-12-30';

function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());
    if (t <= 0) {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
    } else {
        days = Math.floor(t / (1000 * 60 * 60 * 24));
        hours = Math.floor((t / (1000 * 60 * 60) % 24));
        minutes = Math.floor((t / 1000 / 60) % 60);
        seconds = Math.floor((t / 1000) % 60);
    }

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
};

function getZero(num) {
    if(num >= 0 && num < 10) {
        return `0${num}`
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds');
        timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);
        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval)
        }
    }
}

setClock('.timer', deadline)

// Progress bar
const progress = document.getElementById('progressBar');

const processScroll = () => {
    let progressWidth = (document.body.scrollTop || document.documentElement.scrollTop)/ (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
    progress.style.width = progressWidth + '%';
}
document.addEventListener('scroll', processScroll)


// Modal
const modalTrigger = document.querySelectorAll('[data-modal]')
const modal = document.querySelector('.modal')
const modalCloseBtn = document.querySelector('[data-close]')

modalTrigger.forEach(elem => {
    elem.addEventListener('click', () => {
        modal.classList.remove('hide')
        modal.classList.add('show')
        document.body.style.overflow = 'hidden'
    })
})

const closeModal = () => {
    modal.classList.remove('show') 
    modal.classList.add('hide')
    document.body.style.overflow = ''
}

modalCloseBtn.addEventListener('click', closeModal)

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) { 
        closeModal();
    }
});