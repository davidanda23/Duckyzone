var express = require('express');
var app = express ();
var mysql = require('mysql');
var cors = require('cors');

app.use(cors({origin: '*'}));

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
            console.log('se pidio');
            res.send(rows);
        }
    });
});

app.listen(3000, () => {
    console.log('Server puerto 3000');
})