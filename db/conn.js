
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
   'CompassCar', 
   'root', 
   '',
   {
   host: 'localhost',
   dialect: 'mysql'
   }
);

module.exports = sequelize;