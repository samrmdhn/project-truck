import React from "react";import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "./../components/Sidebar";
import Home from "./Home";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Navbar from "../components/Navbar";

export default function PerusahaanList() {
  return (
    <Box>
      <Home>
        <Box p={3} width={"100%"} bgcolor={"primary.main"}>
          <Navbar name="List" />
        </Box>
        <Box mt={2}>Test</Box>
      </Home>
    </Box>
  );
}
