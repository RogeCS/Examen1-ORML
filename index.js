// importar las bibliotecas
const { Console } = require('console');
const express = require('express');
const path = require('path');
const examen1Routes = require('./routes/index')

const app = express(); // create an express application
const PORT = 8083

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/examen', examen1Routes)


//Lanzar la app
app.listen(PORT,()=>{
    console.log("servidor en línea");
});