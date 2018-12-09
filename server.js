
/*
  server.js , nos ayuda a crear un servidor de next utilizando node.js
*/

// llamamos a la libreria de next
const next = require('next')

// llamamos el archivo routes.js, que nos exporta, todas las urls definidas
const routes = require('./routes')

// definimos la variable app la cual será la encargada de crear el server http
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)

// definimos el puerto
const port = process.env.PORT || 3002

// creamos el servidor y lo corremos
const {createServer} = require('http')
app.prepare().then(() => {
  createServer(handler).listen(port)
})