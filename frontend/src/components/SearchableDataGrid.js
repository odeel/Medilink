// src/components/SearchableDataGrid/SearchableDataGrid.jsx
import React, { useMemo, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../Theme";
import "../styles/SearchableDataGrid.css";

const SearchableDataGrid = ({ rows, columns, searchFields = [], height = "60vh", pageSize = 10 }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [query, setQuery] = useState("");

  // filteredRows recomputed only when rows or query change
  const filteredRows = useMemo(() => {
    if (!query) return rows;
    const q = query.toLowerCase();
    return rows.filter((r) =>
      searchFields.some((f) => {
        const v = (r[f] ?? "").toString().toLowerCase();
        return v.includes(q);
      })
    );
  }, [rows, query, searchFields]);

  return (
    <Box className="sdg-wrapper" sx={{ m: "20px 0 0 0" }}>
      <div className="sdg-search-row">
        <input
          className="sdg-search-input"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="sdg-count" style={{ color: colors.grey[100] }}>{filteredRows.length} results</div>
      </div>

      <div style={{ height: height, width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
          sx={{
            "& .MuiDataGrid-root": { border: "none" },
            "& .MuiDataGrid-cell": { borderBottom: "none" },
            "& .MuiDataGrid-columnHeaders": { backgroundColor: colors.blueAccent ? colors.blueAccent[700] : colors.primary[600], borderBottom: "none" },
            "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
            "& .MuiDataGrid-footerContainer": { borderTop: "none", backgroundColor: colors.blueAccent ? colors.blueAccent[700] : colors.primary[600] },
            "& .name-column--cell": { color: colors.greenAccent[300] },
          }}
        />
      </div>
    </Box>
  );
};

export default SearchableDataGrid;
