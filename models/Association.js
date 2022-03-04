const sequelize = require('./Sequelize');

const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');
const Order_Detail = require('./Order_Detail');
const Category = require('./Category');
const Cart = require('./Cart');
const Cart_Item = require('./Cart_Item');

Category.hasMany(Product,{foreignKey: 'category_id' , sourceKey: 'id'});
Product.belongsTo(Category,{foreignKey: 'category_id' , targetKey: 'id'});

User.hasMany(Order, {foreignKey: 'user_id', sourceKey: 'id'});
Order.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id'});

Order.hasMany(Order_Detail, {foreignKey: 'order_id', sourceKey: 'id'});
Order_Detail.belongsTo(Order, { foreignKey: 'order_id', targetKey: 'id'});

Product.hasMany(Order_Detail, {foreignKey: 'product_id' , sourceKey: 'id'});
Order_Detail.belongsTo(Product, {foreignKey: 'product_id', targetKey: 'id'});

Order.belongsToMany(Product,{ through: 'Order_Detail', sourceKey: 'id', targetKey:'id'});
Product.belongsToMany(Order, { through: 'Order_Detail', sourceKey: 'id', targetKey:'id'});



module.exports = { User, Product, Order, Order_Detail, Category, Cart, Cart_Item}