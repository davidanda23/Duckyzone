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
//API QUE AGREGA DEPAS
app.post('/addDept', (req, res) => {
    connect.query('CALL add_depts(?)',
        [req.body.nombre], (error) => {
            if (error) {
                throw error;
            }
        });
});
//API QUE EDITA DEPAS
app.post('/editDept', (req, res) => {
    connect.query('UPDATE departamentos SET nombre=? WHERE id=? ',
        [req.body.nombre, req.body.id], (error) => {
            if (error) {
                throw error;
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
//API QUE AGREGA PROVEEDORES
app.post('/addProvider', (req, res) => {
    connect.query('CALL add_providers(?,?,?,?,?,?,?,?,?,?)',
        [req.body.nombre,Number(req.body.tel),req.body.calle,req.body.colonia,Number(req.body.num_int),Number(req.body.num_ext),Number(req.body.cod_postal),req.body.correo,req.body.ciudad,req.body.pais], (error) => {
            if (error) {
                throw error;
            }
        });
});
//API QUE EDITA PROVEEDORES
app.post('/editProvider', (req, res) => {
    connect.query('CALL edit_providers(?,?,?,?,?,?,?,?,?,?,?)',
        [req.body.nombre,Number(req.body.tel),req.body.calle,req.body.colonia,Number(req.body.num_int),Number(req.body.num_ext),Number(req.body.cod_postal),req.body.correo,req.body.ciudad,req.body.pais,Number(req.body.ID)], (error) => {
            if (error) {
                throw error;
            }
        });
});
//API QUE AGREGA PRODUCTOS
app.post('/addProduct', (req, res) => {
    connect.query('CALL add_products(?,?,?,?,?,?,?)',
        [req.body.nombre,req.body.descr,Number(req.body.precio_unidad),Number(req.body.existencias),(req.body.imgen),Number(req.body.departamento),Number(req.body.proveedor)], (error) => {
            if (error) {
                throw error;
            }
        });
});
//API QUE EDITA PRODUCTOS
app.post('/editProduct', (req, res) => {
    connect.query('CALL edit_products(?,?,?,?,?,?,?,?)',
        [req.body.nombre,req.body.descr,Number(req.body.precio_unidad),Number(req.body.existencias),(req.body.imgen),Number(req.body.departamento),Number(req.body.proveedor),Number(req.body.codigo)], (error) => {
            if (error) {
                throw error;
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

//API QUE AGREGA USUARIOS
app.post('/addUsers', (req, res) => {
    connect.query('CALL add_users(?,?,?,?,?,?,?)',
        [req.body.correo,req.body.contrseña,req.body.nombre,Number(req.body.tel),req.body.apelli_pat,req.body.apelli_mat,req.body.nombreusuario], (error) => {
            if (error) {
                throw error;
            }
        });
});

//API QUE EDITA USUARIOS
app.post('/editUsers', (req, res) => {
    connect.query('UPDATE usuario a SET a.correo=?, a.nombreusuario=?, a.nombre=?,a.apelli_pat=?,a.apelli_mat=?,a.tel=? WHERE a.id=? ',
        [req.body.correo, req.body.nombreusuario,req.body.nombre,req.body.apelli_pat,req.body.apelli_mat,req.body.tel,req.body.id], (error) => {
            if (error) {
                throw error;
            }
        });
});
//API QUE RETORNA EMPLEADOS
app.get("/getAllEmployees", (req, res) => {
    connect.query('SELECT a.id,a.nombreusuario,a.nombre,a.tel,a.apelli_pat,a.apelli_mat,a.correo,b.puesto,b.salario,b.id_departamento, c.nombre as departamento FROM usuario a, empleado b, departamento_interno c WHERE b.id_usuario=a.id AND c.id=b.id_departamento ORDER BY a.id', (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.send(rows);
        }
    });
});



//CONSIGUE LOS PRODUCTOS DE UN DEPARTAMENTO DADO
app.get("/prodxdept/:dept", (req, res) => {
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
//API AGREGAR EMPLEADOS
app.post('/addEmployee', (req, res) => {
    connect.query('CALL add_employees(?,?,?,?,?,?,?,?,?)',
        [req.body.correo,req.body.nombre,Number(req.body.tel),req.body.apelli_pat,req.body.apelli_mat,req.body.nombreusuario,Number(req.body.salario),req.body.puesto,Number(req.body.id_departamento)], (error) => {
            if (error) {
                throw error;
            }
        });
});
//API EDITAR EMPLEADOS
app.post('/editEmployee', (req, res) => {
    connect.query('UPDATE usuario a, empleado b SET a.correo=?, a.nombreusuario=?, a.nombre=?,a.apelli_pat=?,a.apelli_mat=?,a.tel=?,b.puesto=?,b.salario=?,b.id_departamento=? WHERE a.id=? AND b.id_usuario=?',
        [req.body.correo, req.body.nombreusuario,req.body.nombre,req.body.apelli_pat,req.body.apelli_mat,req.body.tel,req.body.puesto,req.body.salario,req.body.id_departamento,req.body.id,req.body.id], (error) => {
            if (error) {
                throw error;
            }
        });
});

//API para realizar una venta
app.post('/generarVenta/:numArticulos&:producto', (req, res) =>{
    
    connect.query('SELECT onHandleProduct('+req.params.numArticulos+','+req.params.producto+')' ),
    [Number(req.params.numArticulos),Number(req.params.producto)],function (error, results, fields){
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    }

});
///////7PRUEBA!!!
app.get('/prueba', function (req, res) {
    connect.query('SELECT @n_vendidos',
        [], (error, results) => {
            if (error) {
                throw error;
            }else{
                res.send(results);
                res.end();
            }
        });
});

//API LOGIN
app.get('/login/:email&:password', function (req, res) {
    var email = req.params.email;
    var password = req.params.password;
    if (email && password) {
        // check if user exists
        connect.query('SELECT * FROM usuario a WHERE correo = ? AND contrseña = ?', [email, password], function (error, results, fields) {
            if (results.length > 0) {
                res.send(results);
            } else {
                //CREAR UN ERROR AL TENER CREDENCIALES INCORRECTAS
            }
            res.end();
        });
    } else {
        res.send('Please enter Username and Password!');
        res.end();
    }
});

//API QUE OBTIENE AL CLIENTE
app.get('/getClient/:id', function (req, res) {
    connect.query('SELECT a.*,b.* FROM usuario a, cliente b WHERE a.id=? AND b.id_usuario=?',
        [Number(req.params.id),Number(req.params.id)], (error, results) => {
            if (error) {
                throw error;
            }else{
                res.send(results);
                res.end();
            }
        });
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
    connect.query('CALL delete_users(?)',
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