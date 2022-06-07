let app = null;
const carrito = require('./carrito')
const productos = require('./productos')

const defineRoute = (ruta, requests) => {
	const baseRequest = '/api/';
	const route = baseRequest + ruta;
	app.use(route, requests);
};

module.exports = aplication => {
	app = aplication;
    carrito(defineRoute)
    productos(defineRoute)
};
