//const dbConfig = require('../config/db.config');
const {Sequelize, DataTypes} = require('sequelize');
//const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
//    host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//});
const sequelize = require('./Sequelize');

const User = sequelize.define('User',{
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },

        username:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is:   /^[A-Za-z0-9_\.]{6,32}$/i
            }
        },

        password: {
            type: DataTypes.STRING(32),
            allowNull: false,
            validate: {
                is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,32}$/i
            }
        },

        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'User',
        timestamps: false,
    }
);

//User.hasOne(Cart);
//User.hasMany(Order);

//console.log(sequelize.models)

//console.log(Order === sequelize.models.Order);
module.exports = User;
