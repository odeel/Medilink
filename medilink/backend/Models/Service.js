const mongoose = require ('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  range: { type: String }, // e.g., "1 hour", "30 minutes"
  price: { type: Number, required: true },
  isAvailable: { type: Boolean, default: true },
  images: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Service = mongoose.model('Service', ServiceSchema);
module.exports = Service ;
