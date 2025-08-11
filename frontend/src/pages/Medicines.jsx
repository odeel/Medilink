import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import SearchableDataGrid from "../components/SearchableDataGrid/SearchableDataGrid";
import { mockProducts } from "../data/mockMedicalData";

const Medicines = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "category", headerName: "Category", width: 150 },
    { field: "price", headerName: "Price ($)", width: 120, type: "number" },
    { field: "stock", headerName: "Stock", width: 120, type: "number" },
  ];

  return (
    <Box m="20px">
      <Header title="Medicines" subtitle="Manage medicines & products" />
      <SearchableDataGrid rows={mockProducts} columns={columns} searchFields={["name","category"]} />
    </Box>
  );
};

export default Medicines;
