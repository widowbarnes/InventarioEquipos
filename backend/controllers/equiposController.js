const conexion = require('../config/db');

// Obtener todos los equipos
const obtenerEquipos = (req, res) => {

    const sql = 'SELECT * FROM equipos';

    conexion.query(sql, (error, resultados) => {

        if (error) {
            return res.status(500).json(error);
        }

        res.json(resultados);

    });

};

// Obtener un equipo por código
const obtenerEquipo = (req, res) => {

    const codigo = req.params.codigo;

    const sql = 'SELECT * FROM equipos WHERE codigo = ?';

    conexion.query(sql, [codigo], (error, resultados) => {

        if (error) {
            return res.status(500).json(error);
        }

        res.json(resultados);

    });

};

// Registrar un equipo
const registrarEquipo = (req, res) => {

    const {
        codigo,
        nombre,
        categoria,
        laboratorio,
        estado,
        responsable
    } = req.body;

    const sql = `
        INSERT INTO equipos
        (codigo,nombre,categoria,laboratorio,estado,responsable)
        VALUES (?,?,?,?,?,?)
    `;

    conexion.query(sql,
        [codigo,nombre,categoria,laboratorio,estado,responsable],
        (error) => {

            if(error){
                return res.status(500).json(error);
            }

            res.json({
                mensaje:'Equipo registrado correctamente'
            });

        });

};

// Actualizar estado
const actualizarEstado = (req,res)=>{

    const codigo = req.params.codigo;

    const {estado}=req.body;

    const sql="UPDATE equipos SET estado=? WHERE codigo=?";

    conexion.query(sql,[estado,codigo],(error)=>{

        if(error){

            return res.status(500).json(error);

        }

        res.json({

            mensaje:"Estado actualizado correctamente"

        });

    });

};

module.exports={

obtenerEquipos,

obtenerEquipo,

registrarEquipo,

actualizarEstado

};