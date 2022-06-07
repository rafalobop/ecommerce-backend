const express = require('express')
const router = express.Router()

module.exports = router

router.delete('/:id/productos/:id_prod', eliminarUnProductoDelCarrito)

function eliminarUnProductoDelCarrito(req,res){
    console.log('aqui se elimina un producto especifico del carrito id X')
}