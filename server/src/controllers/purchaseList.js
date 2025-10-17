const PurchaseList = require('../models/purchaseList')

const createPurchaseList = async (req, res) => {
  try {
    const purchaseList = await PurchaseList.create(req.body)

    res.status(201).json({ purchaseList })
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const getPurchaseLists = async (req, res) => {
  try {
    const purchaseLists = await PurchaseList.find()
    res.status(200).json(purchaseLists)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

const updatePurchaseList = async (req, res) => {
  try {
    const purchaseList = await PurchaseList.findById(req.params.id)
    if (!purchaseList) {
      return res.status(404).json({ msg: 'lista de compras no encontrada' })
    }

    const body = req.body

    purchaseList.name = body.name ?? purchaseList.name
    purchaseList.createdAt = body.createdAt ?? purchaseList.createdAt
    purchaseList.status = body.status ?? purchaseList.status
    purchaseList.totalCost = body.totalCost ?? purchaseList.totalCost

    await purchaseList.save()
    res.status(200).send(purchaseList)
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const deletePurchaseList = async (req, res) => {
  try {
    const purchaseList = await PurchaseList.findByIdAndDelete(req.params.id)
    if (!purchaseList) {
      console.log('No Deleteando')
      return res.status(404).send({ msg: 'Lista de compras no encontrada' })
    }
    res.status(204).json({ msg: 'se ha borrado la lista correctamente' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

module.exports = {
  createPurchaseList,
  getPurchaseLists,
  updatePurchaseList,
  deletePurchaseList,
}