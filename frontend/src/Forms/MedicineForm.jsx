import React, { useState } from "react";
import "../styles/MedicineForm.css";

const MedicineForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [name, setName] = useState(initialData.name ?? "");
  const [category, setCategory] = useState(initialData.category ?? "Pain Relief");
  const [manufacturer, setManufacturer] = useState(initialData.manufacturer ?? "");
  const [stock, setStock] = useState(initialData.stock ?? "");
  const [price, setPrice] = useState(initialData.price ?? "");
  const [expiry, setExpiry] = useState(initialData.expiryDate ?? "");
  const [description, setDescription] = useState(initialData.description ?? "");
  const [dosage, setDosage] = useState(initialData.dosageInstructions ?? "");
  const [error, setError] = useState("");

  const validate = () => {
    if (!name.trim()) return "Medicine name is required.";
    if (isNaN(Number(price)) || Number(price) < 0) return "Price must be a number ≥ 0.";
    if (!Number.isInteger(Number(stock)) || Number(stock) < 0) return "Stock must be an integer ≥ 0.";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) { setError(err); return; }
    const medicine = {
      id: initialData.id ?? `med_${Date.now()}`,
      name: name.trim(),
      category,
      manufacturer: manufacturer.trim(),
      stock: Number(stock),
      price: Number(price),
      expiryDate: expiry ? new Date(expiry).toISOString() : null,
      description: description.trim(),
      dosageInstructions: dosage.trim(),
      createdAt: initialData.createdAt ?? new Date().toISOString(),
    };
    onSubmit(medicine);
  };

  return (
    <form className="medicine-form" onSubmit={handleSubmit}>
      {error && <div className="medicine-form__error">{error}</div>}

      <label className="medicine-form__label">Medicine Name</label>
      <input className="medicine-form__input" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter medicine name" />

      <label className="medicine-form__label">Category</label>
      <select className="medicine-form__input" value={category} onChange={(e)=>setCategory(e.target.value)}>
        <option>Pain Relief</option>
        <option>Antibiotic</option>
        <option>Supplements</option>
      </select>

      <label className="medicine-form__label">Manufacturer</label>
      <input className="medicine-form__input" value={manufacturer} onChange={(e)=>setManufacturer(e.target.value)} placeholder="Enter manufacturer" />

      <label className="medicine-form__label">Stock Quantity</label>
      <input className="medicine-form__input" type="number" value={stock} onChange={(e)=>setStock(e.target.value)} placeholder="Enter stock quantity" />

      <label className="medicine-form__label">Price</label>
      <input className="medicine-form__input" type="number" step="0.01" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter price" />

      <label className="medicine-form__label">Expiry Date</label>
      <input className="medicine-form__input" type="date" value={expiry} onChange={(e)=>setExpiry(e.target.value)} />

      <label className="medicine-form__label">Dosage Instructions</label>
      <textarea className="medicine-form__textarea" value={dosage} onChange={(e)=>setDosage(e.target.value)} placeholder="Dosage instructions" />

      <label className="medicine-form__label">Description</label>
      <textarea className="medicine-form__textarea" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Enter medicine description" />

      <div className="medicine-form__actions">
        <button type="button" className="medicine-form__btn medicine-form__btn--cancel" onClick={onCancel}>Cancel</button>
        <button type="submit" className="medicine-form__btn medicine-form__btn--submit">{initialData.id ? "Save" : "Add Medicine"}</button>
      </div>
    </form>
  );
};

export default MedicineForm;
