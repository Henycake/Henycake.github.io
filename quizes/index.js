
const express=require('express');
const path = require('path');
const app=express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.urlencoded({extended:false}));
// app.set('views',Path.join(__dirname,"views"));

let list=[];
app.get('/',(req,res)=>{
res.render('index',{lists:list});
});
app.get('/add',(req,res)=>{
    res.render('formy');
});
app.post('/add',(req,res)=>{
    list.push(req.body.item);
    res.redirect(302,"/")
});
app.listen(3000);
