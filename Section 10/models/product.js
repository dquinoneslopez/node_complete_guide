const db = require('../utils/database');

const Cart = require('./cart');

module.exports = class product {
    constructor(id, title, imageUrl, description, price){
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = parseFloat(price);
    }

    save(){
        return db.execute(
            'INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
            [this.title, this.price, this.imageUrl, this.description]
        );
    }

    static deleteById(id) {
        
    }

    static fetchAll(callback){
        return db.execute('SELECT * FROM products;');
    }

    static findById(id, callback) {
        return db.execute('SELECT * FROM products WHERE id = ?', [id]);
    }
}