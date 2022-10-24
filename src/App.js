import * as React from "react";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Home from "./pages/Home";
import PerusahaanList from "./pages/PerusahaanList";
import PerusahaanPendaftaran from "./pages/PerusahaanPendaftaran";

export default function BasicGrid() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="posts/:id" element={<Posts />}></Route>*/}
          <Route path="perusahaan/list" element={<PerusahaanList />} />
          <Route
            path="perusahaan/pendaftaran"
            element={<PerusahaanPendaftaran />}
          />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
