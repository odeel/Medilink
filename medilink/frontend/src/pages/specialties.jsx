// src/pages/Specialties.jsx
import React, { useState } from 'react';
import { PageHeader }       from '../components/Common/PageHeader';
import { DataTable }        from '../components/Common/DataTable';
import { Modal }            from '../components/Common/Modal';
import { Users, Stethoscope } from 'lucide-react';
import '../styles/Specialties.css';

export const Specialties = () => {
  const [selected, setSelected]       = useState(null);
  const [showDetail, setShowDetail]   = useState(false);
  const [showAdd,    setShowAdd]      = useState(false);

  const specialties = [
    { id:'1', name:'Cardiology',   description:'Diagnosis and treatment of heart and blood vessel disorders', doctorCount:15, clinicCount:8,  createdDate:'2023-01-15' },
    { id:'2', name:'Neurology',    description:'Treatment of disorders of the nervous system', doctorCount:12, clinicCount:6,  createdDate:'2023-02-10' },
    { id:'3', name:'Pediatrics',   description:'Medical care for infants, children, and adolescents', doctorCount:20, clinicCount:10, createdDate:'2023-01-20' },
    { id:'4', name:'Dermatology',  description:'Treatment of skin, hair, and nail disorders', doctorCount:8, clinicCount:5,   createdDate:'2023-03-05' },
    { id:'5', name:'Orthopedics',  description:'Treatment of musculoskeletal system disorders', doctorCount:18, clinicCount:7,  createdDate:'2023-02-28' },
  ];

  const columns = [
    { key:'name',        label:'Specialty Name', sortable:true },
    { key:'description', label:'Description',    sortable:false },
    { key:'doctorCount', label:'Doctors',        sortable:true },
    { key:'clinicCount', label:'Clinics',        sortable:true },
    { key:'createdDate', label:'Created Date',   sortable:true },
  ];

  const handleView  = sp => { setSelected(sp); setShowDetail(true); };
  const handleAdd   = () =>   setShowAdd(true);
  const closeAll    = () =>   { setShowDetail(false); setShowAdd(false); };

  const totalDocs        = specialties.reduce((sum,s)=>sum+s.doctorCount,0);
  const avgPerSpecialty = Math.round(totalDocs / specialties.length);

  return (
    <div className="specialties-page space-y-6">

      <PageHeader
        title="Specialties Management"
        description="Manage medical specialties and track associated doctors"
        action={{ label:'Add New Specialty', onClick:handleAdd }}
      />

      <div className="stats-grid">
        <div className="stat-card">
          <div><p>Total Specialties</p><h2>{specialties.length}</h2></div>
          <Stethoscope className="icon-blue" size={24}/>
        </div>
        <div className="stat-card">
          <div><p>Total Doctors</p><h2 className="text-green">{totalDocs}</h2></div>
          <Users className="icon-green" size={24}/>
        </div>
        <div className="stat-card">
          <div><p>Avg per Specialty</p><h2 className="text-purple">{avgPerSpecialty}</h2></div>
          <svg className="icon-purple" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
      </div>

      <DataTable
        data={specialties}
        columns={columns}
        onView={handleView}
        onEdit={s=>console.log('Edit',s)}
        onDelete={s=>console.log('Delete',s)}
        searchPlaceholder="Search specialties..."
      />

      {/* Detail Modal */}
      {selected && (
        <Modal
          isOpen={showDetail}
          onClose={closeAll}
          title={`Details: ${selected.name}`}
          size="lg"
        >
          <div className="detail-flex">
            <div>
              <h3>{selected.name}</h3>
              <p className="mb-4">{selected.description}</p>
              <ul className="detail-list">
                <li><strong>Doctors:</strong> {selected.doctorCount}</li>
                <li><strong>Clinics:</strong> {selected.clinicCount}</li>
                <li><strong>Created:</strong> {selected.createdDate}</li>
                <li><strong>Doctors/Clinic:</strong> {(selected.doctorCount/selected.clinicCount).toFixed(1)}</li>
                <li><strong>Market Share:</strong> {((selected.doctorCount/totalDocs)*100).toFixed(1)}%</li>
              </ul>
            </div>
          </div>
        </Modal>
      )}

      {/* Add Modal */}
      <Modal
        isOpen={showAdd}
        onClose={closeAll}
        title="Add New Specialty"
        size="lg"
      >
        <form className="add-form space-y-4">
          <div>
            <label>Name</label>
            <input placeholder="Enter specialty name"/>
          </div>
          <div>
            <label>Description</label>
            <textarea rows={4} placeholder="Enter description"/>
          </div>
          <div className="form-actions">
            <button type="button" onClick={closeAll}>Cancel</button>
            <button type="submit">Add Specialty</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
