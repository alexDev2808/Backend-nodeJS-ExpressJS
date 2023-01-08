
// Generar un router especifico para los productos

const express = require('express')
const faker = require('faker')


const router = express.Router();

// Aqui no se deja el entpoint con productos sino solo los detalles, lo que iria despues del /

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })

  }
  res.json(products)
})

// En esta posicion si se esta tomando el endpoint especifico como se espera
router.get('/filter', (req, res) => {
  res.send("Yo soy un filter")
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
      id,
      name: 'Producto 2',
      price: 120
  })
})

// Filter se esta tomando como parametro, para solucionarlo simplemente se debe colocaar antes del endpoint dinamico

// app.get('/products/filter', (req, res) => {
//   res.send("Yo soy un filter")
// })



router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: "created",
    data: body
  })
})


// Se exporta como un modulo y tiene su propio routing

module.exports = router
