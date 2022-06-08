const express = require('express')
const router = express.Router()
const fs = require('fs')

module.exports = router

router.delete('/:id/productos/:id_prod', eliminarUnProductoDelCarrito)

async function eliminarUnProductoDelCarrito(req,res){
    try {
        const { id, id_prod } = req.params
        const carritos = JSON.parse(await fs.promises.readFile('carrito.txt'))
        const carrito = carritos.find((cart)=> cart.id === id)
        const productoAEliminar = carrito.productos.find((prod)=> prod.id === id_prod)
        if(!productoAEliminar){
            return res.status(404).json({
                msg:'No se encontró el producto.',
                code:-1
            })
        }
        carrito.productos.splice(productoAEliminar,1)
        console.log('carritos', carritos)
        await fs.promises.writeFile('carrito.txt', JSON.stringify(carritos, null, 2))
        return res.status(200).json({
            msg:'Producto eliminado correctamente.',
            product: productoAEliminar,
            code:2
        })
    } catch (error) {
        console.log('e', error)
        return res.status(500).json({
            msg:'Hubo un error, intente nuevamente.',
            code:-1
        })
    }
}