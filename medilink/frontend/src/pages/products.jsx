// src/pages/Products.jsx
import React, { useState } from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { DataTable }  from '../components/Common/DataTable';
import { Modal }      from '../components/Common/Modal';
import { Package, DollarSign, AlertTriangle } from 'lucide-react';
import '../styles/Products.css';

export const Products = () => {
  const [selected, setSelected]   = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showAdd,    setShowAdd]    = useState(false);

  const products = [
    { id:'1', name:'Digital Thermometer',    category:'Medical Devices',   description:'Accurate digital thermometer with fever alarm', price:24.99, stock:150, sku:'MT-001', manufacturer:'MediTech',   isActive:true,  createdDate:'2024-01-15', lastUpdated:'2024-02-10', imageUrl:'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id:'2', name:'Blood Pressure Monitor', category:'Medical Devices',   description:'Automatic blood pressure monitor with large display', price:89.99, stock:45,  sku:'BP-002', manufacturer:'HealthTech',  isActive:true,  createdDate:'2024-01-20', lastUpdated:'2024-02-05', imageUrl:'https://images.pexels.com/photos/4386432/pexels-photo-4386432.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id:'3', name:'Surgical Mask Pack',     category:'Medical Supplies',  description:'50-pack of disposable surgical masks', price:12.99, stock:8,   sku:'SM-003', manufacturer:'SafeGuard',   isActive:true,  createdDate:'2024-02-01', lastUpdated:'2024-02-15', imageUrl:'https://images.pexels.com/photos/4386405/pexels-photo-4386405.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id:'4', name:'Wheelchair',             category:'Mobility Equipment',description:'Lightweight folding wheelchair with footrests', price:299.99, stock:12,  sku:'WC-004', manufacturer:'MobilityPro', isActive:true,  createdDate:'2024-01-10', lastUpdated:'2024-01-10', imageUrl:'https://images.pexels.com/photos/4386369/pexels-photo-4386369.jpeg?auto=compress&cs=tinysrgb&w=300' },
    { id:'5', name:'Stethoscope',            category:'Medical Equipment',description:'Professional grade stethoscope for medical examination', price:159.99, stock:0,  sku:'ST-005', manufacturer:'MedScope',   isActive:false, createdDate:'2024-01-05', lastUpdated:'2024-02-01', imageUrl:'https://images.pexels.com/photos/4386443/pexels-photo-4386443.jpeg?auto=compress&cs=tinysrgb&w=300' },
  ];

  const columns = [
    { key:'name',     label:'Product Name', sortable:true },
    { key:'category', label:'Category',     sortable:true },
    { key:'sku',      label:'SKU',          sortable:true },
    {
      key:'price', label:'Price', sortable:true,
      render: v => `$${v.toFixed(2)}`
    },
    {
      key:'stock', label:'Stock', sortable:true,
      render: v => <span className={`stock-badge ${v===0?'out':'low'} ${v>=20?'ok':''}`}>{v}</span>
    },
    {
      key:'isActive', label:'Status', sortable:true,
      render: v => <span className={`status-badge ${v?'active':'inactive'}`}>{v?'Active':'Inactive'}</span>
    },
  ];

  const handleView = p => { setSelected(p); setShowDetail(true); };
  const handleAdd  = ()  => setShowAdd(true);
  const closeAll   = ()  => { setShowDetail(false); setShowAdd(false); };

  const outOfStock = products.filter(p=>p.stock===0);
  const lowStock   = products.filter(p=>p.stock>0 && p.stock<20);
  const totalValue = products.reduce((s,p)=>s+p.price*p.stock,0);

  return (
    <div className="products-page space-y-6">

      <PageHeader
        title="Products Management"
        description="Manage medical products and equipment inventory"
        action={{ label:'Add New Product', onClick:handleAdd }}
      />

      {/* Alerts */}
      {outOfStock.length > 0 && (
        <div className="alert alert-red">
          <div className="alert-header"><AlertTriangle/> Out of Stock</div>
          <p>{outOfStock.length} item(s) out of stock: {outOfStock.map(p=>p.name).join(', ')}</p>
        </div>
      )}
      {lowStock.length > 0 && (
        <div className="alert alert-yellow">
          <div className="alert-header"><AlertTriangle/> Low Stock</div>
          <p>{lowStock.length} item(s) low: {lowStock.map(p=>p.name).join(', ')}</p>
        </div>
      )}

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div><p>Total Products</p><h2>{products.length}</h2></div>
          <Package className="icon-blue" size={24}/>
        </div>
        <div className="stat-card">
          <div><p>Low Stock</p><h2 className="text-yellow">{lowStock.length}</h2></div>
          <AlertTriangle className="icon-yellow" size={24}/>
        </div>
        <div className="stat-card">
          <div><p>Out of Stock</p><h2 className="text-red">{outOfStock.length}</h2></div>
          <AlertTriangle className="icon-red" size={24}/>
        </div>
        <div className="stat-card">
          <div><p>Total Value</p><h2 className="text-green">${totalValue.toFixed(2)}</h2></div>
          <DollarSign className="icon-green" size={24}/>
        </div>
      </div>

      <DataTable
        data={products}
        columns={columns}
        onView={handleView}
        onEdit={p=>console.log('Edit',p)}
        onDelete={p=>console.log('Delete',p)}
        searchPlaceholder="Search products..."
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
            {selected.imageUrl && <img src={selected.imageUrl} alt="" className="detail-img"/>}
            <div>
              <h3>{selected.name}</h3>
              <p>{selected.description}</p>
              <ul className="detail-list">
                <li><strong>SKU:</strong> {selected.sku}</li>
                <li><strong>Category:</strong> {selected.category}</li>
                <li><strong>Manufacturer:</strong> {selected.manufacturer}</li>
                <li><strong>Price:</strong> ${selected.price.toFixed(2)}</li>
                <li><strong>Stock:</strong> {selected.stock}</li>
                <li><strong>Status:</strong> {selected.isActive?'Active':'Inactive'}</li>
                <li><strong>Created:</strong> {selected.createdDate}</li>
                <li><strong>Updated:</strong> {selected.lastUpdated}</li>
                <li><strong>Total Value:</strong> ${(selected.price*selected.stock).toFixed(2)}</li>
              </ul>
            </div>
          </div>
        </Modal>
      )}

      {/* Add Modal */}
      <Modal
        isOpen={showAdd}
        onClose={closeAll}
        title="Add New Product"
        size="lg"
      >
        <form className="add-form space-y-4">
          <div className="form-grid">
            <div><label>Name</label><input/></div>
            <div><label>SKU</label><input/></div>
            <div><label>Category</label><select><option>Medical Devices</option></select></div>
            <div><label>Manufacturer</label><input/></div>
            <div><label>Price</label><input type="number" step="0.01"/></div>
            <div><label>Stock</label><input type="number"/></div>
          </div>
          <div><label>Description</label><textarea rows={3}/></div>
          <div className="form-actions">
            <button type="button" onClick={closeAll}>Cancel</button>
            <button type="submit">Add Product</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
