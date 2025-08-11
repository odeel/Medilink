import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import SearchableDataGrid from "../components/SearchableDataGrid/SearchableDataGrid";
import { mockNurses } from "../data/mockMedicalData";

const Nurses = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "fullName", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "city", headerName: "City", width: 150 },
    { field: "years", headerName: "Years Exp", width: 120, type: "number" },
    { field: "phone", headerName: "Phone", width: 150 },
  ];

  return (
    <Box m="20px">
      <Header title="Nurses" subtitle="Nursing staff" />
      <SearchableDataGrid rows={mockNurses} columns={columns} searchFields={["fullName","city","phone"]} />
    </Box>
  );
};

export default Nurses;
