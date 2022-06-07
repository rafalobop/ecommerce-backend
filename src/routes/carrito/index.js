const nameModule = 'carrito';

module.exports = (define) => {
  define(nameModule + '/crearCarrito', require('./src/crear-carrito'));
  define(nameModule + '/eliminarCarrito', require('./src/eliminar-carrito'));
  define(nameModule + '/listarUnCarrito', require('./src/listar-un-carrito'));
  define(nameModule + '/agregarProductos', require('./src/agregar-productos'));
  define(nameModule + '/eliminarUnProducto', require('./src/eliminar-un-producto'));
}
