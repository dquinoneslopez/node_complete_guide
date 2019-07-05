const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node-complete',
    'root',
    'Temporal_123',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

module.exports = sequelize;