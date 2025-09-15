const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  cost: {
    type: Number,
    required: true,
    min: 0,
  },
  units: {
    type: Number,
    required: true,
    min: 1,
  },
  unitCost: {
    type: Number,
    required: false,
  },
  supplier: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
  descrption: {
    type: String,
    required: false,
  },
  unitCost: Number
})

productSchema.pre('save', function (next) {
  this.unitCost = Number(this.cost) / Number(this.units)
  next()
})

module.exports = mongoose.model('Product', productSchema)