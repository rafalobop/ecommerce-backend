const express = require('express')
const router = express.Router()
const fs = require('fs')

module.exports = router

router.get('/:id/productos', listarProductosDeUnCarrito)

async function listarProductosDeUnCarrito(req, res) {
    try {
        const { id } = req.params
        const contenido = JSON.parse(await fs.promises.readFile('carrito.txt'))
        const toList = contenido.find((prod) => prod.id === id)
        if (toList) {
            if (!toList.productos.length) {
                return res.status(400).json({
                    msg: 'El carrito no tiene productos para listar',
                    code: -1
                })
            }
            return res.status(200).json({
                msg: `Productos del carrito ${id}:`,
                products: toList.productos,
                code: 2
            })
        }else{
            return res.status(404).json({
                msg: `El carrito id ${id} no existe, intenta con otro.`,
                code: -1
            })
        }
    } catch (error) {
        return res.status(500).json({
            msg: 'Hubo un error al hacer la consulta, intente nuevamente.',
            code: -1
        })
    }
}