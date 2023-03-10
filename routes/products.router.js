
// Generar un router especifico para los productos

const express = require('express')

const ProductsService = require('../sevices/product.service')

const router = express.Router();
const service = new ProductsService();

// Aqui no se deja el entpoint con productos sino solo los detalles, lo que iria despues del /

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products)
})

// En esta posicion si se esta tomando el endpoint especifico como se espera
router.get('/filter', (req, res) => {
  res.send("Yo soy un filter")
})

router.get('/:id',async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product)

  } catch (error) {
    next(error)
  }
})

// Filter se esta tomando como parametro, para solucionarlo simplemente se debe colocaar antes del endpoint dinamico

// app.get('/products/filter', (req, res) => {
//   res.send("Yo soy un filter")
// })



router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body)
  res.status(201).json(newProduct)
})

router.patch('/:id',async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product)
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

})

router.delete('/:id',async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id)
  res.json(rta)
})

// Se exporta como un modulo y tiene su propio routing

module.exports = router
