require('dotenv').config();
const Sequelize=require('sequelize');
var sequelize = new Sequelize(process.env.POSTGRES_HOST);
module.exports= sequelize;
