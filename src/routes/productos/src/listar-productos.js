const express = require('express')
const router = express.Router()
const fs = require('fs')

module.exports = router

router.get('/', listarProductos)
router.get('/:id', listarPorId)

async function listarProductos(req, res) {
    try {

        const contenido = JSON.parse(await fs.promises.readFile('productos.txt'))

        if (contenido) {
            return res.status(200).json({
                msg: 'Productos encontrados',
                productos: contenido,
                code: 2
            })
        } else {
            return res.status(400).json({
                msg: 'No hay productos creados',
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

async function listarPorId(req, res) {
    try {
        const contenido = JSON.parse(await fs.promises.readFile('productos.txt'))

        const { id } = req.params
        const [filtrado] = contenido.filter((prod) => prod.id === id)
        if (filtrado) {
            return res.status(200).json({
                msg: 'Producto encontrado',
                producto: filtrado,
                code: 2
            })
        } else {
            return res.status(404).json({
                msg: 'Producto no encontrado',
                code: -1
            })
        }
    } catch (error) {
        return res.status(500).json({
            msg: 'Hubo un error, intente nuevamente',
            code: -1
        })
    }
}