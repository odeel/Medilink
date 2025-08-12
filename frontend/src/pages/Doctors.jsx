import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import SearchableDataGrid from "../components/SearchableDataGrid";
import { mockDoctors } from "../data/mock";

import Modal from "../components/Modal";
import DoctorForm from "../Forms/DoctorForm";

const Doctors = () => {
  const [rows, setRows] = useState(
    mockDoctors.map((d) => ({
      ...d,
      phone: d.phone ?? (d.phoneNumbers && d.phoneNumbers[0]) ?? "",
      specialty: Array.isArray(d.specialty) ? d.specialty.join(", ") : d.specialty ?? "",
    }))
  );

  const [isOpen, setIsOpen] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "fullName", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "specialty", headerName: "Specialty", width: 160 },
    { field: "consultationFee", headerName: "Fee ($)", width: 120, type: "number" },
    { field: "phone", headerName: "Phone", width: 150 },
  ];

  const handleAddDoctor = (doc) => {
    const normalized = {
      ...doc,
      phone: doc.phone ?? (doc.phoneNumbers && doc.phoneNumbers[0]) ?? "",
      specialty: Array.isArray(doc.specialty) ? doc.specialty.join(", ") : doc.specialty ?? "",
    };
    setRows((prev) => [normalized, ...prev]);
    setIsOpen(false);
  };

  return (
    <Box m="20px">
      <Header title="Doctors" subtitle="List of doctors" />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ flex: 1 }} />
        <div>
          <button onClick={() => setIsOpen(true)} style={{ padding: "8px 12px", borderRadius: 6, border: "none", background: "#2f9d87", color: "#fff", cursor: "pointer", fontWeight: 600 }}>
            + Add Doctor
          </button>
        </div>
      </div>

      <SearchableDataGrid rows={rows} columns={columns} searchFields={["fullName", "specialty", "phone"]} />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Add Doctor">
        <DoctorForm onSubmit={handleAddDoctor} onCancel={() => setIsOpen(false)} />
      </Modal>
    </Box>
  );
};

export default Doctors;
