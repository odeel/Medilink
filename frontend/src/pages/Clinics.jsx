import React, { useState } from "react";
import { useTheme, Box } from "@mui/material";
import { tokens } from "../Theme";
import Header from "../components/Header";
import SearchableDataGrid from "../components/SearchableDataGrid";
import { mockClinics } from "../data/mock";

// Modal & ClinicForm we created earlier
import Modal from "../components/Modal";
import ClinicForm from "../Forms/ClinicForm";

const Clinics = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // keep a local rows state so we can add new clinics dynamically
  const [rows, setRows] = useState(
    mockClinics.map((c) => ({
      ...c,
      // ensure DataGrid columns exist: phone and city (normalize different mock shapes)
      phone:
        c.phone ||
        (c.phoneNumbers && Array.isArray(c.phoneNumbers) && c.phoneNumbers[0]) ||
        "",
      city: c.city ?? "",
    }))
  );

  // modal open/close state
  const [isOpen, setIsOpen] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "clinicName", headerName: "Clinic Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "city", headerName: "City", width: 150 },
    { field: "beds", headerName: "Beds", width: 100, type: "number" },
    { field: "phone", headerName: "Phone", width: 160 },
    { field: "email", headerName: "Email", flex: 1 },
  ];

  // called when the form submits
  const handleAddClinic = (newClinic) => {
    const normalized = {
      ...newClinic,
      phone:
        newClinic.phone ||
        (newClinic.phoneNumbers && Array.isArray(newClinic.phoneNumbers) && newClinic.phoneNumbers[0]) ||
        "",
      city: newClinic.city ?? newClinic.location ?? "",
    };

    // add the new item at the top
    setRows((prev) => [normalized, ...prev]);
    // close the modal
    setIsOpen(false);
  };

  return (
    <Box m="20px">
      <Header title="Clinics" subtitle="List & manage clinics" />

      {/* top row: left = placeholder (search area), right = Add button */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ flex: 1 }}>{/* leave space so button sits to the right of top area */}</div>

        <div>
          <button
            onClick={() => setIsOpen(true)}
            style={{
              padding: "8px 12px",
              borderRadius: 6,
              border: "none",
              background: "#2f9d87",
              color: "#fff",
              cursor: "pointer",
              fontWeight: 600,
            }}
            aria-label="Add Clinic"
            title="Add Clinic"
          >
            + Add Clinic
          </button>
        </div>
      </div>

      {/* DataGrid uses local rows state now */}
      <SearchableDataGrid rows={rows} columns={columns} searchFields={["clinicName", "city", "phone", "email"]} height="60vh" />

      {/* Modal + Form */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Add Clinic">
        <ClinicForm onSubmit={handleAddClinic} onCancel={() => setIsOpen(false)} />
      </Modal>
    </Box>
  );
};

export default Clinics;
