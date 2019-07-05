const fs = require('fs');
const path = require('path');
const Cart = require('./cart');

const p =  path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFromFile = callback => {
    fs.readFile(p, (err, data) => {
        try {
            callback(JSON.parse(data));
        } catch (err) {
            return callback([]);
        }
    });
}

module.exports = class product {
    constructor(id, title, imageUrl, description, price){
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = toNumber(price);
    }

    save(){
        getProductsFromFile(products => {
            if (this.id) {
                const existingProduct = products.findIndex(prod => prod.id === this.id);
                const updateProducts = [...products];
                updateProducts[existingProduct] = this;
                fs.writeFile(p, JSON.stringify(updateProducts), err => {
                    console.log(err);
                });
            } else {
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), err => {
                    console.log(err);
                });
            }
        });
    }

    static deleteById(id) {
        getProductsFromFile(products => {
            const product = products.find(prod => prod.id === id);
            const updatedProducts = products.filter(prod => prod.id !== id);
            fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                if (!err) {
                    Cart.deleteProduct(id, product.price);
                }
            })
        })
    }

    static fetchAll(callback){
        getProductsFromFile(callback);
    }

    static findById(id, callback) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id);
            callback(product);
        })
    }
}