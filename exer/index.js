const path = require('path');
const express = require('express');
const app = express();
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'my heny  secret', 
    resave: false, 
    saveUninitialized: true
}));

app.get('/',(req,res)=>{
    if(!req.session.viewmany){
        req.session.viewmany=1;
    } else{
        req.session.viewmany+=1;
    }
    res.render('index',{viewCount:req.session.viewmany});
});
app.listen(3000);