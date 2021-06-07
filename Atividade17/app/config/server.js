var express = require('express');
var consign = require('consign');
const path = require('path');

app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static(path.join('./public')));
consign({cwd:'app'}) 
    .include('routes')
    .then('models')
    .into(app);

module.exports = app;