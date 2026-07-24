const express = require('express');
const cors = require('cors');
const rutasEquipos = require('./routes/equipos');

const app = express();

// Importar la conexión a MySQL
require('./config/db');

// Middleware
app.use(cors());
app.use(express.json());
app.use('/equipos', rutasEquipos);

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({
        mensaje: 'Servidor funcionando correctamente'
    });
});

// Puerto
const PUERTO = 3000;

app.listen(PUERTO, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PUERTO}`);
});