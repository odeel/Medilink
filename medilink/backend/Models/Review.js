// models/Review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  uid: { type: String, required: true }, // user ID (can also be ObjectId if linking to a User model)
  rating: { type: Number, required: true, min: 0, max: 5 },
  reviewTargetId: { type: String, required: true }, // can be doctor, clinic, etc.
  title: { type: String },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { timestamps: true }); // automatically sets createdAt & updatedAt

module.exports = mongoose.model('Review', reviewSchema);
