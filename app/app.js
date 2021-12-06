const express = require("express");
const app = express();
const port = 3000;
const Pool = require('pg').Pool;

app.use(express.json());

const master = new Pool({
    user: "postgres",
    password: "postgres",
    host: "postgresSQL",
    port: 5432,
    database: "postgres"
})
const slate = new Pool({
    user: "postgres",
    password: "postgres",
    host: "postgres-slave",
    port: 5432,
    database: "postgres"
})

app.post('/crear_producto', async (req, res) => {
    const  nombre = req.body.nombre;
    const  precio = req.body.precio;
    const query = await master.query("INSERT INTO producto (nombre, precio) VALUES ($1::text, $2)",[nombre,precio]);
    console.log("se creo",{
        nombre: nombre,
        precio: precio
    })
    res.send({
        mensaje: "redy"
    })
   
});

app.get('/obtener_producto/:nombre', async (req, res) => {
    const  nombre = req.params.nombre;
    
    const query= await slate.query("SELECT * FROM producto WHERE nombre=$1::text",[nombre]);
    console.log("se obtuvo",query.rows)
    res.send(query.rows)
});

app.listen(port, () => {
  console.log("api redy")
});