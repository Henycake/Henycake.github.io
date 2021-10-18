const express = require('express');
const path=require("path");
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,"view"));
app.use('/result',express.urlencoded({extended:false}));


app.get('/', (req, res) => {
    const date=new Date();
    const hour=date.getHours();

    res.render("index");

  
});
app.post('/result',(req,res)=>{
    res.redirect(`/output?name=${req.body.name}&age=${req.body.age}`);
});
app.get('/output', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    if (!name) {
        name = "person";
    }
    if(!age){
        age="unknown";
    }
    res.send(`Welcome ${name} with age ${age}`);
});
app.use('/css', express.static(path.join(__dirname, 'css')));
app.listen(3000);