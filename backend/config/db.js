const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'inventario_equipos'
});

conexion.connect((error) => {
    if (error) {
        console.log('❌ Error al conectar con MySQL');
        console.log(error);
    } else {
        console.log('✅ Conectado a MySQL');
    }
});

module.exports = conexion;