// Requires
var express = require('express');
var mongoose = require('mongoose');


// Initialize
var app = express();

// Importas rutas
var appRoutes = require('./routes/app')
var usuarioRoutes = require('./routes/usuario')

// Conecction String
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, resp) => {
    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
});


// Rutas
app.use('/usuario', usuarioRoutes);
app.use('/', appRoutes);

// Listening
app.listen(3000, () => {
    console.log('Express server 3000: \x1b[32m%s\x1b[0m', 'online');
});