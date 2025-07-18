const mongoose = require('mongoose');

const PharmacySchema = new mongoose.Schema({
  name: { type: String, required: true },
  logoUrl: { type: String },
  description: { type: String },
  specialties: [{ type: String }],
  openingHours: {
    mon: String,
    tue: String,
    wed: String,
    thu: String,
    fri: String,
    sat: String,
    sun: String
  },
  address: { type: String },
  city: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
  website: { type: String },
  email: { type: String },
  phoneNumbers: [{ type: String }],
  emergencyServices: { type: Boolean, default: false },
  insuranceAccepted: [{ type: String }],
  onlineOrders: { type: Boolean, default: false },
  images: [{ type: String }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pharmacy', PharmacySchema);

