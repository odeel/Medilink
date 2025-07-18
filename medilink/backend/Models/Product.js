// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  imageUrl: { type: String },
  price: { type: Number, required: true },
  description: { type: String },
  stock: { type: Number },
  manufacturer: { type: mongoose.Schema.Types.ObjectId, ref: 'Pharmacy' }, // linked to Pharmacy
  category: { type: String },
  size: { type: String },
  material: { type: String },
  reductionPercentage: { type: Number },
  isAvailable: { type: Boolean, default: true },
  addedDate: { type: Date, default: Date.now },
  ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }] // linked to Review
});

module.exports = mongoose.model('Product', productSchema);
