const express = require('express')
const api = express.Router()
const { getProducts, createProduct } = require('../controllers/product')


api.get('/products', getProducts)
api.post('/products', createProduct)






module.exports = api