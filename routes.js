// definomos la constante routes la cual esuna instancia de la libreria next-routes
const routes = module.exports = require('next-routes')()

// definicion de urls
routes
.add('home', '/', 'index')
.add('channel', '/:slug.:id', 'channel')
.add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast')