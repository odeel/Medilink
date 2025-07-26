// src/pages/Medicines.jsx
import React, { useState } from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { DataTable }  from '../components/Common/DataTable';
import { Modal }      from '../components/Common/Modal';
import { AlertTriangle, Package, DollarSign } from 'lucide-react';
import '../styles/Medicines.css';

export const Medicines = () => {
  const [selected, setSelected]    = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showAdd,    setShowAdd]    = useState(false);

  const medicines = [
    { id:'1', name:'Paracetamol',  category:'Pain Relief', manufacturer:'PharmaCorp', stock:150, price:5.99, expiryDate:'2024-12-31', description:'Effective pain relief and fever reducer', dosage:'500mg tablets, 1‑2 tablets every 4‑6 hours', sideEffects:['Nausea','Stomach upset'], warnings:['Do not exceed 8 tablets in 24 hours','Avoid alcohol'] },
    { id:'2', name:'Amoxicillin', category:'Antibiotics',   manufacturer:'MediLab',     stock:25,  price:12.50, expiryDate:'2024-06-15', description:'Broad‑spectrum antibiotic for bacterial infections', dosage:'250mg capsules, 3 times daily', sideEffects:['Diarrhea','Nausea','Skin rash'], warnings:['Complete full course','Take with food'] },
    { id:'3', name:'Lisinopril',   category:'Cardiovascular',manufacturer:'CardioMed',   stock:80,  price:18.75, expiryDate:'2025-03-20', description:'ACE inhibitor for high blood pressure', dosage:'10mg tablets, once daily', sideEffects:['Dry cough','Dizziness'], warnings:['Monitor blood pressure regularly','Avoid potassium supplements'] },
  ];

  const columns = [
    { key:'name',         label:'Medicine Name', sortable:true },
    { key:'category',     label:'Category',      sortable:true },
    { key:'manufacturer', label:'Manufacturer',  sortable:true },
    {
      key:'stock', label:'Stock', sortable:true,
      render: v => <span className={`stock-badge ${v<30?'low-stock':'in-stock'}`}>{v}</span>
    },
    {
      key:'price', label:'Price', sortable:true,
      render: v => `$${v.toFixed(2)}`
    },
    {
      key:'expiryDate', label:'Expiry Date', sortable:true,
      render: d => {
        const soon = new Date(d) < new Date(Date.now() + 30*86400000);
        return <span className={soon?'expiry-soon':'expiry-normal'}>{d}</span>;
      }
    },
  ];

  const lowStock = medicines.filter(m=>m.stock<30);

  const openDetail = med => { setSelected(med); setShowDetail(true); };
  const openAdd    = ()  => setShowAdd(true);
  const closeAll   = ()  => { setShowDetail(false); setShowAdd(false); };

  return (
    <div className="medicines-page space-y-6">

      <PageHeader
        title="Medicines Management"
        description="Manage medicine inventory and track stock levels"
        action={{ label:'Add New Medicine', onClick:openAdd }}
      />

      {lowStock.length > 0 && (
        <div className="alert-low-stock">
          <div className="alert-header">
            <AlertTriangle size={20} className="icon-red"/>
            <h3>Low Stock Alert</h3>
          </div>
          <p>
            {lowStock.length} item(s) running low: {lowStock.map(m=>m.name).join(', ')}
          </p>
        </div>
      )}

      <div className="stats-grid">
        <div className="stat-card">
          <div>
            <p>Total Medicines</p>
            <h2>{medicines.length}</h2>
          </div>
          <Package size={24} className="icon-blue"/>
        </div>
        <div className="stat-card">
          <div>
            <p>Low Stock Items</p>
            <h2 className="text-red">{lowStock.length}</h2>
          </div>
          <AlertTriangle size={24} className="icon-red"/>
        </div>
        <div className="stat-card">
          <div>
            <p>Total Value</p>
            <h2 className="text-green">
              ${medicines.reduce((s,m)=>s + m.stock*m.price, 0).toFixed(2)}
            </h2>
          </div>
          <DollarSign size={24} className="icon-green"/>
        </div>
      </div>

      <DataTable
        data={medicines}
        columns={columns}
        onView={openDetail}
        onEdit={m=>console.log('Edit',m)}
        onDelete={m=>console.log('Delete',m)}
        searchPlaceholder="Search medicines..."
      />

      {/* Details Modal */}
      {selected && (
        <Modal
          isOpen={showDetail}
          onClose={closeAll}
          title={`Details - ${selected.name}`}
          size="lg"
        >
          <div className="detail-grid">
            <div className="detail-col">
              <h4>Basic Info</h4>
              <p><strong>Category:</strong> {selected.category}</p>
              <p><strong>Manufacturer:</strong> {selected.manufacturer}</p>
              <p><strong>Stock:</strong> <span className={selected.stock<30?'text-red':'text-green'}>{selected.stock}</span></p>
              <p><strong>Price:</strong> ${selected.price.toFixed(2)}</p>
              <p><strong>Expiry:</strong> {selected.expiryDate}</p>
            </div>
            <div className="detail-col">
              <h4>Dosage</h4>
              <p>{selected.dosage}</p>
            </div>
          </div>
          <section>
            <h4>Description</h4>
            <p>{selected.description}</p>
          </section>
          <section>
            <h4>Side Effects</h4>
            <div className="tag-list">
              {selected.sideEffects.map((e,i)=><span key={i} className="tag-yellow">{e}</span>)}
            </div>
          </section>
          <section>
            <h4>Warnings</h4>
            <ul className="warnings-list">
              {selected.warnings.map((w,i)=>(
                <li key={i}><AlertTriangle size={16} className="icon-red-small"/> {w}</li>
              ))}
            </ul>
          </section>
        </Modal>
      )}

      {/* Add Modal */}
      <Modal
        isOpen={showAdd}
        onClose={closeAll}
        title="Add New Medicine"
        size="lg"
      >
        <form className="add-form space-y-4">
          <div className="form-grid">
            <div><label>Name</label><input type="text" placeholder="Medicine name"/></div>
            <div><label>Category</label><select><option>Pain Relief</option><option>Antibiotics</option><option>Cardiovascular</option></select></div>
            <div><label>Manufacturer</label><input type="text"/></div>
            <div><label>Stock Qty</label><input type="number"/></div>
            <div><label>Price</label><input type="number" step="0.01"/></div>
            <div><label>Expiry Date</label><input type="date"/></div>
          </div>
          <div><label>Description</label><textarea rows={2}/></div>
          <div><label>Dosage</label><textarea rows={2}/></div>
          <div className="form-actions">
            <button type="button" onClick={closeAll}>Cancel</button>
            <button type="submit">Add Medicine</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
