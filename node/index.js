var express = require('express');
var app = express ();
var mysql = require('mysql');
var cors = require('cors');
const { urlencoded } = require('express');
const bodyParser = require("body-parser");

app.use(cors({origin: '*'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var connect =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'duckyzone'
});

connect.connect(function(err) {
    if (err) throw err;
    console.log('connected!!');
});

app.get("/", (req, res) => {
    res.send('Conectado!');
});

app.get("/dept", (req, res) => {
    connect.query('SELECT id, nombre FROM departamentos', (err, rows) => {
        if(err){
            throw err;
        } else {
            res.send(rows);
        }
    });
});

//API REGISTRO DE USUARIO EN LA BASE DE DATOS
app.post('/register', (req, res) => {
    connect.query('INSERT INTO usuario(nombreusuario, correo, contrseña) VALUES (?,?,?)', 
    [req.body.username,req.body.email,req.body.password],(error) => {
        if(error){
            throw error;
        } else {
            console.log('se pidio');
        }
    });
});
app.listen(3000, () => {
    console.log('Server puerto 3000');
})