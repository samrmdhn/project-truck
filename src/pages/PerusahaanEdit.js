import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";

export default function PerusahaanEdit() {
  const { id } = useParams();
  return (
    <Box>
      <Home>
        <Navbar link={`Perusahaan`} name={`Edit`} />

        <Box mt={2} p={3}>
          <Typography>Perusahaan Edit {`${id}`}</Typography>
        </Box>
      </Home>
    </Box>
  );
}
