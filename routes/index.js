
const express = require('express')

const productsRouter = require('./products.router')
const categoriesRouter = require('./categories.router')
const usersRouter = require('./users.router.js')


function routerApi(app){
  const router = express.Router()
  // Path global
  app.use('/api/v1', router)
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter)
}

module.exports = routerApi
