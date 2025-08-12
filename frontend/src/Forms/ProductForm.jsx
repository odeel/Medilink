import React, { useState } from "react";
import "../styles/ProductForm.css";

/**
 * ProductForm
 * - initialData: optional for edit mode
 * - onSubmit(productObj)
 * - onCancel()
 */
const ProductForm = ({ initialData = {}, onSubmit, onCancel }) => {
  const [name, setName] = useState(initialData.name ?? "");
  const [sku, setSku] = useState(initialData.sku ?? "");
  const [category, setCategory] = useState(initialData.category ?? "Medical Devices");
  const [manufacturer, setManufacturer] = useState(initialData.manufacturer ?? "");
  const [price, setPrice] = useState(initialData.price ?? "");
  const [stock, setStock] = useState(initialData.stock ?? "");
  const [description, setDescription] = useState(initialData.description ?? "");
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl ?? "");
  const [error, setError] = useState("");

  const validate = () => {
    if (!name.trim()) return "Product name is required.";
    if (isNaN(Number(price)) || Number(price) < 0) return "Price must be a number ≥ 0.";
    if (!Number.isInteger(Number(stock)) || Number(stock) < 0) return "Stock must be an integer ≥ 0.";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    const product = {
      id: initialData.id ?? `prod_${Date.now()}`,
      name: name.trim(),
      sku: sku.trim(),
      category,
      manufacturer: manufacturer.trim(),
      price: Number(price),
      stock: Number(stock),
      description: description.trim(),
      imageUrl: imageUrl.trim(),
      createdAt: initialData.createdAt ?? new Date().toISOString(),
    };
    onSubmit(product);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      {error && <div className="product-form__error">{error}</div>}

      <label className="product-form__label">Product Name</label>
      <input className="product-form__input" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter product name" />

      <label className="product-form__label">SKU</label>
      <input className="product-form__input" value={sku} onChange={(e)=>setSku(e.target.value)} placeholder="Enter SKU" />

      <label className="product-form__label">Category</label>
      <select className="product-form__input" value={category} onChange={(e)=>setCategory(e.target.value)}>
        <option>Medical Devices</option>
        <option>Pharmaceuticals</option>
        <option>Consumables</option>
        <option>Supplies</option>
      </select>

      <label className="product-form__label">Manufacturer</label>
      <input className="product-form__input" value={manufacturer} onChange={(e)=>setManufacturer(e.target.value)} placeholder="Enter manufacturer" />

      <label className="product-form__label">Price</label>
      <input className="product-form__input" type="number" step="0.01" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter price" />

      <label className="product-form__label">Stock Quantity</label>
      <input className="product-form__input" type="number" value={stock} onChange={(e)=>setStock(e.target.value)} placeholder="Enter stock quantity" />

      <label className="product-form__label">Description</label>
      <textarea className="product-form__textarea" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Enter product description" />

      <label className="product-form__label">Image URL</label>
      <input className="product-form__input" value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} placeholder="Enter image URL" />

      <div className="product-form__actions">
        <button type="button" className="product-form__btn product-form__btn--cancel" onClick={onCancel}>Cancel</button>
        <button type="submit" className="product-form__btn product-form__btn--submit">{initialData.id ? "Save" : "Add Product"}</button>
      </div>
    </form>
  );
};

export default ProductForm;
