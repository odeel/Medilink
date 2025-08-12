import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import SearchableDataGrid from "../components/SearchableDataGrid";
import { mockProducts } from "../data/mock";

import Modal from "../components/Modal";
import MedicineForm from "../Forms/MedicineForm";

const Medicines = () => {
  const [rows, setRows] = useState(
    mockProducts.map((p) => ({
      ...p,
      price: Number(p.price) ?? 0,
      stock: Number(p.stock) ?? 0,
    }))
  );

  const [isOpen, setIsOpen] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "category", headerName: "Category", width: 150 },
    { field: "price", headerName: "Price ($)", width: 120, type: "number" },
    { field: "stock", headerName: "Stock", width: 120, type: "number" },
  ];

  const handleAddMedicine = (med) => {
    const normalized = {
      ...med,
      price: Number(med.price) || 0,
      stock: Number(med.stock) || 0,
    };
    setRows((prev) => [normalized, ...prev]);
    setIsOpen(false);
  };

  return (
    <Box m="20px">
      <Header title="Medicines" subtitle="Manage medicines & products" />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ flex: 1 }} />
        <div>
          <button onClick={() => setIsOpen(true)} style={{ padding: "8px 12px", borderRadius: 6, border: "none", background: "#2f9d87", color: "#fff", cursor: "pointer", fontWeight: 600 }}>
            + Add Medicine
          </button>
        </div>
      </div>

      <SearchableDataGrid rows={rows} columns={columns} searchFields={["name", "category"]} />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Add Medicine">
        <MedicineForm onSubmit={handleAddMedicine} onCancel={() => setIsOpen(false)} />
      </Modal>
    </Box>
  );
};

export default Medicines;
