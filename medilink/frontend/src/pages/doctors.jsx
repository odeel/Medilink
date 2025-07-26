// src/pages/Doctors.jsx
import React, { useState } from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { DataTable } from '../components/Common/DataTable';
import { Modal } from '../components/Common/Modal';
import { Phone, Mail, MapPin, Stethoscope, GraduationCap } from 'lucide-react';
import '../styles/Doctors.css';

export const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showModal, setShowModal]       = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const doctors = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@clinic.com',
      phone: '+1 (555) 123-4567',
      specialty: 'Cardiology',
      clinic: 'Central Medical Center',
      licenseNumber: 'MD123456',
      experience: 15,
      joinDate: '2020-01-15',
      qualifications: ['MD', 'FACC', 'Board Certified'],
      consultationFee: 250,
      address: '123 Medical Plaza, City, State 12345',
      status: 'Active',
      availability: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      email: 'michael.chen@clinic.com',
      phone: '+1 (555) 234-5678',
      specialty: 'Neurology',
      clinic: 'HealthFirst Clinic',
      licenseNumber: 'MD234567',
      experience: 12,
      joinDate: '2021-03-20',
      qualifications: ['MD', 'PhD', 'Board Certified'],
      consultationFee: 300,
      address: '456 Health Ave, City, State 12345',
      status: 'Active',
      availability: ['Monday', 'Wednesday', 'Thursday', 'Friday'],
    },
    {
      id: '3',
      name: 'Dr. Emily Rodriguez',
      email: 'emily.rodriguez@clinic.com',
      phone: '+1 (555) 345-6789',
      specialty: 'Pediatrics',
      clinic: 'City General Hospital',
      licenseNumber: 'MD345678',
      experience: 8,
      joinDate: '2022-06-10',
      qualifications: ['MD', 'FAAP', 'Board Certified'],
      consultationFee: 200,
      address: '789 Children Blvd, City, State 12345',
      status: 'On Leave',
      availability: ['Tuesday', 'Wednesday', 'Thursday', 'Saturday'],
    },
  ];

  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'specialty', label: 'Specialty', sortable: true },
    { key: 'clinic', label: 'Clinic', sortable: true },
    { key: 'licenseNumber', label: 'License', sortable: true },
    { key: 'experience', label: 'Experience (Years)', sortable: true },
    {
      key: 'consultationFee',
      label: 'Fee',
      sortable: true,
      render: v => `$${v}`
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: v => (
        <span className={`status-badge status-${v.replace(' ', '').toLowerCase()}`}>
          {v}
        </span>
      )
    },
  ];

  const handleView   = d => { setSelectedDoctor(d); setShowModal(true); };
  const handleEdit   = d => console.log('Edit doctor:', d);
  const handleDelete = d => console.log('Delete doctor:', d);
  const handleAdd    = () => setShowAddModal(true);

  const totalDoctors     = doctors.length;
  const activeDoctors    = doctors.filter(d => d.status === 'Active').length;
  const avgExperience    = Math.round(doctors.reduce((s,d)=>s+d.experience,0)/totalDoctors);
  const avgConsultation  = Math.round(doctors.reduce((s,d)=>s+d.consultationFee,0)/totalDoctors);

  return (
    <div className="doctors-page">
      <PageHeader 
        title="Doctors Management" 
        description="Manage doctor profiles and track their information"
        action={{ label: 'Add New Doctor', onClick: handleAdd }}
      />

      <div className="stats-grid">
        <div className="stat-card">
          <p>Total Doctors</p>
          <h2>{totalDoctors}</h2>
          <Stethoscope size={24} />
        </div>
        <div className="stat-card">
          <p>Active Doctors</p>
          <h2>{activeDoctors}</h2>
          <Stethoscope size={24} className="green-icon" />
        </div>
        <div className="stat-card">
          <p>Avg Experience</p>
          <h2>{avgExperience} yrs</h2>
          <GraduationCap size={24} className="purple-icon" />
        </div>
        <div className="stat-card">
          <p>Avg Consultation</p>
          <h2>${avgConsultation}</h2>
          <MapPin size={24} className="orange-icon" />
        </div>
      </div>

      <DataTable
        data={doctors}
        columns={columns}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        searchPlaceholder="Search doctors..."
      />

      {selectedDoctor && (
        <Modal
          isOpen={showModal}
          onClose={()=>setShowModal(false)}
          title={`Doctor Profile — ${selectedDoctor.name}`}
          size="lg"
        >
          <div className="details">
            <div className="details-grid">
              <div>
                <h4>Contact</h4>
                <ul className="info-list">
                  <li><Mail size={16}/> {selectedDoctor.email}</li>
                  <li><Phone size={16}/> {selectedDoctor.phone}</li>
                  <li><MapPin size={16}/> {selectedDoctor.address}</li>
                </ul>
              </div>
              <div>
                <h4>Professional</h4>
                <ul className="info-list">
                  <li><strong>Specialty:</strong> {selectedDoctor.specialty}</li>
                  <li><strong>Clinic:</strong> {selectedDoctor.clinic}</li>
                  <li><strong>License:</strong> {selectedDoctor.licenseNumber}</li>
                  <li><strong>Experience:</strong> {selectedDoctor.experience} yrs</li>
                  <li><strong>Joined:</strong> {selectedDoctor.joinDate}</li>
                  <li><strong>Fee:</strong> ${selectedDoctor.consultationFee}</li>
                  <li>
                    <strong>Status:</strong>{' '}
                    <span className={`status-badge status-${selectedDoctor.status.replace(' ', '').toLowerCase()}`}>
                      {selectedDoctor.status}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h4>Qualifications</h4>
              <div className="services-list">
                {selectedDoctor.qualifications.map(q => (
                  <span key={q} className="service-badge">{q}</span>
                ))}
              </div>
            </div>

            <div>
              <h4>Availability</h4>
              <div className="services-list">
                {selectedDoctor.availability.map(day => (
                  <span key={day} className="service-badge badge-online">{day}</span>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}

      <Modal
        isOpen={showAddModal}
        onClose={()=>setShowAddModal(false)}
        title="Add New Doctor"
        size="lg"
      >
        <form className="add-form">
          {/* fields omitted for brevity; use same layout as Coupons.jsx */}
        </form>
      </Modal>
    </div>
  );
};
