import React, { useState } from "react";
import "../styles/DoctorForm.css";

const DoctorForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [fullName, setFullName] = useState(initialData.fullName ?? "");
  const [email, setEmail] = useState(initialData.email ?? "");
  const [phone, setPhone] = useState(initialData.phone ?? "");
  const [licenseNumber, setLicenseNumber] = useState(initialData.licenseNumber ?? "");
  const [specialty, setSpecialty] = useState((initialData.specialty && (Array.isArray(initialData.specialty) ? initialData.specialty.join(", ") : initialData.specialty)) ?? "");
  const [clinic, setClinic] = useState(initialData.clinic ?? "");
  const [experienceYears, setExperienceYears] = useState(initialData.experienceYears ?? "");
  const [consultationFee, setConsultationFee] = useState(initialData.consultationFee ?? "");
  const [address, setAddress] = useState(initialData.address ?? "");
  const [error, setError] = useState("");

  const validateEmail = (value) => /\S+@\S+\.\S+/.test(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim()) { setError("Full name is required."); return; }
    if (email && !validateEmail(email)) { setError("Email is not valid."); return; }
    const doc = {
      id: initialData.id ?? `doctor_${Date.now()}`,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      licenseNumber: licenseNumber.trim(),
      specialty: specialty.split(",").map(s=>s.trim()).filter(Boolean),
      clinic: clinic.trim(),
      experienceYears: Number(experienceYears) || 0,
      consultationFee: Number(consultationFee) || 0,
      address: address.trim(),
      createdAt: initialData.createdAt ?? new Date().toISOString(),
    };
    onSubmit(doc);
  };

  return (
    <form className="doctor-form" onSubmit={handleSubmit}>
      {error && <div className="doctor-form__error">{error}</div>}

      <label className="doctor-form__label">Full Name</label>
      <input className="doctor-form__input" value={fullName} onChange={(e)=>setFullName(e.target.value)} placeholder="Dr. John Doe" />

      <label className="doctor-form__label">Email</label>
      <input className="doctor-form__input" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="john.doe@clinic.com" />

      <label className="doctor-form__label">Phone Number</label>
      <input className="doctor-form__input" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="+1 (555) 123-4567" />

      <label className="doctor-form__label">License Number</label>
      <input className="doctor-form__input" value={licenseNumber} onChange={(e)=>setLicenseNumber(e.target.value)} placeholder="MD123456" />

      <label className="doctor-form__label">Specialty (comma-separated)</label>
      <input className="doctor-form__input" value={specialty} onChange={(e)=>setSpecialty(e.target.value)} placeholder="Cardiology" />

      <label className="doctor-form__label">Clinic</label>
      <input className="doctor-form__input" value={clinic} onChange={(e)=>setClinic(e.target.value)} placeholder="Central Medical Center" />

      <label className="doctor-form__label">Experience (Years)</label>
      <input className="doctor-form__input" type="number" value={experienceYears} onChange={(e)=>setExperienceYears(e.target.value)} />

      <label className="doctor-form__label">Consultation Fee</label>
      <input className="doctor-form__input" type="number" step="0.01" value={consultationFee} onChange={(e)=>setConsultationFee(e.target.value)} />

      <label className="doctor-form__label">Address</label>
      <textarea className="doctor-form__textarea" value={address} onChange={(e)=>setAddress(e.target.value)} />

      <div className="doctor-form__actions">
        <button type="button" className="doctor-form__btn doctor-form__btn--cancel" onClick={onCancel}>Cancel</button>
        <button type="submit" className="doctor-form__btn doctor-form__btn--submit">Add Doctor</button>
      </div>
    </form>
  );
};

export default DoctorForm;
