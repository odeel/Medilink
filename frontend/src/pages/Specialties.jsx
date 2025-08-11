import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import SearchableDataGrid from "../components/SearchableDataGrid/SearchableDataGrid";
import { mockSpecialties } from "../data/mockMedicalData";

const Specialties = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Specialty", flex: 1, cellClassName: "name-column--cell" },
    { field: "description", headerName: "Description", flex: 2 },
  ];
  return (
    <Box m="20px">
      <Header title="Specialties" subtitle="Available clinic specialties" />
      <SearchableDataGrid rows={mockSpecialties} columns={columns} searchFields={["name","description"]} />
    </Box>
  );
};
export default Specialties;
