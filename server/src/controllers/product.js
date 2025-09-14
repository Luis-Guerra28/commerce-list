const Product = require('../models/product')

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json(product)
  } catch (error) {
    res.status(400).json({ msg: 'Datos no validos' })
  }
}

const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ msg: 'Error del servidor' })
  }
}



module.exports = {
  createProduct,
  getProducts
}
