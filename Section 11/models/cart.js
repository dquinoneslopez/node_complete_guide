const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Cart = sequelize.define('cart', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: Sequelize.INTEGER,
        unique: true
    }
});

module.exports = Cart;