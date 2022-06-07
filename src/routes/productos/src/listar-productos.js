const express = require('express')
const router = express.Router()

module.exports = router

router.get('/:id', listarProductos)

function listarProductos(req,res){
    console.log('aqui se listan los productos disponibles')
}