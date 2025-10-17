const mongoose = require("mongoose")

const purchaseListItemSchema = {
  listId: mongoose.Types.ObjectId,
  productId: mongoose.Types.ObjectId,
  name: {
    type: String,
    require: true
  },
  unit_cost: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  totalItemCost: {
    type: Number,
    required: true,
  },
  description: String,
}

module.exports = mongoose.model('purchaseListItem', purchaseListItemSchema)