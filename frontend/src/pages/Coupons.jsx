import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import SearchableDataGrid from "../components/SearchableDataGrid";
import { mockCoupons } from "../data/mock";

import Modal from "../components/Modal";
import CouponForm from "../Forms/CouponForm";

const Coupons = () => {
  const [rows, setRows] = useState(
    mockCoupons.map((c) => ({
      ...c,
      // normalize: discountPercent and expires string for grid columns
      discountPercent:
        c.discountPercent ??
        (c.discountType === "Percentage" ? c.discountValue : c.discountValue) ??
        0,
      expires: c.validTo ? new Date(c.validTo).toLocaleDateString() : c.expires ?? "",
    }))
  );

  const [isOpen, setIsOpen] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "code", headerName: "Code", flex: 1, cellClassName: "name-column--cell" },
    { field: "discountPercent", headerName: "Discount (%)", width: 140, type: "number" },
    { field: "expires", headerName: "Expires", width: 140 },
  ];

  const handleAddCoupon = (coupon) => {
    const normalized = {
      ...coupon,
      discountPercent: coupon.discountType === "Percentage" ? coupon.discountValue : coupon.discountValue,
      expires: coupon.validTo ? new Date(coupon.validTo).toLocaleDateString() : "",
    };
    setRows((prev) => [normalized, ...prev]);
    setIsOpen(false);
  };

  return (
    <Box m="20px">
      <Header title="Coupons" subtitle="Active coupons & promos" />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ flex: 1 }} />
        <div>
          <button onClick={() => setIsOpen(true)} style={{ padding: "8px 12px", borderRadius: 6, border: "none", background: "#2f9d87", color: "#fff", cursor: "pointer", fontWeight: 600 }}>
            + Create Coupon
          </button>
        </div>
      </div>

      <SearchableDataGrid rows={rows} columns={columns} searchFields={["code"]} />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Create Coupon">
        <CouponForm onSubmit={handleAddCoupon} onCancel={() => setIsOpen(false)} />
      </Modal>
    </Box>
  );
};

export default Coupons;
