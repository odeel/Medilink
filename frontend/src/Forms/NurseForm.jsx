import React, { useState } from "react";
import "../styles/NurseForm.css";

const NurseForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [fullName, setFullName] = useState(initialData.fullName ?? "");
  const [email, setEmail] = useState(initialData.email ?? "");
  const [phone, setPhone] = useState(initialData.phone ?? "");
  const [licenseNumber, setLicenseNumber] = useState(initialData.licenseNumber ?? "");
  const [clinic, setClinic] = useState(initialData.clinic ?? "");
  const [department, setDepartment] = useState(initialData.department ?? "Emergency");
  const [experienceYears, setExperienceYears] = useState(initialData.experienceYears ?? "");
  const [joinDate, setJoinDate] = useState(initialData.joinDate ? initialData.joinDate.split("T")[0] : "");
  const [address, setAddress] = useState(initialData.address ?? "");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim()) { setError("Full name is required."); return; }
    const nurse = {
      id: initialData.id ?? `nurse_${Date.now()}`,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      licenseNumber: licenseNumber.trim(),
      clinic: clinic.trim(),
      department,
      experienceYears: Number(experienceYears) || 0,
      joinDate: joinDate ? new Date(joinDate).toISOString() : null,
      address: address.trim(),
      createdAt: initialData.createdAt ?? new Date().toISOString(),
    };
    onSubmit(nurse);
  };

  return (
    <form className="nurse-form" onSubmit={handleSubmit}>
      {error && <div className="nurse-form__error">{error}</div>}

      <label className="nurse-form__label">Full Name</label>
      <input className="nurse-form__input" value={fullName} onChange={(e)=>setFullName(e.target.value)} />

      <label className="nurse-form__label">Email</label>
      <input className="nurse-form__input" value={email} onChange={(e)=>setEmail(e.target.value)} />

      <label className="nurse-form__label">Phone Number</label>
      <input className="nurse-form__input" value={phone} onChange={(e)=>setPhone(e.target.value)} />

      <label className="nurse-form__label">License Number</label>
      <input className="nurse-form__input" value={licenseNumber} onChange={(e)=>setLicenseNumber(e.target.value)} />

      <label className="nurse-form__label">Clinic</label>
      <input className="nurse-form__input" value={clinic} onChange={(e)=>setClinic(e.target.value)} />

      <label className="nurse-form__label">Department</label>
      <select className="nurse-form__input" value={department} onChange={(e)=>setDepartment(e.target.value)}>
        <option>Emergency</option>
        <option>Pediatrics</option>
        <option>ICU</option>
        <option>General</option>
      </select>

      <label className="nurse-form__label">Experience (Years)</label>
      <input className="nurse-form__input" type="number" value={experienceYears} onChange={(e)=>setExperienceYears(e.target.value)} />

      <label className="nurse-form__label">Join Date</label>
      <input className="nurse-form__input" type="date" value={joinDate} onChange={(e)=>setJoinDate(e.target.value)} />

      <label className="nurse-form__label">Address</label>
      <textarea className="nurse-form__textarea" value={address} onChange={(e)=>setAddress(e.target.value)} />

      <div className="nurse-form__actions">
        <button type="button" className="nurse-form__btn nurse-form__btn--cancel" onClick={onCancel}>Cancel</button>
        <button type="submit" className="nurse-form__btn nurse-form__btn--submit">Add Nurse</button>
      </div>
    </form>
  );
};

export default NurseForm;
