// src/pages/Coupons.jsx
import React, { useState } from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { DataTable } from '../components/Common/DataTable';
import { Modal } from '../components/Common/Modal';
import { Calendar, Percent, Users, TrendingUp } from 'lucide-react';
import '../styles/Coupons.css';

export const Coupons = () => {
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [showModal, setShowModal]       = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const coupons = [
    { id:'1', code:'HEALTH20',    description:'Get 20% off on all consultations', discountType:'percentage', discountValue:20, validFrom:'2024-01-01', validTo:'2024-12-31', usageLimit:1000, usedCount:245, isActive:true,  createdDate:'2024-01-01', applicableServices:['Consultation','Checkup'] },
    { id:'2', code:'NEWPATIENT',  description:'First time patient discount',       discountType:'fixed',      discountValue:50, validFrom:'2024-01-01', validTo:'2024-06-30', usageLimit:500,  usedCount:125, isActive:true,  createdDate:'2024-01-01', applicableServices:['Consultation'] },
    { id:'3', code:'FAMILY10',    description:'Family package discount',           discountType:'percentage', discountValue:10, validFrom:'2024-03-01', validTo:'2024-05-31', usageLimit:200,  usedCount:180, isActive:false, createdDate:'2024-03-01', applicableServices:['Consultation','Checkup','Lab Tests'] },
  ];

  const columns = [
    { key:'code',  label:'Coupon Code', sortable:true },
    { key:'description', label:'Description', sortable:false },
    {
      key:'discountValue',
      label:'Discount',
      sortable:true,
      render:(v,row) => row.discountType==='percentage' ? `${v}%` : `$${v}`
    },
    { key:'validTo', label:'Valid Until', sortable:true },
    {
      key:'usedCount',
      label:'Usage',
      sortable:true,
      render:(v,row) => `${v}/${row.usageLimit}`
    },
    {
      key:'isActive',
      label:'Status',
      sortable:true,
      render:(v) => (
        <span className={`status${v?' status-active':' status-inactive'}`}>
          {v?'Active':'Inactive'}
        </span>
      )
    },
  ];

  const handleView   = c => { setSelectedCoupon(c); setShowModal(true); };
  const handleEdit   = c => console.log('Edit coupon:', c);
  const handleDelete = c => console.log('Delete coupon:', c);
  const handleAdd    = () => setShowAddModal(true);

  const activeCount = coupons.filter(c=>c.isActive).length;
  const totalUsage  = coupons.reduce((sum,c)=>sum+c.usedCount,0);
  const usageRate   = Math.round(
    totalUsage / coupons.reduce((s,c)=>s+c.usageLimit,0) * 100
  );

  return (
    <div className="coupons-page">
      <PageHeader
        title="Coupons Management"
        description="Manage promotional coupons and track usage statistics"
        action={{ label:'Create New Coupon', onClick:handleAdd }}
      />

      <div className="stats-grid">
        <div className="stat-card">
          <p>Total Coupons</p>
          <h2>{coupons.length}</h2>
          <Percent size={24} />
        </div>
        <div className="stat-card">
          <p>Active Coupons</p>
          <h2>{activeCount}</h2>
          <Users size={24} className="green-icon" />
        </div>
        <div className="stat-card">
          <p>Total Usage</p>
          <h2>{totalUsage}</h2>
          <TrendingUp size={24} className="purple-icon" />
        </div>
        <div className="stat-card">
          <p>Usage Rate</p>
          <h2>{usageRate}%</h2>
          <Calendar size={24} className="orange-icon" />
        </div>
      </div>

      <DataTable
        data={coupons}
        columns={columns}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        searchPlaceholder="Search coupons..."
      />

      {selectedCoupon && (
        <Modal
          isOpen={showModal}
          onClose={()=>setShowModal(false)}
          title={`Coupon Details — ${selectedCoupon.code}`}
          size="lg"
        >
          <div className="details">
            <div className="details-grid">
              <div>
                <h4>Coupon Info</h4>
                <ul className="info-list">
                  <li><strong>Code:</strong> {selectedCoupon.code}</li>
                  <li><strong>Discount:</strong> {selectedCoupon.discountType==='percentage'?`${selectedCoupon.discountValue}%`:`$${selectedCoupon.discountValue}`}</li>
                  <li><strong>Valid From:</strong> {selectedCoupon.validFrom}</li>
                  <li><strong>Valid To:</strong> {selectedCoupon.validTo}</li>
                  <li><strong>Status:</strong> <span className={selectedCoupon.isActive?'active-text':'inactive-text'}>{selectedCoupon.isActive?'Active':'Inactive'}</span></li>
                </ul>
              </div>
              <div>
                <h4>Usage Stats</h4>
                <ul className="info-list">
                  <li><strong>Limit:</strong> {selectedCoupon.usageLimit}</li>
                  <li><strong>Used:</strong> {selectedCoupon.usedCount}</li>
                  <li><strong>Remaining:</strong> {selectedCoupon.usageLimit - selectedCoupon.usedCount}</li>
                  <li><strong>Rate:</strong> {Math.round(selectedCoupon.usedCount/selectedCoupon.usageLimit*100)}%</li>
                </ul>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width:`${selectedCoupon.usedCount/selectedCoupon.usageLimit*100}%`}}/>
                </div>
              </div>
            </div>
            <div>
              <h4>Description</h4>
              <p>{selectedCoupon.description}</p>
            </div>
            <div>
              <h4>Applicable Services</h4>
              <div className="services-list">
                {selectedCoupon.applicableServices.map(s=>(
                  <span key={s} className="service-badge">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}

      <Modal
        isOpen={showAddModal}
        onClose={()=>setShowAddModal(false)}
        title="Create New Coupon"
        size="lg"
      >
        <form className="add-coupon-form">
          <div className="form-grid">
            <div><label>Code</label><input type="text" placeholder="HEALTH20"/></div>
            <div><label>Type</label><select><option value="percentage">%</option><option value="fixed">$</option></select></div>
            <div><label>Value</label><input type="number" placeholder="20"/></div>
            <div><label>Limit</label><input type="number" placeholder="1000"/></div>
            <div><label>Valid From</label><input type="date"/></div>
            <div><label>Valid To</label><input type="date"/></div>
          </div>
          <div className="form-full"><label>Description</label><textarea rows={3}/></div>
          <div className="form-full"><label>Services</label><input type="text" placeholder="Consultation, Checkup"/></div>
          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={()=>setShowAddModal(false)}>Cancel</button>
            <button type="submit" className="btn-primary">Create Coupon</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
