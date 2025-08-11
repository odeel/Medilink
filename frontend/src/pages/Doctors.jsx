import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import SearchableDataGrid from "../components/SearchableDataGrid/SearchableDataGrid";
import { mockDoctors } from "../data/mockMedicalData";

const Doctors = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "fullName", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "specialty", headerName: "Specialty", width: 160 },
    { field: "consultationFee", headerName: "Fee ($)", width: 120, type: "number" },
    { field: "phone", headerName: "Phone", width: 150 },
  ];

  return (
    <Box m="20px">
      <Header title="Doctors" subtitle="List of doctors" />
      <SearchableDataGrid rows={mockDoctors} columns={columns} searchFields={["fullName","specialty","phone"]} />
    </Box>
  );
};

export default Doctors;
