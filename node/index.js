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
            res.end();
        }
    });
});
//API QUE RETORNA DEPAS EN ADMIN
app.get("/getDeptsAdmin", (req, res) => {
    connect.query('SELECT id, nombre FROM departamentos', (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.send(rows);
            res.end();
        }
    });
});
//API QUE RETORNA PROVEEDORES
app.get("/getProviders", (req, res) => {
    connect.query('SELECT * FROM proveedores', (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.send(rows);
            res.end();
        }
    });
});
//API QUE RETORNA PRODUCTOS
app.get("/getProducts", (req, res) => {
    connect.query('SELECT * FROM productos', (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.send(rows);
            res.end();
        }
    });
});
//API QUE RETORNA USUARIOS
app.get("/getUsers", (req, res) => {
    connect.query('SELECT * FROM usuario', (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.send(rows);
            res.end();
        }
    });
});

//API QUE RETORNA EMPLEADOS
app.get("/getAllEmployees", (req, res) => {
    connect.query('SELECT a.id,a.nombreusuario,a.correo,b.puesto,b.salario, c.nombre as departamento FROM usuario a, empleado b, departamento_interno c WHERE b.id_usuario=a.id AND c.id=b.id_departamento ORDER BY a.id', (err, rows) => {
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
    connect.query('INSERT INTO usuario(nombreusuario, correo, contrseña) VALUES (?,?,?)',
        [req.body.username, req.body.email, req.body.password], (error) => {
            if (error) {
                throw error;
            }
        });
});
//API EDITAR EMPLEADOS
app.post('/editEmployee', (req, res) => {
    connect.query('UPDATE usuario SET nombreusuario=?, correo=? WHERE id=?',
        [req.body.nombreusuario, req.body.correo,req.body.id], (error) => {
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
//API QUE BORRA EMPLEADOS
app.get("/deleteEmployee/:id", function (req, res) {
    connect.query('DELETE FROM empleado WHERE  empleado.id_usuario=?',
        [Number(req.params.id)], (error) => {
            if (error) {
                throw error;
            }
        });
    
});
//API QUE BORRA USUARIOS
app.get("/deleteUser/:id", function (req, res) {
    connect.query('DELETE FROM usuario WHERE  usuario.id=?',
        [Number(req.params.id)], (error) => {
            if (error) {
                throw error;
            }
        });
    
});
//API QUE BORRA DEPAS
app.get("/deleteDept/:id", function (req, res) {
    connect.query('DELETE FROM departamentos WHERE departamentos.id=?',
        [Number(req.params.id)], (error) => {
            if (error) {
                throw error;
            }
        });
    
});
//API QUE BORRA PROVEEDORES
app.get("/deleteProvider/:id", function (req, res) {
    connect.query('DELETE FROM proveedores WHERE  proveedores.ID=?',
        [Number(req.params.id)], (error) => {
            if (error) {
                throw error;
            }
        });
    
});
//API QUE BORRA PRODUCTOS
app.get("/deleteProduct/:id", function (req, res) {
    connect.query('DELETE FROM productos WHERE  productos.codigo=?',
        [Number(req.params.id)], (error) => {
            if (error) {
                throw error;
            }
        });
    
});

app.listen(3000, () => {
    console.log('Server puerto 3000');
})