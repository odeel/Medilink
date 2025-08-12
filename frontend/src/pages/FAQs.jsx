import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import SearchableDataGrid from "../components/SearchableDataGrid";
import { mockFaqs } from "../data/mock";

import Modal from "../components/Modal";
import FAQForm from "../Forms/FAQForm";

const FAQs = () => {
  const [rows, setRows] = useState(mockFaqs);
  const [isOpen, setIsOpen] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "question", headerName: "Question", flex: 1, cellClassName: "name-column--cell" },
    { field: "answer", headerName: "Answer", flex: 2 },
  ];

  const handleAddFAQ = (faq) => {
    setRows((prev) => [faq, ...prev]);
    setIsOpen(false);
  };

  return (
    <Box m="20px">
      <Header title="FAQs" subtitle="Frequently asked questions" />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ flex: 1 }} />
        <div>
          <button onClick={() => setIsOpen(true)} style={{ padding: "8px 12px", borderRadius: 6, border: "none", background: "#2f9d87", color: "#fff", cursor: "pointer", fontWeight: 600 }}>
            + Add FAQ
          </button>
        </div>
      </div>

      <SearchableDataGrid rows={rows} columns={columns} searchFields={["question", "answer"]} />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Add FAQ">
        <FAQForm onSubmit={handleAddFAQ} onCancel={() => setIsOpen(false)} />
      </Modal>
    </Box>
  );
};

export default FAQs;
