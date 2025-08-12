import React, { useState } from "react";
import "../styles/CouponForm.css";

const CouponForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [code, setCode] = useState(initialData.code ?? "");
  const [discountType, setDiscountType] = useState(initialData.discountType ?? "Percentage");
  const [discountValue, setDiscountValue] = useState(initialData.discountValue ?? "");
  const [usageLimit, setUsageLimit] = useState(initialData.usageLimit ?? "");
  const [validFrom, setValidFrom] = useState(initialData.validFrom ? initialData.validFrom.split("T")[0] : "");
  const [validTo, setValidTo] = useState(initialData.validTo ? initialData.validTo.split("T")[0] : "");
  const [description, setDescription] = useState(initialData.description ?? "");
  const [applicableServices, setApplicableServices] = useState((initialData.applicableServices && initialData.applicableServices.join(", ")) ?? "");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code.trim()) { setError("Coupon code is required."); return; }
    if (isNaN(Number(discountValue)) || Number(discountValue) < 0) { setError("Discount value must be a number >= 0."); return; }
    if (validFrom && validTo && new Date(validFrom) > new Date(validTo)) { setError("Valid To must be same or after Valid From."); return; }

    const coupon = {
      id: initialData.id ?? `coupon_${Date.now()}`,
      code: code.trim(),
      discountType,
      discountValue: Number(discountValue),
      usageLimit: Number(usageLimit) || 0,
      validFrom: validFrom ? new Date(validFrom).toISOString() : null,
      validTo: validTo ? new Date(validTo).toISOString() : null,
      description: description.trim(),
      applicableServices: applicableServices.split(",").map(s=>s.trim()).filter(Boolean),
      createdAt: initialData.createdAt ?? new Date().toISOString(),
    };
    onSubmit(coupon);
  };

  return (
    <form className="coupon-form" onSubmit={handleSubmit}>
      {error && <div className="coupon-form__error">{error}</div>}

      <label className="coupon-form__label">Coupon Code</label>
      <input className="coupon-form__input" value={code} onChange={(e)=>setCode(e.target.value)} placeholder="e.g., HEALTH20" />

      <label className="coupon-form__label">Discount Type</label>
      <select className="coupon-form__input" value={discountType} onChange={(e)=>setDiscountType(e.target.value)}>
        <option>Percentage</option>
        <option>Fixed</option>
      </select>

      <label className="coupon-form__label">Discount Value</label>
      <input className="coupon-form__input" type="number" value={discountValue} onChange={(e)=>setDiscountValue(e.target.value)} />

      <label className="coupon-form__label">Usage Limit</label>
      <input className="coupon-form__input" type="number" value={usageLimit} onChange={(e)=>setUsageLimit(e.target.value)} />

      <label className="coupon-form__label">Valid From</label>
      <input className="coupon-form__input" type="date" value={validFrom} onChange={(e)=>setValidFrom(e.target.value)} />

      <label className="coupon-form__label">Valid To</label>
      <input className="coupon-form__input" type="date" value={validTo} onChange={(e)=>setValidTo(e.target.value)} />

      <label className="coupon-form__label">Description</label>
      <textarea className="coupon-form__textarea" value={description} onChange={(e)=>setDescription(e.target.value)} />

      <label className="coupon-form__label">Applicable Services (comma-separated)</label>
      <input className="coupon-form__input" value={applicableServices} onChange={(e)=>setApplicableServices(e.target.value)} placeholder="e.g., service1, service2" />

      <div className="coupon-form__actions">
        <button type="button" className="coupon-form__btn coupon-form__btn--cancel" onClick={onCancel}>Cancel</button>
        <button type="submit" className="coupon-form__btn coupon-form__btn--submit">Create Coupon</button>
      </div>
    </form>
  );
};

export default CouponForm;
