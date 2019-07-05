const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNul: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNul: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNul: false
    },
    description: {
        type: Sequelize.STRING,
        allowNul: false
    }
});

module.exports = Product;