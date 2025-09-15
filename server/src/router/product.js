const express = require('express')
const api = express.Router()
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/product')


api.get('/products', getProducts)
api.post('/products', createProduct)
api.put('/products/:id', updateProduct)
api.delete('/products/:id', deleteProduct)


module.exports = api