const express = require('express')
const router = express.Router()

router.post('/', crearNuevoCarrito)

function crearNuevoCarrito (req,res) {
    console.log('aqui se crea un nuevo carrito')
}

module.exports = router
