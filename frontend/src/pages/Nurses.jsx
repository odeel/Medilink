import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import SearchableDataGrid from "../components/SearchableDataGrid";
import { mockNurses } from "../data/mock";

import Modal from "../components/Modal";
import NurseForm from "../Forms/NurseForm";

const Nurses = () => {
  const [rows, setRows] = useState(
    mockNurses.map((n) => ({
      ...n,
      phone: n.phone ?? (n.phoneNumbers && n.phoneNumbers[0]) ?? "",
      years: n.experienceYears ?? n.years ?? 0,
    }))
  );

  const [isOpen, setIsOpen] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "fullName", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "city", headerName: "City", width: 150 },
    { field: "years", headerName: "Years Exp", width: 120, type: "number" },
    { field: "phone", headerName: "Phone", width: 150 },
  ];

  const handleAddNurse = (nurse) => {
    const normalized = {
      ...nurse,
      phone: nurse.phone ?? (nurse.phoneNumbers && nurse.phoneNumbers[0]) ?? "",
      years: nurse.experienceYears ?? 0,
    };
    setRows((prev) => [normalized, ...prev]);
    setIsOpen(false);
  };

  return (
    <Box m="20px">
      <Header title="Nurses" subtitle="Nursing staff" />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ flex: 1 }} />
        <div>
          <button onClick={() => setIsOpen(true)} style={{ padding: "8px 12px", borderRadius: 6, border: "none", background: "#2f9d87", color: "#fff", cursor: "pointer", fontWeight: 600 }}>
            + Add Nurse
          </button>
        </div>
      </div>

      <SearchableDataGrid rows={rows} columns={columns} searchFields={["fullName", "city", "phone"]} />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Add Nurse">
        <NurseForm onSubmit={handleAddNurse} onCancel={() => setIsOpen(false)} />
      </Modal>
    </Box>
  );
};

export default Nurses;
