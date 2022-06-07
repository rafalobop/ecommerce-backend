const nameModule = 'productos';

module.exports = (define) => {
  define(nameModule + '/crearProducto', require('./src/crear-producto'));
  define(nameModule + '/eliminarProducto', require('./src/eliminar-producto'));
  define(nameModule + '/listarProductos', require('./src/listar-productos'));
  define(nameModule + '/actualizarProducto', require('./src/actualizar-producto'));
}
