const {Router} = require('express');
const { obtenerProductos } = require('../controllers/pruebas.controller');

const router = Router();



router.get('/',obtenerProductos)




module.exports = router