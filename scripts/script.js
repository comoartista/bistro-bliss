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