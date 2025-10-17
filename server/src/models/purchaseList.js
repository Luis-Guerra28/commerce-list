const mongoose = require('mongoose')

const purchaseListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  totalCost: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model('purchaseList', purchaseListSchema)