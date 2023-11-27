class Product  {
    constructor (img, price, title, descr, type) {
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
            'breakfest',

        ),
        new Product (
            'pizza.png',
            15.99,
            'Hawaiian Pizza',
            'Made with eggs, lettuce, salt, oil and other ingredients.',
            'main-dishes',
        ),
        new Product (
            'coctail.png',
            7.25,
            'Martinez Cocktail',
            'Made with eggs, lettuce, salt, oil and other ingredients.',
            'drinks',
        ),
        new Product (
            'cake.png',
            20.99,
            'Butterscotch Cake',
            'Made with eggs, lettuce, salt, oil and other ingredients.',
            'desserts',
        ),
        new Product (
            'lemonade.png',
            5.89,
            'Mint Lemonade',
            'Made with eggs, lettuce, salt, oil and other ingredients.',
            'drinks',
        ),
        new Product (
            'icecream.png',
            18.05,
            'Chocolate Icecream',
            'Made with eggs, lettuce, salt, oil and other ingredients.',
            'desserts',
        ),
        new Product (
            'Cheese Burger',
            12.55,
            'Cheese Burger',
            'Made with eggs, lettuce, salt, oil and other ingredients.',
            'main-dishes',
        ),
        new Product (
            'waffles.png',
            12.99,
            'Classic Waffles',
            'Made with eggs, lettuce, salt, oil and other ingredients.',
            'breakfest',
        )
    ];
    render() {
        
    }
}



