//Usamos el pousman para hacer las pretisiónes 

//configuración del puerrto 
require('./config/config');


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//configuracion del bdy parser para serializar el POST
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//parse application/json
app.use(bodyParser.json());


app.get('/usuario', function(req, res) {
    res.json("get Usuario");
});

app.post('/usuario', function(req, res) {
    let body = req.body; //esto resivira las peticiones por medio de post

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'EL nombre es obligatorio'
        });
    } else {
        res.json({
            body
        });
    }
});

//se usa para actualizar
app.put('/usuario/:id', function(req, res) { //:id es el parametro que va a resivir
    let id = req.params.id; //.id = :id
    res.json({
        id
    });
});


app.delete('/usuario', function(req, res) {
    res.json("delete Usuario");
});



app.listen(process.env.PORT, () => { //process.env.PORT  proviene del config/config.js
    console.log('Escuchando el puerto: ', process.env.PORT);
});