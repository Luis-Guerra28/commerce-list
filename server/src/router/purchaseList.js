const express = require('express')
const api = express.Router()
const {
  createPurchaseList,
  getPurchaseLists,
  updatePurchaseList,
  deletePurchaseList,
} = require('../controllers/purchaseList')

api.post('/purchaseList', createPurchaseList)
api.get('/purchaseList', getPurchaseLists)
api.put('/purchaseList/:id', updatePurchaseList)
api.delete('/purchaseList/:id', deletePurchaseList)

module.exports = api