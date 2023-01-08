
//

const productsRouter = require('./products.router')
const categoriesRouter = require('./categories.router')
const usersRouter = require('./users.router.js')


function routerApi(app){
  app.use('/api/products', productsRouter);
  app.use('/api/users', usersRouter);
  app.use('/api/categories', categoriesRouter)
}

module.exports = routerApi
