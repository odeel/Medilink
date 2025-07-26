// src/pages/FAQs.jsx
import React, { useState } from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { DataTable }  from '../components/Common/DataTable';
import { Modal }      from '../components/Common/Modal';
import { HelpCircle, Tag } from 'lucide-react';
import '../styles/FAQs.css';

export const FAQs = () => {
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [showModal,    setShowModal]    = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const faqs = [
    { id:'1', question:'How do I book an appointment?', answer:'You can book …', category:'Appointments', isActive:true,  createdDate:'2024-01-15', updatedDate:'2024-01-15', views:1250 },
    { id:'2', question:'What should I bring …?',            answer:'Please bring …',     category:'General',      isActive:true,  createdDate:'2024-01-20', updatedDate:'2024-02-10', views: 890 },
    { id:'3', question:'How can I access my medical records?', answer:'You can access …', category:'Medical Records', isActive:true, createdDate:'2024-02-01', updatedDate:'2024-02-01', views: 567 },
    { id:'4', question:'What insurance plans do you accept?', answer:'We accept …',      category:'Billing',      isActive:true,  createdDate:'2024-02-05', updatedDate:'2024-02-05', views: 743 },
    { id:'5', question:'How do I request a prescription refill?', answer:'You can request …', category:'Prescriptions', isActive:false, createdDate:'2024-01-10', updatedDate:'2024-01-10', views: 234 },
  ];

  const columns = [
    { key:'question',   label:'Question',    sortable:true },
    { key:'category',   label:'Category',    sortable:true },
    { key:'views',      label:'Views',       sortable:true },
    { key:'updatedDate',label:'Last Updated',sortable:true },
    {
      key:'isActive',
      label:'Status',
      sortable:true,
      render: v => (
        <span className={`status-badge ${v ? 'status-active' : 'status-inactive'}`}>
          {v ? 'Active' : 'Inactive'}
        </span>
      )
    },
  ];

  const handleView   = faq => { setSelectedFAQ(faq); setShowModal(true); };
  const handleEdit   = faq => console.log('Edit FAQ:', faq);
  const handleDelete = faq => console.log('Delete FAQ:', faq);
  const handleAdd    = ()  => setShowAddModal(true);

  const categories = Array.from(new Set(faqs.map(f => f.category)));
  const activeFAQs = faqs.filter(f => f.isActive).length;
  const totalViews = faqs.reduce((sum, f) => sum + f.views, 0);

  return (
    <div className="faqs-page space-y-6">
      <PageHeader 
        title="FAQs Management"
        description="Manage frequently asked questions for the platform"
        action={{ label:'Add New FAQ', onClick:handleAdd }}
      />

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <p>Total FAQs</p>
          <h2>{faqs.length}</h2>
          <HelpCircle size={24}/>
        </div>
        <div className="stat-card">
          <p>Active FAQs</p>
          <h2 className="green-text">{activeFAQs}</h2>
          <HelpCircle size={24} className="green-icon"/>
        </div>
        <div className="stat-card">
          <p>Categories</p>
          <h2 className="purple-text">{categories.length}</h2>
          <Tag size={24} className="purple-icon"/>
        </div>
        <div className="stat-card">
          <p>Total Views</p>
          <h2 className="orange-text">{totalViews.toLocaleString()}</h2>
          <HelpCircle size={24} className="orange-icon"/>
        </div>
      </div>

      {/* Categories Overview */}
      <div className="overview-card">
        <h3>Categories Overview</h3>
        <div className="category-grid">
          {categories.map(cat => {
            const items = faqs.filter(f => f.category === cat);
            const views = items.reduce((s,f)=>s+f.views,0);
            return (
              <div key={cat} className="category-card">
                <h4>{cat}</h4>
                <p>{items.length} FAQs</p>
                <p>{views} views</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Table */}
      <DataTable
        data={faqs}
        columns={columns}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        searchPlaceholder="Search FAQs..."
      />

      {/* Detail Modal */}
      {selectedFAQ && (
        <Modal
          isOpen={showModal}
          onClose={()=>setShowModal(false)}
          title="FAQ Details"
          size="lg"
        >
          <div className="faq-details space-y-6">
            <section>
              <h4>Question</h4>
              <p>{selectedFAQ.question}</p>
            </section>
            <section>
              <h4>Answer</h4>
              <p>{selectedFAQ.answer}</p>
            </section>
            <div className="two-column">
              <div>
                <h4>Category</h4>
                <span className="status-badge badge-cyan">{selectedFAQ.category}</span>
              </div>
              <div>
                <h4>Status</h4>
                <span className={`status-badge ${selectedFAQ.isActive ? 'status-active' : 'status-inactive'}`}>
                  {selectedFAQ.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
            <div className="three-column">
              <div><h4>Views</h4><p>{selectedFAQ.views}</p></div>
              <div><h4>Created</h4><p>{selectedFAQ.createdDate}</p></div>
              <div><h4>Updated</h4><p>{selectedFAQ.updatedDate}</p></div>
            </div>
          </div>
        </Modal>
      )}

      {/* Add FAQ Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={()=>setShowAddModal(false)}
        title="Add New FAQ"
        size="lg"
      >
        <form className="space-y-4">
          <div>
            <label>Question</label>
            <input type="text" placeholder="Enter the FAQ question" />
          </div>
          <div>
            <label>Answer</label>
            <textarea rows={5} placeholder="Enter the detailed answer" />
          </div>
          <div className="two-column form-grid">
            <div>
              <label>Category</label>
              <select>
                {categories.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label>Status</label>
              <select>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>
          </div>
          <div className="form-actions">
            <button type="button" onClick={()=>setShowAddModal(false)}>Cancel</button>
            <button type="submit">Add FAQ</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
