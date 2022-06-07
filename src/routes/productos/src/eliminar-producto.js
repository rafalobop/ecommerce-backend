const express = require('express')
const router = express.Router()

module.exports = router

router.delete('/:id', eliminarProducto)

function eliminarProducto(req,res){
    console.log('aqui se elimina el producto por id')
}