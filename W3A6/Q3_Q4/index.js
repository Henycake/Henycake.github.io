const express = require('express'); 
const path = require('path');
const app = express();

let Product=require("./model/Product");
let Cart=require("./model/Cart");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.urlencoded({extended:false}));
 products=[new Product(1,"Computer",1200,"mac pro!"),
new Product(2,"Books",150,"java books"),
new Product(3,"Furniture",500,"Wooden !")
];
// let products=[];

app.get('/', (req, res) => {
    res.render("index",{products:Product.getAllProducts()});
});
app.get('/cart',(req,res)=>{
    let tempCart=new Cart();
    for(let product of Product.getAllProducts()){
        tempCart.add(product, Math.ceil(Math.random()*100));
    }
    res.render("shoppingCart",{items:tempCart.getAll()});
});
app.get('/product',(req,res)=>{
   res.render("product");

    
});
app.post('/product',(req,res)=>{
    
   products.push(new Product(1,req.body.name,req.body.price,req.body.description));
    res.redirect(302,"/");
});
app.listen(3001);
