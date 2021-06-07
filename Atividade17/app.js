app = require('./app/config/server');


const home = require('./app/routes/home');

home(app)


app.listen(3000, function () {
    console.log('servido iniciado');
})