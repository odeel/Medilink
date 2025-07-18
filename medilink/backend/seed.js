// seed.js
require('dotenv').config();
const mongoose = require('mongoose');

// Import your models
const Service  = require('./models/Service');
const Medicine = require('./models/Medicine');
const Nurse    = require('./models/Nurse');
const Doctor   = require('./models/Doctor');
const Pharmacy = require('./models/Pharmacy');
const Product  = require('./models/Product');
const Review   = require('./models/Review');

async function seed() {
  // 1) Connect
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:    true,
    useUnifiedTopology: true,
  });
  console.log('✅ Connected to MongoDB');

  // 2) Clear old data
  await Promise.all([
    Service.deleteMany(),
    Medicine.deleteMany(),
    Nurse.deleteMany(),
    Doctor.deleteMany(),
    Pharmacy.deleteMany(),
    Product.deleteMany(),
    Review.deleteMany(),
  ]);
  console.log('🗑️  Cleared old data');

  // 3) Insert Reviews
  const reviews = await Review.insertMany([
    { uid: 'u1', rating: 4.8, reviewTargetType: 'product', reviewTargetId: 'prod1', title: 'Excellent', comment: 'Works great!' },
    { uid: 'u2', rating: 4.2, reviewTargetType: 'product', reviewTargetId: 'prod2', title: 'Good',      comment: 'Very useful.' },
    { uid: 'u3', rating: 4.5, reviewTargetType: 'nurse',   reviewTargetId: 'nurse1', title: 'Caring',   comment: 'Very attentive.' },
    { uid: 'u4', rating: 4.7, reviewTargetType: 'doctor',  reviewTargetId: 'doctor1', title: 'Professional', comment: 'Highly skilled.' },
    { uid: 'u5', rating: 4.9, reviewTargetType: 'pharmacy',reviewTargetId: 'pharmacy1', title: 'Fast Delivery', comment: 'Came next day!' },
    { uid: 'u6', rating: 3.8, reviewTargetType: 'service', reviewTargetId: 'service1', title: 'Good Service', comment: 'Helped a lot.' },
    { uid: 'u7', rating: 4.3, reviewTargetType: 'medicine',reviewTargetId: 'med1', title: 'Effective', comment: 'Worked well.' },
    { uid: 'u8', rating: 4.0, reviewTargetType: 'clinic', reviewTargetId: 'clinic1', title: 'Clean', comment: 'Very hygienic.' },
  ]);
  console.log('⭐ Created reviews');

  // 4) Insert Pharmacies
  const pharmacies = await Pharmacy.insertMany([
    { name: 'Healthy Life Pharmacy',   address: '123 Health St',    contact: '+1234567890', isOpen: true },
    { name: 'QuickMed Supplies',       address: '45 Speed Ave',    contact: '+1987654321', isOpen: true },
    { name: 'OrthoPlus Center',        address: '88 Ortho Road',   contact: '+1122334455', isOpen: false },
  ]);
  console.log('🏪 Created pharmacies');

  // 5) Insert Products
  const products = await Product.insertMany([
    {
      id: 'prod1',
      name: 'Posture Corrector Brace',
      imageUrl: 'assets/images/medicines/Posture Corrector Brace.jpg',
      price: 27.00,
      description: 'Adjustable posture brace to align shoulders and spine.',
      stock: 110,
      manufacturer: pharmacies[0]._id,
      category: 'Braces',
      size: 'Adjustable',
      material: 'Polyester',
      reductionPercentage: 10,
      isAvailable: true,
      addedDate: new Date(Date.now() - 14*24*60*60*1000),
      ratings: [reviews[0]._id],
    },
    {
      id: 'prod2',
      name: 'Compression Leg Stockings',
      imageUrl: 'assets/images/medicines/compression Leg Stockings.jpg',
      price: 34.50,
      description: 'Knee-high graduated compression stockings for circulation.',
      stock: 95,
      manufacturer: pharmacies[1]._id,
      category: 'Stockings',
      size: 'L',
      material: 'Spandex Blend',
      reductionPercentage: 5,
      isAvailable: true,
      addedDate: new Date(Date.now() - 30*24*60*60*1000),
      ratings: [reviews[1]._id],
    },
  ]);
  console.log('📦 Created products');

  // 6) Insert Nurses
  const nurses = await Nurse.insertMany([
    { name: 'Layla Haddad',     experience: 5, rating: 4.8, location: 'Algiers',   image: '', isAvailable: true, reviews: [reviews[2]._id] },
    { name: 'Nour El Houda',    experience: 3, rating: 4.5, location: 'Oran',      image: '', isAvailable: true, reviews: [] },
    // ... add up to 8
  ]);
  console.log('🚑 Created nurses');

  // 7) Insert Doctors
  const doctors = await Doctor.insertMany([
    { name: 'Dr. Samir Bensaid', specialty: 'Cardiology', rating: 4.8, location: 'Algiers', isAvailable: true, image: '', reviews: [reviews[3]._id] },
    { name: 'Dr. Yasmine Cherif',specialty: 'Pediatrics', rating: 4.7, location: 'Oran',    isAvailable: true, image: '', reviews: [] },
    // ... add up to 4
  ]);
  console.log('👨‍⚕️  Created doctors');

  // 8) Insert Services
  const services = await Service.insertMany([
    {
      name: 'Pediatric Care',
      description: 'Specialized care for infants, children, and adolescents.',
      range: '1 hour',
      price: 90,
      isAvailable: true,
      images: [''],
    },
    {
      name: 'Physiotherapy Session',
      description: 'Rehabilitation exercises for injury recovery.',
      range: '1 hour',
      price: 70,
      isAvailable: true,
      images: [''],
    },
    // ... add up to 6
  ]);
  console.log('💉 Created services');

  // 9) Insert Medicines
  const medicines = await Medicine.insertMany([
    { name: 'Paracetamol',     description: 'Pain reliever & fever reducer',  price: 5.99, stock: 200, image: '' },
    { name: 'Amoxicillin',     description: 'Antibiotic for infections',       price: 12.50,stock: 150, image: '' },
    // ... add up to 7
  ]);
  console.log('💊 Created medicines');

  console.log('🎉 All seed data inserted!');
  await mongoose.disconnect();
}

seed().catch(err => {
  console.error('❌ Seeding error:', err);
  process.exit(1);
});
