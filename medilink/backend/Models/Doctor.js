// models/Doctor.js
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  doctorPic: { type: String },
  age: { type: Number },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  bio: { type: String },
  consultationFee: { type: Number },
  adminFee: { type: Number },
  medicalSpecialty: [{ type: String }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Doctor', doctorSchema);
