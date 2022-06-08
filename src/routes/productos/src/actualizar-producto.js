const express = require('express')
const router = express.Router()
const { validarCampos } = require('../../../middlewares/valida_campos')
const { check } = require('express-validator')
const fs = require('fs')
const validaRol = require('../../../middlewares/validar_rol')

module.exports = router

router.put('/:id', [validaRol,
    check('nombre', 'El nombre del producto es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es necesaria').not().isEmpty(),
    check('codigo', 'El codigo del producto es necesario').not().isEmpty(),
    check('url', 'Es necesaria una imagen').not().isEmpty(),
    check('precio', 'El precio debe contener un valor numerico').isNumeric(),
    check('stock', 'Debe crear el producto con un stock inicial').isNumeric(),
    validarCampos
], actualizarProducto)

async function actualizarProducto(req, res) {
    try {
        const { id } = req.params
        const updateProduct = req.body
        const contenido = JSON.parse(await fs.promises.readFile('productos.txt'))
        let toUpdate = contenido.find((prod) => prod.id === id)
        if (toUpdate) {
            toUpdate = { ...updateProduct, id: toUpdate.id, timestamp: toUpdate.timestamp }
            const products = contenido.filter((x) => x.id !== id)
            products.push(toUpdate)

            await fs.promises.writeFile('productos.txt', JSON.stringify(products, null, 2))
            return res.status(200).json({
                msg: 'El producto fue actualizado',
                products: toUpdate,
                code: 2
            })
        } else {
            return res.status(400).json({
                msg: 'El producto no existe',
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