const express = require('express')
const router = express.Router()
const fs = require('fs')

module.exports = router

router.post('/:id/productos/:id_prod', agregarProductosAlCarrito)

async function agregarProductosAlCarrito(req, res) {
    try {
        const { id, id_prod } = req.params
        const carritos = JSON.parse(await fs.promises.readFile('carrito.txt'))
        const productos = JSON.parse(await fs.promises.readFile('productos.txt'))
        const productoParaAgregar = productos.find((prod) => prod.id === id_prod)
        if(!productoParaAgregar){
            return res.status(404).json({
                msg:'Producto no encontrado',
                code: -1
            })
        }
        if (carritos.length) {
            const carrito = carritos.find((cart)=> cart.id === id)
            if(!carrito){
                return res.status(404).json({
                    msg:'Carrito no encontrado',
                    code: -1
                })
            }
            carrito.productos.push(productoParaAgregar)
            await fs.promises.writeFile('carrito.txt', JSON.stringify(carritos, null, 2))
            return res.status(200).json({
                msg:'Producto agregado al carrito',
                carrito,
                code:2
            }) 
        }else{
            return res.status(404).json({
                msg: 'No hay carritos creados aun, intente creando uno.',
                code: -1
            })
        } 
    } catch (error) {
        console.log('err', error)
        return res.status(500).json({
            msg: 'Hubo un error, intente nuevamente',
            code: -1
        })
    }
}