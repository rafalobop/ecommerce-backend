const express = require('express')
const router = express.Router()

module.exports = router

router.put('/:id', actualizarProducto)

function actualizarProducto(req,res){
    console.log('aqui se actualiza un producto ')
}