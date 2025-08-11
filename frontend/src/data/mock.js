// src/data/mockMedicalData.js
// Mock data converted from Dart -> JavaScript
// All data is fictional and intended for UI/testing only.

/**
 * Reviews
 */
export const review1 = {
  id: "r1",
  uid: "u101",
  rating: 4.8,
  reviewTargetId: "pharmacy1",
  title: "Great Service",
  comment: "Staff was super helpful and the posture brace I got was top-notch.",
  createdAt: "2025-01-06T00:00:00.000Z",
  updatedAt: "2025-01-06T00:00:00.000Z",
};

export const review2 = {
  id: "r2",
  uid: "u102",
  rating: 4.5,
  reviewTargetId: "pharmacy1",
  title: "Reliable and fast",
  comment: "Delivery arrived the same day. Definitely coming back!",
  createdAt: "2025-01-12T00:00:00.000Z",
  updatedAt: "2025-01-12T00:00:00.000Z",
};

export const review3 = {
  id: "r3",
  uid: "u103",
  rating: 4.2,
  reviewTargetId: "pharmacy2",
  title: "Very efficient",
  comment: "They had the stockings in my size and were easy to order.",
  createdAt: "2024-12-27T00:00:00.000Z",
  updatedAt: "2024-12-27T00:00:00.000Z",
};

export const review4 = {
  id: "r4",
  uid: "u104",
  rating: 3.9,
  reviewTargetId: "pharmacy2",
  title: "Could be faster",
  comment: "Product quality was great, but delivery took 2 days.",
  createdAt: "2024-12-29T00:00:00.000Z",
  updatedAt: "2024-12-29T00:00:00.000Z",
};

export const review5 = {
  id: "r5",
  uid: "u105",
  rating: 4.6,
  reviewTargetId: "pharmacy3",
  title: "Neck support helped a lot",
  comment: "Cervical collar was soft and exactly what I needed for my injury.",
  createdAt: "2024-12-30T00:00:00.000Z",
  updatedAt: "2024-12-30T00:00:00.000Z",
};

export const review6 = {
  id: "r6",
  uid: "u106",
  rating: 4.1,
  reviewTargetId: "pharmacy3",
  title: "Professional staff",
  comment: "They explained how to use the product thoroughly. Loved that.",
  createdAt: "2025-01-02T00:00:00.000Z",
  updatedAt: "2025-01-02T00:00:00.000Z",
};

export const review7 = {
  id: "r7",
  uid: "u107",
  rating: 4.9,
  reviewTargetId: "pharmacy4",
  title: "Top-notch products",
  comment: "Posture corrector worked wonders. Highly recommend.",
  createdAt: "2024-12-31T00:00:00.000Z",
  updatedAt: "2024-12-31T00:00:00.000Z",
};

export const review8 = {
  id: "r8",
  uid: "u108",
  rating: 4.3,
  reviewTargetId: "pharmacy4",
  title: "Great experience",
  comment: "Easy to order, well-packaged, and quick customer service.",
  createdAt: "2025-01-04T00:00:00.000Z",
  updatedAt: "2025-01-04T00:00:00.000Z",
};

/* -----------------------------
   Pharmacies
--------------------------------*/
export const pharmacy1 = {
  id: "pharmacy1",
  name: "Healthy Life Pharmacy",
  logoUrl: "https://example.com/logos/healthy_life.png",
  description: "Trusted provider of ergonomic and orthopedic medical supplies.",
  specialties: ["Orthopedic Supplies", "Rehabilitation", "Compression Wear"],
  openingHours: {
    mon: "08:00-18:00",
    tue: "08:00-18:00",
    wed: "08:00-18:00",
    thu: "08:00-18:00",
    fri: "08:00-17:00",
  },
  address: "123 Health St",
  city: "Wellnessville",
  latitude: 37.7749,
  longitude: -122.4194,
  website: "https://healthy-life.com",
  email: "contact@healthy-life.com",
  phoneNumbers: ["+1234567890"],
  emergencyServices: false,
  insuranceAccepted: ["Medicare", "PrivateCare"],
  onlineOrders: true,
  createdAt: "2024-10-09T00:00:00.000Z",
  updatedAt: "2025-01-06T00:00:00.000Z",
  images: ["https://example.com/pharmacies/healthy_life_1.jpg"],
  reviews: [review1, review2],
};

export const pharmacy2 = {
  id: "pharmacy2",
  name: "QuickMed Supplies",
  logoUrl: "https://example.com/logos/quickmed.png",
  description: "Fast delivery of medical support gear and more.",
  specialties: ["Compression Gear", "Mobility Aids"],
  openingHours: {
    mon: "09:00-17:00",
    tue: "09:00-17:00",
    wed: "09:00-17:00",
    thu: "09:00-17:00",
    fri: "09:00-16:00",
  },
  address: "45 Speed Ave",
  city: "Medicton",
  latitude: 40.7128,
  longitude: -74.006,
  website: "https://quickmedsupplies.com",
  email: "support@quickmed.com",
  phoneNumbers: ["+1987654321"],
  emergencyServices: false,
  insuranceAccepted: ["QuickHealth"],
  onlineOrders: true,
  createdAt: "2024-09-01T00:00:00.000Z",
  updatedAt: "2025-01-12T00:00:00.000Z",
  images: ["https://example.com/pharmacies/quickmed_1.jpg"],
  reviews: [review3, review4],
};

export const pharmacy3 = {
  id: "pharmacy3",
  name: "OrthoPlus Center",
  logoUrl: "https://example.com/logos/orthoplus.png",
  description: "Specialists in orthopedic recovery products.",
  specialties: ["Braces", "Neck Supports", "Wrist Wraps"],
  openingHours: {
    mon: "10:00-18:00",
    tue: "10:00-18:00",
    wed: "10:00-18:00",
    thu: "10:00-18:00",
    fri: "10:00-18:00",
  },
  address: "88 Ortho Road",
  city: "Boneville",
  latitude: 34.0522,
  longitude: -118.2437,
  website: "https://orthoplus.com",
  email: "hello@orthoplus.com",
  phoneNumbers: ["+1122334455"],
  emergencyServices: true,
  insuranceAccepted: ["Medicare", "FlexiHealth"],
  onlineOrders: false,
  createdAt: "2024-11-01T00:00:00.000Z",
  updatedAt: "2025-01-02T00:00:00.000Z",
  images: ["https://example.com/pharmacies/orthoplus_1.jpg"],
  reviews: [review5, review6],
};

export const pharmacy4 = {
  id: "pharmacy4",
  name: "WellCare Pharmacy",
  logoUrl: "https://example.com/logos/wellcare.png",
  description: "Quality health care products and expert guidance.",
  specialties: ["Posture Gear", "Supports", "Belts"],
  openingHours: {
    mon: "07:00-15:00",
    tue: "07:00-15:00",
    wed: "07:00-15:00",
    thu: "07:00-15:00",
    fri: "07:00-15:00",
  },
  address: "321 Spine St",
  city: "Careton",
  latitude: 36.7783,
  longitude: -119.4179,
  website: "https://wellcarepharmacy.com",
  email: "info@wellcare.com",
  phoneNumbers: ["+1223344556"],
  emergencyServices: false,
  insuranceAccepted: ["LifeAssist"],
  onlineOrders: true,
  createdAt: "2024-06-05T00:00:00.000Z",
  updatedAt: "2025-01-04T00:00:00.000Z",
  images: ["https://example.com/pharmacies/wellcare_1.jpg"],
  reviews: [review7, review8],
};

/* -----------------------------
   Products
--------------------------------*/
export const product1 = {
  id: "prod1",
  name: "Posture Corrector Brace",
  imageUrl: "assets/images/medicines/Posture Corrector Brace.jpg",
  price: 27.0,
  description: "Adjustable posture brace to align shoulders and spine.",
  stock: 110,
  manufacturerId: "pharmacy1",
  category: "Braces",
  size: "Adjustable",
  material: "Polyester",
  reductionPercentage: 10,
  isAvailable: true,
  addedDate: "2025-01-01T00:00:00.000Z",
  ratings: [review1.id],
};

export const product2 = {
  id: "prod2",
  name: "Compression Leg Stockings",
  imageUrl: "assets/images/medicines/compression Leg Stockings.jpg",
  price: 34.5,
  description: "Knee-high graduated compression stockings for circulation.",
  stock: 95,
  manufacturerId: "pharmacy2",
  category: "Stockings",
  size: "L",
  material: "Spandex Blend",
  reductionPercentage: 5,
  isAvailable: true,
  addedDate: "2024-12-18T00:00:00.000Z",
  ratings: [review3.id],
};

export const product3 = {
  id: "prod3",
  name: "Cervical Neck Collar",
  imageUrl: "assets/images/medicines/Adjustable Back Support Belt.jpg",
  price: 24.75,
  description: "Soft foam collar for neck immobilization and relief.",
  stock: 80,
  manufacturerId: "pharmacy3",
  category: "Collars",
  size: "Universal",
  material: "Foam",
  reductionPercentage: 8,
  isAvailable: true,
  addedDate: "2025-01-05T00:00:00.000Z",
  ratings: [review5.id],
};

export const product4 = {
  id: "prod4",
  name: "Wrist Support Wrap",
  imageUrl: "assets/images/medicines/wrist_support_wrap.jpg",
  price: 14.49,
  description: "Adjustable wrist wrap offering compression and protection.",
  stock: 120,
  manufacturerId: "pharmacy3",
  category: "Supports",
  size: "One Size",
  material: "Elastic Fabric",
  reductionPercentage: 0,
  isAvailable: true,
  addedDate: "2025-01-10T00:00:00.000Z",
  ratings: [review6.id],
};

export const product5 = {
  id: "prod5",
  name: "Elastic Knee Brace",
  imageUrl: "assets/images/medicines/Elastic Knee Brace.jpg",
  price: 19.99,
  description: "Breathable knee sleeve with compression and joint stability.",
  stock: 200,
  manufacturerId: "pharmacy4",
  category: "Braces",
  size: "S-M",
  material: "Nylon",
  reductionPercentage: 15,
  isAvailable: true,
  addedDate: "2024-12-07T00:00:00.000Z",
  ratings: [review7.id],
};

export const product6 = {
  id: "prod6",
  name: "Adjustable Back Support Belt",
  imageUrl: "assets/images/medicines/Adjustable Back Support Belt.jpg",
  price: 29.99,
  description: "Ergonomic lumbar belt with adjustable straps.",
  stock: 150,
  manufacturerId: "pharmacy4",
  category: "Support Belts",
  size: "M-L",
  material: "Neoprene",
  reductionPercentage: 12,
  isAvailable: true,
  addedDate: "2024-12-12T00:00:00.000Z",
  ratings: [review8.id],
};

/* -----------------------------
   Services
--------------------------------*/
export const service1 = {
  id: "service1",
  name: "Pediatric Care",
  description: "Specialized care for infants, children, and adolescents.",
  duration: "1 hour",
  price: 90.0,
  isAvailable: true,
  images: ["https://example.com/images/pediatric_care.jpg"],
};

export const service2 = {
  id: "service2",
  name: "Physiotherapy Session",
  description: "Personalized therapy sessions to aid recovery from injuries.",
  duration: "1 hour",
  price: 70.0,
  isAvailable: true,
  images: ["https://example.com/images/physiotherapy.jpg"],
};

export const service3 = {
  id: "service3",
  name: "Nutrition Consultation",
  description: "Expert advice to improve your diet and overall well-being.",
  duration: "30 mins",
  price: 40.0,
  isAvailable: true,
  images: ["https://example.com/images/nutrition.jpg"],
};

export const service4 = {
  id: "service4",
  name: "Cardiology Checkup",
  description: "Thorough examination of your heart and cardiovascular system.",
  duration: "1 hour",
  price: 120.0,
  isAvailable: false,
  images: ["https://example.com/images/cardiology_checkup.jpg"],
};

export const service5 = {
  id: "service5",
  name: "Dental Cleaning",
  description: "Professional cleaning of your teeth to maintain oral hygiene.",
  duration: "45 mins",
  price: 80.0,
  isAvailable: true,
  images: [
    "https://example.com/images/dental_cleaning1.jpg",
    "https://example.com/images/dental_cleaning2.jpg",
  ],
};

export const service6 = {
  id: "service6",
  name: "General Consultation",
  description: "A comprehensive check-up for your general health needs.",
  duration: "30 mins",
  price: 50.0,
  isAvailable: true,
  images: [
    "https://example.com/images/general_consultation1.jpg",
    "https://example.com/images/general_consultation2.jpg",
  ],
};

/* -----------------------------
   Doctor reviews & doctors
--------------------------------*/
export const doctorReview1 = {
  id: "doctor_review_1",
  uid: "user5",
  rating: 4.8,
  reviewTargetId: "doctor_1",
  title: "Highly Recommend",
  comment: "Dr. John Smith is knowledgeable and caring.",
  createdAt: "2025-01-20T00:00:00.000Z",
  updatedAt: "2025-01-20T00:00:00.000Z",
};

export const doctor1 = {
  id: "doctor_1",
  fullName: "Dr. John Smith",
  consultationFee: 2500.0,
  adminFee: 1500.0,
  medicalSpecialty: ["Cardiology"],
  doctorPic: "assets/doctors/user1.webp",
  age: 50,
  address: "456 Elm St",
  city: "Metropolis",
  state: "NY",
  bio: "An experienced cardiologist with a passion for patient care.",
  createdAt: "2025-01-05T00:00:00.000Z",
  updatedAt: "2025-02-05T00:00:00.000Z",
  reviews: [doctorReview1],
};

export const doctor2 = {
  id: "doctor_2",
  fullName: "Dr. Emily Brown",
  consultationFee: 2500.0,
  adminFee: 1500.0,
  medicalSpecialty: ["Pediatrics"],
  doctorPic: "assets/doctors/user2.jpg",
  age: 38,
  address: "789 Pine St",
  city: "Metropolis",
  state: "NY",
  bio: "Dedicated to child healthcare and family wellness.",
  createdAt: "2025-01-06T00:00:00.000Z",
  updatedAt: "2025-02-06T00:00:00.000Z",
  reviews: [],
};

export const doctor3 = {
  id: "doctor_3",
  fullName: "Dr. Michael Lee",
  consultationFee: 2500.0,
  adminFee: 1500.0,
  medicalSpecialty: ["Orthopedics"],
  doctorPic: "assets/doctors/user3.jpg",
  age: 45,
  address: "321 Cedar Ave",
  city: "Smallville",
  state: "KS",
  bio: "Specialist in musculoskeletal injuries and joint replacement.",
  createdAt: "2025-01-07T00:00:00.000Z",
  updatedAt: "2025-02-07T00:00:00.000Z",
  reviews: [],
};

export const doctor4 = {
  id: "doctor_4",
  fullName: "Dr. Sarah Davis",
  consultationFee: 2500.0,
  adminFee: 1500.0,
  medicalSpecialty: ["Dermatology"],
  doctorPic: "assets/doctors/user4.jpg",
  age: 42,
  address: "654 Maple Rd",
  city: "Metropolis",
  state: "NY",
  bio: "Expert in skin conditions with a patient-first approach.",
  createdAt: "2025-01-08T00:00:00.000Z",
  updatedAt: "2025-02-08T00:00:00.000Z",
  reviews: [],
};

/* Added extra doctors referenced by clinics (doctor5..doctor8) */
export const doctor5 = {
  id: "doctor_5",
  fullName: "Dr. Robert Wilson",
  consultationFee: 2200.0,
  adminFee: 1200.0,
  medicalSpecialty: ["Neurology"],
  doctorPic: "assets/doctors/user5.jpg",
  age: 55,
  city: "Metropolis",
  bio: "Specialist in neurological disorders.",
  createdAt: "2025-01-09T00:00:00.000Z",
  updatedAt: "2025-02-09T00:00:00.000Z",
  reviews: [],
};
export const doctor6 = {
  id: "doctor_6",
  fullName: "Dr. Linda Taylor",
  consultationFee: 2400.0,
  adminFee: 1400.0,
  medicalSpecialty: ["Gynecology"],
  doctorPic: "assets/doctors/user6.jpg",
  age: 47,
  city: "Metropolis",
  bio: "Committed to women’s health and comprehensive gynecological care.",
  createdAt: "2025-01-10T00:00:00.000Z",
  updatedAt: "2025-02-10T00:00:00.000Z",
  reviews: [],
};
export const doctor7 = {
  id: "doctor_7",
  fullName: "Dr. James Anderson",
  consultationFee: 2300.0,
  adminFee: 1300.0,
  medicalSpecialty: ["General Surgery"],
  doctorPic: "assets/doctors/user7.jpg",
  age: 52,
  city: "Metropolis",
  bio: "Experienced in minimally invasive surgical techniques.",
  createdAt: "2025-01-11T00:00:00.000Z",
  updatedAt: "2025-02-11T00:00:00.000Z",
  reviews: [],
};
export const doctor8 = {
  id: "doctor_8",
  fullName: "Dr. Karen Martinez",
  consultationFee: 2100.0,
  adminFee: 1100.0,
  medicalSpecialty: ["Internal Medicine"],
  doctorPic: "assets/doctors/user8.jpg",
  age: 39,
  city: "Metropolis",
  bio: "Focused on preventive care and chronic disease management.",
  createdAt: "2025-01-12T00:00:00.000Z",
  updatedAt: "2025-02-12T00:00:00.000Z",
  reviews: [],
};

/* -----------------------------
   Nurses (reviews + nurses)
--------------------------------*/
export const nurseReview1 = {
  id: "nurse_review_1",
  uid: "user13",
  rating: 4.5,
  reviewTargetId: "nurse_1",
  title: "Very Caring",
  comment: "The nurse was attentive and caring.",
  createdAt: "2025-02-01T00:00:00.000Z",
  updatedAt: "2025-02-01T00:00:00.000Z",
};

export const nurse1 = {
  id: "nurse_1",
  fullName: "Nurse Anna Johnson",
  nursingSpecialties: ["Pediatrics", "Neonatal"],
  nursePic: "assets/doctors/user1.webp",
  age: 30,
  address: "111 First Ave",
  city: "Metropolis",
  yearsOfExperience: 8,
  certifications: ["BLS", "PALS"],
  languagesSpoken: ["English", "Spanish"],
  createdAt: "2025-02-01T00:00:00.000Z",
  updatedAt: "2025-02-01T00:00:00.000Z",
  reviews: [nurseReview1],
};

/* Added nurses 2..8 to satisfy clinic references */
export const nurse2 = {
  id: "nurse_2",
  fullName: "Nurse Brian Lee",
  nursingSpecialties: ["Emergency", "Trauma"],
  nursePic: "assets/doctors/user2.jpg",
  age: 35,
  city: "Metropolis",
  yearsOfExperience: 10,
  createdAt: "2025-02-02T00:00:00.000Z",
  updatedAt: "2025-02-02T00:00:00.000Z",
  reviews: [],
};
export const nurse3 = {
  id: "nurse_3",
  fullName: "Nurse Catherine Smith",
  nursingSpecialties: ["Oncology", "Palliative Care"],
  nursePic: "assets/doctors/user3.jpg",
  age: 40,
  city: "Smallville",
  yearsOfExperience: 12,
  createdAt: "2025-02-03T00:00:00.000Z",
  updatedAt: "2025-02-03T00:00:00.000Z",
  reviews: [],
};
export const nurse4 = {
  id: "nurse_4",
  fullName: "Nurse David Kim",
  nursingSpecialties: ["Critical Care", "ICU"],
  nursePic: "assets/doctors/user4.jpg",
  age: 38,
  city: "Metropolis",
  yearsOfExperience: 9,
  createdAt: "2025-02-04T00:00:00.000Z",
  updatedAt: "2025-02-04T00:00:00.000Z",
  reviews: [],
};
export const nurse5 = {
  id: "nurse_5",
  fullName: "Nurse Emily Garcia",
  nursingSpecialties: ["Medical-Surgical", "General Care"],
  nursePic: "assets/doctors/user5.jpg",
  age: 32,
  city: "Smallville",
  yearsOfExperience: 7,
  createdAt: "2025-02-05T00:00:00.000Z",
  updatedAt: "2025-02-05T00:00:00.000Z",
  reviews: [],
};
export const nurse6 = {
  id: "nurse_6",
  fullName: "Nurse Frank Martinez",
  nursingSpecialties: ["Surgical", "Post-Op"],
  nursePic: "assets/doctors/user6.jpg",
  age: 36,
  city: "Metropolis",
  yearsOfExperience: 11,
  createdAt: "2025-02-06T00:00:00.000Z",
  updatedAt: "2025-02-06T00:00:00.000Z",
  reviews: [],
};
export const nurse7 = {
  id: "nurse_7",
  fullName: "Nurse Grace Patel",
  nursingSpecialties: ["Community Health", "Public Health"],
  nursePic: "assets/doctors/user7.jpg",
  age: 29,
  city: "Metropolis",
  yearsOfExperience: 5,
  createdAt: "2025-02-07T00:00:00.000Z",
  updatedAt: "2025-02-07T00:00:00.000Z",
  reviews: [],
};
export const nurse8 = {
  id: "nurse_8",
  fullName: "Nurse Henry Wilson",
  nursingSpecialties: ["Geriatric", "Rehabilitation"],
  nursePic: "assets/doctors/user8.jpg",
  age: 42,
  city: "Smallville",
  yearsOfExperience: 14,
  createdAt: "2025-02-08T00:00:00.000Z",
  updatedAt: "2025-02-08T00:00:00.000Z",
  reviews: [],
};

/* -----------------------------
   Clinics & clinic reviews
--------------------------------*/
export const clinicReview1 = {
  id: "clinic_review_1",
  uid: "user1",
  rating: 4.5,
  reviewTargetId: "clinic_1",
  title: "Great Service",
  comment: "The clinic provided excellent care and a friendly atmosphere.",
  createdAt: "2025-01-15T00:00:00.000Z",
  updatedAt: "2025-01-15T00:00:00.000Z",
};

export const clinicReview2 = {
  id: "clinic_review_2",
  uid: "user2",
  rating: 4.0,
  reviewTargetId: "clinic_2",
  title: "Good Experience",
  comment: "Well organized and professional service.",
  createdAt: "2025-01-16T00:00:00.000Z",
  updatedAt: "2025-01-16T00:00:00.000Z",
};

export const clinicReview3 = {
  id: "clinic_review_3",
  uid: "user3",
  rating: 3.8,
  reviewTargetId: "clinic_3",
  title: "Average Visit",
  comment: "The service was decent, but room for improvement.",
  createdAt: "2025-01-17T00:00:00.000Z",
  updatedAt: "2025-01-17T00:00:00.000Z",
};

export const clinicReview4 = {
  id: "clinic_review_4",
  uid: "user4",
  rating: 5.0,
  reviewTargetId: "clinic_4",
  title: "Outstanding!",
  comment: "I highly recommend this clinic for its professional staff.",
  createdAt: "2025-01-18T00:00:00.000Z",
  updatedAt: "2025-01-18T00:00:00.000Z",
};

export const clinic1 = {
  id: "clinic_1",
  beds: 120,
  email: "DowntownHealthClinic@gmail.com",
  clinicName: "Downtown Health Clinic",
  clinicPic: "assets/clinics/clinic1.jpg",
  nurses: ["nurse_7", "nurse_8"],
  doctors: ["doctor_1", "doctor_2"],
  description: "Modern primary care with experienced physicians.",
  clinicSpecialty: ["Primary Care", "Family Medicine"],
  openingHours: { "Mon-Fri": "8:00-18:00", Sat: "9:00-14:00" },
  address: "123 Main St",
  city: "Metropolis",
  latitude: 40.7128,
  longitude: -74.006,
  website: "http://downtownclinic.com",
  phoneNumbers: ["+1234567890"],
  emergencyServices: true,
  insuranceAccepted: ["Insurance A", "Insurance B"],
  onlineAppointments: true,
  createdAt: "2025-01-01T00:00:00.000Z",
  updatedAt: "2025-02-01T00:00:00.000Z",
  reviews: [clinicReview1],
  services: ["service1", "service2", "service3", "service4", "service6"],
  images: [
    "assets/clinics/clinic4.jpg",
    "assets/clinics/clinic4.jpg",
    "assets/clinics/clinic3.jpg",
  ],
};

export const clinic2 = {
  id: "clinic_2",
  beds: 100,
  email: "UptownMedicalCenter@gmail.com",
  clinicName: "Uptown Medical Center",
  clinicPic: "assets/clinics/clinic2.jpg",
  doctors: ["doctor_3", "doctor_4"],
  nurses: ["nurse_5", "nurse_6"],
  description: "Comprehensive healthcare services in a comfortable setting.",
  clinicSpecialty: ["Pediatrics", "General Medicine"],
  openingHours: { "Mon-Fri": "9:00-17:00" },
  address: "456 Broad Ave",
  city: "Metropolis",
  latitude: 40.7138,
  longitude: -74.005,
  website: "http://uptownmedcenter.com",
  phoneNumbers: ["+1234567891"],
  emergencyServices: false,
  insuranceAccepted: ["Insurance C", "Insurance D"],
  onlineAppointments: true,
  createdAt: "2025-01-02T00:00:00.000Z",
  updatedAt: "2025-02-02T00:00:00.000Z",
  reviews: [clinicReview2],
  services: ["service1", "service2", "service3", "service4"],
  images: ["assets/clinics/clinic2.jpg", "assets/clinics/clinic3.jpg"],
};

export const clinic3 = {
  id: "clinic_3",
  beds: 80,
  email: "SuburbanFamilyClinic@gmail.com",
  clinicName: "Suburban Family Clinic",
  clinicPic: "assets/clinics/clinic3.jpg",
  doctors: ["doctor_5", "doctor_6"],
  nurses: ["nurse_3", "nurse_4"],
  description: "Quality family care for all ages.",
  clinicSpecialty: ["Family Medicine"],
  openingHours: { "Mon-Fri": "8:30-17:30", Sun: "10:00-14:00" },
  address: "789 Oak Dr",
  city: "Smallville",
  latitude: 41.0,
  longitude: -75.0,
  website: "http://suburbanclinic.com",
  phoneNumbers: ["+1234567892"],
  emergencyServices: false,
  insuranceAccepted: ["Insurance A", "Insurance E"],
  onlineAppointments: false,
  createdAt: "2025-01-03T00:00:00.000Z",
  updatedAt: "2025-02-03T00:00:00.000Z",
  reviews: [clinicReview3],
  services: ["service1", "service2", "service3", "service4", "service5", "service6"],
  images: ["assets/clinics/clinic3.jpg"],
};

export const clinic4 = {
  id: "clinic_4",
  beds: 75,
  clinicName: "City Center Clinic",
  clinicPic: "assets/clinics/clinic4.jpg",
  nurses: ["nurse_1", "nurse_2"],
  doctors: ["doctor_7", "doctor_8"],
  description: "Efficient and accessible care in the heart of the city.",
  clinicSpecialty: ["Emergency", "Walk-in"],
  openingHours: { "Mon-Sun": "24 hours" },
  address: "101 Center Plaza",
  city: "Metropolis",
  latitude: 40.71,
  longitude: -74.01,
  website: "http://citycenterclinic.com",
  phoneNumbers: ["+1234567893"],
  emergencyServices: true,
  insuranceAccepted: ["Insurance B", "Insurance F"],
  onlineAppointments: false,
  createdAt: "2025-01-04T00:00:00.000Z",
  updatedAt: "2025-02-04T00:00:00.000Z",
  reviews: [clinicReview4],
  email: "CityCenterClinic@gmail.com",
  services: ["service1", "service2", "service6"],
  images: ["assets/clinics/clinic4.jpg"],
};

/* -----------------------------
   Aggregated lists for easy import
--------------------------------*/
export const dummyPharmacies = [pharmacy1, pharmacy2, pharmacy3, pharmacy4];
export const dummyProducts = [product1, product2, product3, product4, product5, product6];
export const dummyServices = [service1, service2, service3, service4, service5, service6];
export const dummyDoctors = [doctor1, doctor2, doctor3, doctor4, doctor5, doctor6, doctor7, doctor8];
export const dummyNurses = [nurse1, nurse2, nurse3, nurse4, nurse5, nurse6, nurse7, nurse8];
export const dummyClinics = [clinic1, clinic2, clinic3, clinic4];
export const dummyReviews = [review1, review2, review3, review4, review5, review6, review7, review8];

/* -- Also provide convenient aliases used elsewhere (mockClinics/mockProducts etc.) */
export const mockClinics = dummyClinics;
export const mockProducts = dummyProducts;
export const mockServices = dummyServices;
export const mockDoctors = dummyDoctors;
export const mockNurses = dummyNurses;
export const mockPharmacies = dummyPharmacies;
export const mockReviews = dummyReviews;

/* Extra small convenience exports often used by pages */
export const mockSpecialties = [
  { id: "spec_1", name: "Pediatrics", description: "Children's health care" },
  { id: "spec_2", name: "Cardiology", description: "Heart specialists" },
  { id: "spec_3", name: "Orthopedics", description: "Bones & joints" },
];

export const mockCoupons = [
  { id: "c1", code: "WELCOME10", discountPercent: 10, expires: "2025-12-31" },
  { id: "c2", code: "HEALTH5", discountPercent: 5, expires: "2025-06-30" },
];

export const mockFaqs = [
  { id: "f1", question: "How to book an appointment?", answer: "Use the Appointment tab or call the clinic." },
  { id: "f2", question: "What are payment options?", answer: "We accept card, cash and selected insurances." },
];

/* Small team sample (kept from earlier example) */
export const mockDataTeam = [
  { id: 1, name: "Jon Snow", email: "jonsnow@gmail.com", age: 35, phone: "(665)121-5454", access: "admin" },
  { id: 2, name: "Cersei Lannister", email: "cerseilannister@gmail.com", age: 42, phone: "(421)314-2288", access: "manager" },
  { id: 3, name: "Jaime Lannister", email: "jaimelannister@gmail.com", age: 45, phone: "(422)982-6739", access: "user" },
];
