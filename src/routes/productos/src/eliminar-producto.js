const express = require('express')
const router = express.Router()
const fs = require('fs')
const validaRol = require('../../../middlewares/validar_rol')

module.exports = router

router.delete('/:id', [validaRol], eliminarProducto)

async function eliminarProducto(req, res) {
    try {
        const { id } = req.params
        const contenido = JSON.parse(await fs.promises.readFile('productos.txt'))
        const toDelete = contenido.find((prod) => prod.id === id)
        if (toDelete) {
            contenido.splice(toDelete, 1)
            await fs.promises.writeFile('productos.txt', JSON.stringify(contenido, null, 2))
            return res.status(200).json({
                msg: 'El producto fue eliminado',
                products: contenido,
                code: 2
            })
        } else {
            return res.status(400).json({
                msg: 'El producto no existe o ya fue eliminado previamente',
                code: -1
            })
        }
    } catch (error) {
        return res.status(500).json({
            msg: 'Hubo un error, intente nuevamente.',
            code: -1
        })
    }
}