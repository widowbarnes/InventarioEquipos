const express = require('express');

const router = express.Router();

const controlador = require('../controllers/equiposController');

router.get('/', controlador.obtenerEquipos);

router.get('/:codigo', controlador.obtenerEquipo);

router.post('/', controlador.registrarEquipo);

router.put('/:codigo', controlador.actualizarEstado);

module.exports = router;