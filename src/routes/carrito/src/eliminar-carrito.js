const express = require('express')
const router = express.Router()

module.exports = router

router.delete('/:id', eliminarCarrito)

function eliminarCarrito(req,res){
    console.log('aqui se elimina el carrito por id')
}