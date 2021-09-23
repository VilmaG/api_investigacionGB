const express = require ('express'); //sintaxis para importar modulos en node.js
require('dotenv').config();
const {dbConection} = require('./config/database')
const cors = require('cors');

// crear el servidor express
const app = express();

//crear la conexion a la BD
dbConection();

//estableciendo la configuracion de cors
app.use(cors());

//verificando variables de entorno
//console.log(process.env);

//creando las rutas de mi app
app.get('/',(req,res)=>{
    res.json({
        ok: true,
        msg: "Bienvenidos a la App Proyectos"
    });
});

// codigo para desplegar el servidor
app.listen(process.env.PORT,()=>{
    console.log('Serviodr Node.js desplegado en el puerto:' + 3000)
})

//password de la base de datos     status(400).
//ZYUJ8n7nbsCx3HST
// usuario: adminproject
//  string de conexion: mongodb+srv://adminproject:<password>@cluster0.gjafd.mongodb.net/test