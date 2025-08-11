import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import SearchableDataGrid from "../components/SearchableDataGrid/SearchableDataGrid";
import { mockFaqs } from "../data/mockMedicalData";

const FAQs = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "question", headerName: "Question", flex: 1, cellClassName: "name-column--cell" },
    { field: "answer", headerName: "Answer", flex: 2 },
  ];

  return (
    <Box m="20px">
      <Header title="FAQs" subtitle="Frequently asked questions" />
      <SearchableDataGrid rows={mockFaqs} columns={columns} searchFields={["question","answer"]} />
    </Box>
  );
};

export default FAQs;
