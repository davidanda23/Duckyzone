var express = require('express');
var app = express();
var mysql = require('mysql');
var cors = require('cors');
const { urlencoded } = require('express');
const bodyParser = require("body-parser");
const { promise } = require('protractor');
const bcrypt = require('bcrypt');
const { createToken } = require('typescript');

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
            } else {
                console.log('se pidio');
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
app.post('/login', function(request, response) {
    console.log('dentro de login');
    var email = request.body.email;
    var password = request.body.password;
    if (email && password) {
        console.log('vamos a verificar');
        // check if user exists
        connection.query('SELECT * FROM usuario WHERE correo = ? AND contraseña = ?', [email, password], function(error, results, fields) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                console.log('adentro');
                response.redirect('/home');
            } else {
                response.send('Incorrect Username and/or Password!');
                console.log('correo o contraseña erronea');
            }           
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        console.log('llenar todos los campos!!');
        response.end();
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