import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import SearchableDataGrid from "../components/SearchableDataGrid/SearchableDataGrid";
import { mockCoupons } from "../data/mockMedicalData";

const Coupons = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "code", headerName: "Code", flex: 1, cellClassName: "name-column--cell" },
    { field: "discountPercent", headerName: "Discount (%)", width: 140, type: "number" },
    { field: "expires", headerName: "Expires", width: 140 },
  ];

  return (
    <Box m="20px">
      <Header title="Coupons" subtitle="Active coupons & promos" />
      <SearchableDataGrid rows={mockCoupons} columns={columns} searchFields={["code"]} />
    </Box>
  );
};

export default Coupons;
