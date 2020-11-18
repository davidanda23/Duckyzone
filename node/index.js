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

app.get("/dept", (req, res) => {
    connect.query('SELECT id, nombre FROM departamentos', (err, rows) => {
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

//obtener email de usuarios
const getByEmail = (pEmail) => {
    return new promise((resolve, reject) => {
        connect.query('select * from usuario where correo=?', pEmail, (error, rows) => {
            if (error) reject(error)
            resolve(rows[0])
        });
    });
};

//API LOGIN
app.get('/login/:email&:password', function (req, res) {
    var email = req.params.email;
    var password = req.params.password;
    console.log(email + "__" + password);
    if (email && password) {
        // check if user exists
        connect.query('SELECT * FROM usuario WHERE correo = ? AND contrseña = ?', [email, password], function (error, results, fields) {
            if (results.length > 0) {
                console.log("Hay usuarios");
                //res.status(200).json(results);
                res.send({
                    "code": 200,
                    "success": "login exitoso"
                });
                /*request.session.loggedin = true;
                request.session.username = username;
                console.log('adentro');
                response.redirect('/home');*/
                //return;
            } else {
                console.log("No hay usuarios");
                res.send({
                    "code": 300,
                    "success": "no existen usuarios"
                });
                /*console.log("no se pudo");
                response.send('Incorrect Username and/or Password!');*/
            }
            res.end();
        });
    } else {
        res.send('Please enter Username and Password!');
        //console.log('llenar todos los campos!!');
        res.end();
    }
});
/*app.get("/login",function(req, res){
    console.log('entro a login');
    var email = req.body.email;
    var password = req.body.password;
    connect.query('SELECT * FROM usuarios WHERE correo= ?', [email], async function (error, results, fields) {
        if (error) {
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
            console.log('error 400');
        } else {
            if (results.length > 0) {
                const comparision = await bcrypt.compare(password, results[0].password)
                if (comparision) {
                    res.send({
                        "code": 200,
                        "success": "login sucessfull"
                    })
                    console.log('entro sin pedos');
                }
                else {
                    res.send({
                        "code": 204,
                        "success": "Email and password does not match"
                    })
                    console.log('no coincide la contraseña o correo');
                }
            }
            else {
                res.send({
                    "code": 206,
                    "success": "Email does not exits"
                });
                console.log('correo no existe');
            }
        }
    });
});
*/
app.listen(3000, () => {
    console.log('Server puerto 3000');
})