const express = require('express'); 
const path = require('path');
const app = express();
app.set('view engine', 'ejs');//specifying tempate file/engine extension
app.set('views', path.join(__dirname, "view")); //specifying the path to your views
app.get('/', (req, res) => {
 const date = new Date();
 const hour=date.getHours();
 res.render("index", {
 time: date.toTimeString(),hour,
 });
});
app.use('/css', express.static(path.join(__dirname, 'css')));
app.listen(3000);