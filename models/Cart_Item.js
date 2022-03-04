//const dbConfig = require('../config/db.config');
const {Sequelize, DataTypes, Model} = require('sequelize');
const Cart = require('./Cart');
const Product = require('./Product');
//const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
//    host: dbConfig.HOST,
//    dialect: dbConfig.dialect,
//});
const sequelize = require('./Sequelize');

const Cart_Item = sequelize.define('Cart_Item',{
        cart_id: {
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                key: 'id',
                model: Cart,
            }
        },
    
        product_id: {
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
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
        timestamps: false,
        tableName: 'Cart_Item',
    }
);
//console.log(sequelize.models)

module.exports = Cart_Item;