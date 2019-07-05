const fs = require('fs');
const path = require('path');

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
    constructor(title){
        this.title = title;
    }

    save(){
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback){
        getProductsFromFile(callback);
    }
}