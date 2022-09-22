const express = require('express')
const router = express.Router()
const examen1Controller = require('../controllers/index')

router.get('/pagina', examen1Controller.getInfo)
router.post('/validacion',examen1Controller.postTriangle)
module.exports = router