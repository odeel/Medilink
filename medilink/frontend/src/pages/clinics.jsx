// src/pages/Clinics.jsx
import React, { useState } from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { DataTable } from '../components/Common/DataTable';
import { Modal } from '../components/Common/Modal';
import { MapPin, Phone, Mail, CheckCircle, Clock } from 'lucide-react';
import '../styles/Clinics.css';
export const Clinics = () => {
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [showModal, setShowModal]       = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const clinics = [
    { id:'1', name:'Central Medical Center',     location:'Downtown District', contact:'+1 (555) 123‑4567', email:'info@centralmedical.com', status:'Active',   registrationDate:'2023‑01‑15', specialties:['Cardiology','Neurology','Pediatrics'], doctors:12, nurses:18 },
    { id:'2', name:'HealthFirst Clinic',         location:'Suburban Area',     contact:'+1 (555) 234‑5678', email:'contact@healthfirst.com', status:'Pending', registrationDate:'2023‑12‑01', specialties:['General Medicine','Dermatology'], doctors:8,  nurses:12 },
    { id:'3', name:'City General Hospital',      location:'Medical District',  contact:'+1 (555) 345‑6789', email:'admin@citygeneral.com', status:'Active',   registrationDate:'2022‑08‑20', specialties:['Emergency','Surgery','ICU','Maternity'], doctors:25,nurses:45 },
  ];

  const columns = [
    { key:'name', label:'Clinic Name', sortable:true },
    { key:'location', label:'Location', sortable:true },
    { key:'contact', label:'Contact', sortable:false },
    {
      key:'status', label:'Status', sortable:true,
      render: (value) => (
        <span className={`status-badge status-${value.toLowerCase()}`}>
          {value}
        </span>
      )
    },
    { key:'doctors', label:'Doctors', sortable:true },
    { key:'nurses', label:'Nurses', sortable:true },
  ];

  const handleView    = (c) => { setSelectedClinic(c); setShowModal(true); };
  const handleEdit    = (c) => console.log('Edit', c);
  const handleDelete  = (c) => console.log('Delete', c);
  const handleApprove = (c) => console.log('Approve', c);
  const handleReject  = (c) => console.log('Reject', c);
  const handleAdd     = ()  => setShowAddModal(true);

  return (
    <div className="clinics-page">
      <PageHeader
        title="Clinics Management"
        description="Manage clinic registrations and monitor clinic network"
        action={{ label:'Add New Clinic', onClick: handleAdd }}
      />

      <section className="pending-section">
        <h3>Pending Clinic Applications</h3>
        <div className="pending-list">
          {clinics.filter(c => c.status === 'Pending').map(c => (
            <div key={c.id} className="pending-item">
              <div className="pending-info">
                <div className="pending-icon"><Clock size={20}/></div>
                <div>
                  <h4>{c.name}</h4>
                  <p>{c.location}</p>
                </div>
              </div>
              <div className="pending-actions">
                <button className="link-btn" onClick={() => handleView(c)}>View Details</button>
                <button className="btn-approve" onClick={() => handleApprove(c)}>Approve</button>
                <button className="btn-reject"  onClick={() => handleReject(c)}>Reject</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="table-section">
        <DataTable
          data={clinics}
          columns={columns}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
          searchPlaceholder="Search clinics..."
        />
      </section>

      {selectedClinic && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title={`Clinic Details - ${selectedClinic.name}`}
          size="lg"
        >
          <div className="modal-details">
            <div className="details-grid">
              <div>
                <h4>Basic Information</h4>
                <div className="info-list">
                  <div><MapPin size={16}/> <span>{selectedClinic.location}</span></div>
                  <div><Phone   size={16}/> <span>{selectedClinic.contact}</span></div>
                  <div><Mail    size={16}/> <span>{selectedClinic.email}</span></div>
                </div>
              </div>
              <div>
                <h4>Statistics</h4>
                <div className="stats-list">
                  <div><span>Doctors:</span> <strong>{selectedClinic.doctors}</strong></div>
                  <div><span>Nurses:</span>  <strong>{selectedClinic.nurses}</strong></div>
                  <div><span>Registered:</span> <strong>{selectedClinic.registrationDate}</strong></div>
                </div>
              </div>
            </div>
            <div>
              <h4>Specialties</h4>
              <div className="specialty-list">
                {selectedClinic.specialties.map(s => (
                  <span key={s} className="specialty-badge">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}

      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Clinic"
        size="lg"
      >
        <form className="add-form">
          <div className="form-grid">
            <div><label>Clinic Name</label><input type="text" placeholder="Enter clinic name"/></div>
            <div><label>Location</label><input type="text" placeholder="Enter location"/></div>
            <div><label>Contact Number</label><input type="tel" placeholder="Enter contact number"/></div>
            <div><label>Email</label><input type="email" placeholder="Enter email address"/></div>
          </div>
          <div className="form-full"><label>Description</label><textarea rows="3" placeholder="Enter clinic description"/></div>
          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={() => setShowAddModal(false)}>Cancel</button>
            <button type="submit" className="btn-primary">Add Clinic</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
