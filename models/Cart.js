//const dbConfig = require('../config/db.config');
const {Sequelize, DataTypes} = require('sequelize');
const User = require('./User');
//const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
//    host: dbConfig.HOST,
//    dialect: dbConfig.dialect,
//});
const sequelize = require('./Sequelize');

const Cart = sequelize.define('Cart',{
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED,
        },
    
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            references: {
                key: 'id',
                model: User,
            }
        }
    },{
        timestamps: false,
        tableName: 'Cart', 
    }
);

//Cart.belongsTo(User);
//Cart.hasMany(Cart_Item);
//console.log(sequelize.models)
module.exports = Cart;