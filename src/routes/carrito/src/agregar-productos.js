const express = require('express')
const router = express.Router()

module.exports = router

router.post('/:id/productos', agregarProductosAlCarrito)

function agregarProductosAlCarrito(req,res){
    console.log('aqui se agregan productos al carrito')
}