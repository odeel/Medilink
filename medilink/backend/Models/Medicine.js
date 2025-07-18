const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genericName: { type: String },
  brand: { type: String },
  description: { type: String },
  dosageForm: { type: String }, // e.g., "Tablet", "Syrup", "Capsule"
  strength: { type: String },   // e.g., "500mg", "10mg/5ml"
  manufacturer: { type: String },
  price: { type: Number, required: true },
  stockQuantity: { type: Number, default: 0 },
  requiresPrescription: { type: Boolean, default: false },
  usageInstructions: { type: String },
  sideEffects: [{ type: String }],
  warnings: [{ type: String }],
  imageUrls: [{ type: String }],
  pharmacyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pharmacy' }, // optional: link to a pharmacy
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Medicine', MedicineSchema);
