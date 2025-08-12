import React, { useState } from "react";
import "../styles/SpecialtyForm.css";

const SpecialtyForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [name, setName] = useState(initialData.name ?? "");
  const [description, setDescription] = useState(initialData.description ?? "");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) { setError("Specialty name is required."); return; }
    const spec = {
      id: initialData.id ?? `spec_${Date.now()}`,
      name: name.trim(),
      description: description.trim(),
      createdAt: initialData.createdAt ?? new Date().toISOString(),
    };
    onSubmit(spec);
  };

  return (
    <form className="specialty-form" onSubmit={handleSubmit}>
      {error && <div className="specialty-form__error">{error}</div>}

      <label className="specialty-form__label">Specialty Name</label>
      <input className="specialty-form__input" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter specialty name" />

      <label className="specialty-form__label">Description</label>
      <textarea className="specialty-form__textarea" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Enter specialty description" />

      <div className="specialty-form__actions">
        <button type="button" className="specialty-form__btn specialty-form__btn--cancel" onClick={onCancel}>Cancel</button>
        <button type="submit" className="specialty-form__btn specialty-form__btn--submit">Add Specialty</button>
      </div>
    </form>
  );
};

export default SpecialtyForm;
