const express=require('express');
const cookieParser=require('cookie-parser');

const path=require('path');

const app=express();


app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.set("view engine",'ejs');
app.set('views',path.join(__dirname,'view'));

app.get('/AddCookie',(req,res)=>{
    res.render("index",{'cookie':req.cookies});
});

app.post('/AddCookie',(req,res)=>{
    res.cookie(req.body.name,req.body.vals);
    res.redirect("back");
});
app.listen(3000);

