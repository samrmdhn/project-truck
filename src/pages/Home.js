import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Sidebar from "./../components/Sidebar";
import Navbar from "../components/Navbar";
import { Typography } from "@mui/material";

export default function Home({ children }) {
  return (
    <>
      <Box>
        <Grid container p={0}>
          <Grid xs={2} md={2} lg={2} p={0}>
            <Sidebar />
          </Grid>
          <Grid xs={10} md={10} lg={10} p={0}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
