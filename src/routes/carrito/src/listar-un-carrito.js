const express = require('express')
const router = express.Router()

module.exports = router

router.get('/:id/productos', listarProductosDeUnCarrito)

function listarProductosDeUnCarrito(req,res){
    console.log('aqui se listan los productos de carrito id X')
}