// src/pages/Nurses.jsx
import React, { useState } from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { DataTable }  from '../components/Common/DataTable';
import { Modal }      from '../components/Common/Modal';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import '../styles/Nurses.css';

export const Nurses = () => {
  const [selected, setSelected]    = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showAdd,    setShowAdd]    = useState(false);

  const nurses = [
    { id:'1', name:'Maria Rodriguez',    email:'maria.rodriguez@clinic.com', phone:'+1 (555) 123-4567', clinic:'Central Medical Center', licenseNumber:'RN123456', department:'Emergency', experience:5,  joinDate:'2021-03-15', qualifications:['BSN','ACLS','PALS'], address:'123 Main St, City, State 12345', status:'Active' },
    { id:'2', name:'Jennifer Smith',     email:'jennifer.smith@clinic.com', phone:'+1 (555) 234-5678', clinic:'HealthFirst Clinic',   licenseNumber:'RN234567', department:'Pediatrics', experience:8,  joinDate:'2019-08-20', qualifications:['BSN','CPN','PALS'], address:'456 Oak Ave, City, State 12345', status:'Active' },
    { id:'3', name:'Amanda Johnson',      email:'amanda.johnson@clinic.com', phone:'+1 (555) 345-6789', clinic:'City General Hospital',licenseNumber:'RN345678', department:'ICU',        experience:12, joinDate:'2017-01-10', qualifications:['BSN','CCRN','ACLS'], address:'789 Pine Rd, City, State 12345', status:'On Leave' },
  ];

  const columns = [
    { key:'name',           label:'Name',       sortable:true },
    { key:'clinic',         label:'Clinic',     sortable:true },
    { key:'department',     label:'Department', sortable:true },
    { key:'licenseNumber',  label:'License',    sortable:true },
    { key:'experience',     label:'Experience', sortable:true },
    {
      key:'status', label:'Status', sortable:true,
      render: v => <span className={`status-badge ${v==='Active'?'active':'on-leave'}`}>{v}</span>
    },
  ];

  const handleView = n => { setSelected(n); setShowDetail(true); };
  const handleAdd  = ()  => setShowAdd(true);
  const closeAll   = ()  => { setShowDetail(false); setShowAdd(false); };

  const total    = nurses.length;
  const active   = nurses.filter(n=>n.status==='Active').length;
  const onLeave  = nurses.filter(n=>n.status==='On Leave').length;
  const avgExp   = Math.round(nurses.reduce((s,n)=>s+n.experience,0)/total);

  return (
    <div className="nurses-page space-y-6">

      <PageHeader
        title="Nurses Management"
        description="Manage nurse profiles and track their information"
        action={{ label:'Add New Nurse', onClick:handleAdd }}
      />

      <div className="stats-grid">
        <div className="stat-card">
          <div><p>Total Nurses</p><h2>{total}</h2></div>
          <svg className="icon-blue" viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
        </div>
        <div className="stat-card">
          <div><p>Active Nurses</p><h2 className="text-green">{active}</h2></div>
          <svg className="icon-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
        </div>
        <div className="stat-card">
          <div><p>On Leave</p><h2 className="text-yellow">{onLeave}</h2></div>
          <svg className="icon-yellow" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/></svg>
        </div>
        <div className="stat-card">
          <div><p>Avg Experience</p><h2 className="text-purple">{avgExp} yrs</h2></div>
          <svg className="icon-purple" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/></svg>
        </div>
      </div>

      <DataTable
        data={nurses}
        columns={columns}
        onView={handleView}
        onEdit={n=>console.log('Edit',n)}
        onDelete={n=>console.log('Delete',n)}
        searchPlaceholder="Search nurses..."
      />

      {selected && (
        <Modal
          isOpen={showDetail}
          onClose={closeAll}
          title={`Details - ${selected.name}`}
          size="lg"
        >
          <div className="detail-grid">
            <div className="detail-col">
              <h4>Contact</h4>
              <p><Mail/> {selected.email}</p>
              <p><Phone/> {selected.phone}</p>
              <p><MapPin/> {selected.address}</p>
            </div>
            <div className="detail-col">
              <h4>Professional</h4>
              <p><strong>Clinic:</strong> {selected.clinic}</p>
              <p><strong>Dept:</strong> {selected.department}</p>
              <p><strong>License:</strong> {selected.licenseNumber}</p>
              <p><strong>Experience:</strong> {selected.experience} yrs</p>
              <p><Calendar/> Joined {selected.joinDate}</p>
            </div>
          </div>
          <section>
            <h4>Qualifications</h4>
            <div className="tag-list">
              {selected.qualifications.map(q=>(
                <span key={q} className="tag-cyan">{q}</span>
              ))}
            </div>
          </section>
        </Modal>
      )}

      <Modal
        isOpen={showAdd}
        onClose={closeAll}
        title="Add New Nurse"
        size="lg"
      >
        <form className="add-form space-y-4">
          <div className="form-grid">
            <div><label>Name</label><input/></div>
            <div><label>Email</label><input type="email"/></div>
            <div><label>Phone</label><input/></div>
            <div><label>License #</label><input/></div>
            <div><label>Clinic</label><select><option>Central Medical Center</option></select></div>
            <div><label>Department</label><select><option>Emergency</option></select></div>
            <div><label>Experience</label><input type="number"/></div>
            <div><label>Join Date</label><input type="date"/></div>
          </div>
          <div><label>Address</label><textarea rows={2}/></div>
          <div><label>Qualifications</label><input placeholder="comma‑separated"/></div>
          <div className="form-actions">
            <button type="button" onClick={closeAll}>Cancel</button>
            <button type="submit">Add Nurse</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
