const express = require("express");
const sequelize= require('./models/Sequelize');
const port  = process.env.PORT || 3000;
const app = express();
const models = require('./models/Association');
app.use(express.static(__dirname + '/public'));

const createTable = ()=>{
    let files = [ 'Category','Product','User', 'Cart', 'Cart_Item', 'Order', 'Order_Detail']
   
    let models = files.map(file => require('./models/'+file))

    models.map(model => model.sync()) 
    console.log(models);

}

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
    createTable()
})

app.get('/', async (req,res,next)=>{
    const Product = await models.Product.findOne();
    res.status(200).json(await Product.getCategory());
});
app.get('/models',(req,res,next)=> console.log(sequelize.models));
app.get('/product', async(req,res,next)=> res.status(200).json(sequelize.models.Category));

app.use((err, req, res, next)=> res.status(404));
app.use((err, req, res, next)=> res.status(500));