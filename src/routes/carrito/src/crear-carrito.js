const { randomUUID } = require('crypto')
const express = require('express')
const router = express.Router()
const fs = require('fs')
const uuid = require('uuid')

router.post('/', crearNuevoCarrito)

async function crearNuevoCarrito(req, res) {
    try {
        const contenido = JSON.parse(await fs.promises.readFile('carrito.txt'))
        console.log('contenido', contenido)
        const carrito = {
            id: uuid.v4(),
            timestamp: new Date(Date.now()),
            productos: []
        }
        contenido.push(carrito)
        await fs.promises.writeFile('carrito.txt', JSON.stringify(contenido, null, 2))
        res.status(200).json({
            msg:'Carrito creado exitosamente',
            carrito,
            code:2
        })
    } catch (error) {
        console.log('error', error)
        res.status(500).json({
            msg:'Hubo un error en el servidor, intente nuevamente.',
            code:-1
        })
    }
}

module.exports = router
