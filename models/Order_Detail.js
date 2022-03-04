//const dbConfig = require('../config/db.config');
const {Sequelize, DataTypes} = require('sequelize');
const Product = require('./Product');
const Order = require('./Order')
//const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
//    host: dbConfig.HOST,
//    dialect: dbConfig.dialect,
//});
const sequelize = require('./Sequelize');

const Order_Detail = sequelize.define('Order_Detail',{
        order_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            references: {
                key: 'id',
                model: Order,
            }
        },

        product_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            references: {
                key: 'id',
                model: Product,
            }
        },

        product_quantity: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 0,
            allowNull: false,
        }
    },{
        tableName: 'Order_Detail',
        timestamps: false,
    }
);

//console.log(sequelize.models)
module.exports = Order_Detail;