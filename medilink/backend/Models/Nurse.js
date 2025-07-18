const mongoose = require('mongoose');

const NurseSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  nursingSpecialties: [{ type: String }],
  nursePic: { type: String }, // You might store this as a URL or local asset path
  age: { type: Number },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  bio: { type: String },
  yearsOfExperience: { type: Number },
  certifications: [{ type: String }],
  languagesSpoken: [{ type: String }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Nurse', NurseSchema);
