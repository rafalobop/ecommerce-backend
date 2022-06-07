const express = require('express')
const router = express.Router()

module.exports = router

router.post('/', agregarNuevoProducto)

function agregarNuevoProducto(req,res){
    console.log('aqui se crea un nuevo producto')
}