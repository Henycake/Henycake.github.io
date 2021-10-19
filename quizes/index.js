
const path = require('path');
const express = require('express');
const app = express();
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'my super secrit secret', 
    resave: false, 
    saveUninitialized: true
}));
app.use((req, res, next) => {
    if (!req.session.list) {
        req.session.list = [];
    }
    next();
});

app.get('/', (req, res) => {
  res.locals.list = req.session.list;
  res.render('list');
});

app.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'form.html'));
});

app.post('/add', (req, res) => {
  req.session.list.push(req.body.item);
  res.redirect(302, '/');
});

app.listen(3000);
