import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";

const Overlook = () => {
  return (
    <Box>
      <Header title="Overlook" subtitle="Quick stats & KPIs" />
      <Typography>Welcome to the admin overlook (dashboard). You can add charts here later.</Typography>
    </Box>
  );
};

export default Overlook;
