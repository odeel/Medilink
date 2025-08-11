import React from "react";
import { useTheme, Box } from "@mui/material";
import { tokens } from "../theme";
import Header from "../components/Header/Header"; // adjust path
import SearchableDataGrid from "../components/SearchableDataGrid/SearchableDataGrid";
import { mockClinics } from "../data/mockMedicalData";

const Clinics = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "clinicName", headerName: "Clinic Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "city", headerName: "City", width: 150 },
    { field: "beds", headerName: "Beds", width: 100, type: "number" },
    { field: "phone", headerName: "Phone", width: 160 },
    { field: "email", headerName: "Email", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="Clinics" subtitle="List & manage clinics" />
      <SearchableDataGrid rows={mockClinics} columns={columns} searchFields={["clinicName","city","phone","email"]} height="60vh" />
    </Box>
  );
};

export default Clinics;
