const express = require('express')
const router = express.Router()
const validaRol = require('../../../middlewares/validar_rol')
const { check } = require('express-validator')
const { validarCampos } = require('../../../middlewares/valida_campos')
const uuid = require('uuid')
const fs = require('fs')

module.exports = router

router.post('/', [validaRol,
    check('nombre', 'El nombre del producto es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es necesaria').not().isEmpty(),
    check('codigo', 'El codigo del producto es necesario').not().isEmpty(),
    check('url', 'Es necesaria una imagen').not().isEmpty(),
    check('precio', 'El precio debe contener un valor numerico').isNumeric(),
    check('stock', 'Debe crear el producto con un stock inicial').isNumeric(),
    validarCampos
], agregarNuevoProducto)

async function agregarNuevoProducto(req, res) {
    try {

        const contenido = JSON.parse(await fs.promises.readFile('productos.txt'))
        const product = req.body
        product.timestamp = new Date(Date.now())
        product.id = uuid.v4()
        contenido.push(product)
        await fs.promises.writeFile('productos.txt', JSON.stringify(contenido, null, 2))

        res.status(200).json({
            msg: 'Producto creado exitosamente',
            product,
            code: 2
        })

    } catch (error) {
        res.status(500).json({
            msg: 'Hubo un error, intente nuevamente.',
            code: -1
        })
    }
}