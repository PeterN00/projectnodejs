//const dbConfig = require('../config/db.config');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./Sequelize');
const Category = require('./Category');
//const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
//    host: dbConfig.HOST,
//    dialect: dbConfig.dialect,
//});


const Product = sequelize.define('Product',{
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },

        category_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                key: 'id',
                model: Category,
            }
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        price: {
            type: DataTypes.DECIMAL(6,2),
            allowNull: false,
        },

        available_quantity: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: 0,
            allowNull: false,
        }
    },{
        timestamps: false,
        tableName: 'Product',
    }
);

//Product.belongsTo(Category);
//Product.hasMany(Order_Detail);
//console.log(sequelize.models)
module.exports = Product;