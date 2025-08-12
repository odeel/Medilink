import React, { useState } from "react";
import "../styles/ClinicForm.css";

const ClinicForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [clinicName, setClinicName] = useState(initialData.clinicName ?? "");
  const [location, setLocation] = useState(initialData.location ?? "");
  const [contactNumber, setContactNumber] = useState(initialData.contactNumber ?? "");
  const [email, setEmail] = useState(initialData.email ?? "");
  const [description, setDescription] = useState(initialData.description ?? "");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!clinicName.trim()) { setError("Clinic name is required."); return; }
    const clinic = {
      id: initialData.id ?? `clinic_${Date.now()}`,
      clinicName: clinicName.trim(),
      location: location.trim(),
      contactNumber: contactNumber.trim(),
      email: email.trim(),
      description: description.trim(),
      createdAt: initialData.createdAt ?? new Date().toISOString(),
    };
    onSubmit(clinic);
  };

  return (
    <form className="clinic-form" onSubmit={handleSubmit}>
      {error && <div className="clinic-form__error">{error}</div>}

      <label className="clinic-form__label">Clinic Name</label>
      <input className="clinic-form__input" value={clinicName} onChange={(e)=>setClinicName(e.target.value)} placeholder="Enter clinic name" />

      <label className="clinic-form__label">Location</label>
      <input className="clinic-form__input" value={location} onChange={(e)=>setLocation(e.target.value)} placeholder="Enter location" />

      <label className="clinic-form__label">Contact Number</label>
      <input className="clinic-form__input" value={contactNumber} onChange={(e)=>setContactNumber(e.target.value)} placeholder="Enter contact number" />

      <label className="clinic-form__label">Email</label>
      <input className="clinic-form__input" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email address" />

      <label className="clinic-form__label">Description</label>
      <textarea className="clinic-form__textarea" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Enter clinic description" />

      <div className="clinic-form__actions">
        <button type="button" className="clinic-form__btn clinic-form__btn--cancel" onClick={onCancel}>Cancel</button>
        <button type="submit" className="clinic-form__btn clinic-form__btn--submit">Add Clinic</button>
      </div>
    </form>
  );
};

export default ClinicForm;
