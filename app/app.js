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
    res.send(query)
   
});

app.get('/obtener_producto/:nombre', async (req, res) => {
    const  nombre = req.params.nombre;
    console.log(nombre)
    const query= await slate.query("SELECT * FROM producto WHERE nombre=$1::text",[nombre]);
    res.send(query.rows)
});
"select * from prods WHERE '%s' LIKE '%' || name || '%';"
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});