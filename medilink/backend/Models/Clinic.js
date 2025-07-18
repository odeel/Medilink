// models/Clinic.js
const mongoose = require('mongoose');
const Schema = mongoose

const clinicSchema = new Schema({
  beds: { type: Number, required: true },
  email: { type: String, required: true },
  clinicName: { type: String, required: true },
  clinicPic: { type: String },
  nurses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Nurse' }],
  doctors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }],
  description: { type: String },
  clinicSpecialty: [{ type: String }],
  openingHours: { type: Map, of: String }, // key-value pairs like { "Mon-Fri": "8:00-18:00" }
  address: { type: String },
  city: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
  website: { type: String },
  phoneNumbers: [{ type: String }],
  emergencyServices: { type: Boolean, default: false },
  insuranceAccepted: [{ type: String }],
  onlineAppointments: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
  images: [{ type: String }]
});

module.exports = mongoose.model('Clinic', clinicSchema);
