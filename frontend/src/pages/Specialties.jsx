import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import SearchableDataGrid from "../components/SearchableDataGrid";
import { mockSpecialties } from "../data/mock";

import Modal from "../components/Modal";
import SpecialtyForm from "../Forms/SpecialtyForm";

const Specialties = () => {
  const [rows, setRows] = useState(mockSpecialties);
  const [isOpen, setIsOpen] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Specialty", flex: 1, cellClassName: "name-column--cell" },
    { field: "description", headerName: "Description", flex: 2 },
  ];

  const handleAddSpecialty = (spec) => {
    setRows((prev) => [spec, ...prev]);
    setIsOpen(false);
  };

  return (
    <Box m="20px">
      <Header title="Specialties" subtitle="Available clinic specialties" />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ flex: 1 }} />
        <div>
          <button onClick={() => setIsOpen(true)} style={{ padding: "8px 12px", borderRadius: 6, border: "none", background: "#2f9d87", color: "#fff", cursor: "pointer", fontWeight: 600 }}>
            + Add Specialty
          </button>
        </div>
      </div>

      <SearchableDataGrid rows={rows} columns={columns} searchFields={["name", "description"]} />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Add Specialty">
        <SpecialtyForm onSubmit={handleAddSpecialty} onCancel={() => setIsOpen(false)} />
      </Modal>
    </Box>
  );
};

export default Specialties;
