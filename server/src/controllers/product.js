const Product = require('../models/product')

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json(product)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ msg: 'producto no encontrado' })
    }

    const body = req.body

    product.name = body.name || product.name
    product.cost = body.cost || product.cost
    product.units = body.units || product.units
    product.supplier = body.supplier || product.supplier
    product.category = body.category || product.category
    product.status = body.status || product.status
    product.descrption = body.descriptio || product.descrption

    await product.save()

    res.status(200).json(product)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)
    if (!product) {
      return res.status(404).send({ msg: 'producto no encontrado' })
    }

    res.status(204).send({ msg: 'se ha borrado el producto correctamente' })
  } catch (error) {
    res.status(500).send({ msg: 'error del servidor' })
  }
}

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
}
