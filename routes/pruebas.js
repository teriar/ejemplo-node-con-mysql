const {Router} = require('express');
const { obtenerProductos, obtenerProducto, actualizarPersona } = require('../controllers/pruebas.controller');

const router = Router();



router.get('/',obtenerProductos)

router.get('/:id', obtenerProducto)


router.put('/:id', actualizarPersona )

module.exports = router