const express = require('express')
const router = express.Router()
const validaRol = require('../../../middlewares/validar_rol')

module.exports = router

router.post('/:id/productos', [validaRol], agregarProductosAlCarrito)

function agregarProductosAlCarrito(req,res){
    console.log('aqui se agregan productos al carrito')
}