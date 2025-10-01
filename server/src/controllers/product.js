const csv = require('csvtojson')
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

const bulkLoadFromCsvString = async (req, res) => {
  const csvString = req.body

  if (!csvString || csvString === 0) {
    return res.status(400).send({ message: 'El cuerpo de la peticion está vacío.' })
  }

  try {
    const converter = csv({
      includeColumns: /^(name|cost|units|supplier|category|status|descrption])$/i
    })

    const productsArray = await converter.fromString(csvString)

    const cleanProductArray = productsArray.map(product => {
      const cleanCost = parseFloat(product.cost.replace('$', '').trim())
      const units = parseFloat(product.units)

      const rawUnitCost =
        (cleanCost > 0 && units > 0)
          ? (cleanCost / units)
          : 0

      return {
        ...product,
        cost: cleanCost,
        units: units,
        unitCost: parseFloat(rawUnitCost.toFixed(4))
      }
    })

    const result = await Product.insertMany(cleanProductArray)

    return res.status(200).send({
      message: `${result.length} productos insertados con éxito.`,
      count: result.length,
    })
  } catch (error) {
    return res.status(500).send({ message: `Error en la inserción masiva en DB.\n${error}` });
  }
}

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  bulkLoadFromCsvString,
}
