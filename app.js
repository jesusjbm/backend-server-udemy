// Requires
var express = require('express');
var mongoose = require('mongoose');


// Initialize
var app = express();


// Conecction String
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, resp) => {
    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
});

// Rutas
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realiazda correctamente'
    });
});

// Listening
app.listen(3000, () => {
    console.log('Express server 3000: \x1b[32m%s\x1b[0m', 'online');
});