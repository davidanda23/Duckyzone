var express = require('express');
var app = express();
var mysql = require('mysql');
var cors = require('cors');
const { urlencoded } = require('express');
const bodyParser = require("body-parser");
const { promise } = require('protractor');
const bcrypt = require('bcrypt');
const { createToken } = require('typescript');
const { NULL } = require('node-sass');

app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'duckyzone'
});

connect.connect(function (err) {
    if (err) throw err;
    console.log('connected!!');
});

app.get("/", (req, res) => {
    res.send('Conectado!');
});

//CONSIGUE LOS DEPARTAMENTOS
app.get("/dept", (req, res) => {
    connect.query('SELECT id, nombre FROM departamentos', (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.send(rows);
        }
    });
});

//CONSIGUE LOS PRODUCTOS DE UN DEPARTAMENTO DADO
app.get("/prodxdept/:dept", (req, res) => {
    console.log("Params: " + req.params.dept);
    var dept = req.params.dept;
    connect.query('SELECT codigo, nombre, descr, precio_unidad, existencias, imgen, departamento, proveedor from productos where departamento=?', [dept], (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.send(rows);
        }
    });
});

//API REGISTRO DE USUARIO EN LA BASE DE DATOS
app.post('/register', (req, res) => {
    console.log('entro a register');
    connect.query('INSERT INTO usuario(nombreusuario, correo, contrseña) VALUES (?,?,?)',
        [req.body.username, req.body.email, req.body.password], (error) => {
            if (error) {
                throw error;
            }
        });
});

//API LOGIN
app.get('/login/:email&:password', function (req, res) {
    var email = req.params.email;
    var password = req.params.password;
    if (email && password) {
        // check if user exists
        connect.query('SELECT * FROM usuario WHERE correo = ? AND contrseña = ?', [email, password], function (error, results, fields) {
            if (results.length > 0) {
                res.send(results);
            } else {
                //CREAR UN ERROR AL TENER CREDENCIALES INCORRECTAS
            }
            res.end();
        });
    } else {
        res.send('Please enter Username and Password!');
        //console.log('llenar todos los campos!!');
        res.end();
    }
});

//API ROl
app.get('/role/:id', function (req, res) {
    var id = req.params.id;
    if (id) {
        // check if user exists
        connect.query('SELECT * FROM empleado WHERE id_usuario=?', [id], function (error, results, fields) {
            if (results.length > 0) {
                res.send(results);
            }else{
                res.end();
            }
        });
    } else {
        res.send('Please enter Username and Password!');
        //console.log('llenar todos los campos!!');
        res.end();
    }
});

app.listen(3000, () => {
    console.log('Server puerto 3000');
})