import * as React from "react";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Home from "./pages/Home";
import PerusahaanList from "./pages/PerusahaanList";
import PerusahaanPendaftaran from "./pages/PerusahaanPendaftaran";
import PerusahaanEdit from "./pages/PerusahaanEdit";
import DriverList from "./pages/DriverList";
import Dashboard from "./pages/Dashboard";
import DriverPendaftaran from "./pages/DriverPendaftaran";
import TruckList from "./pages/TruckList";
import ServiceForm from "./pages/ServiceForm";
import DriverProfile from "./pages/DriverProfile";

export default function BasicGrid() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* PERUSAHAAN */}
          <Route path="perusahaan/list" element={<PerusahaanList />} />
          <Route
            path="perusahaan/pendaftaran"
            element={<PerusahaanPendaftaran />}
          />
          <Route path="perusahaan/edit/:id" element={<PerusahaanEdit />} />

          {/* DRIVER */}
          <Route path="driver/list" element={<DriverList />} />
          <Route path="driver/pendaftaran" element={<DriverPendaftaran />} />
          <Route path="driver/profile/:id" element={<DriverProfile />} />

          {/* TRUCK */}
          <Route path="truck/list" element={<TruckList />} />

          {/* Service */}
          <Route path="service/form" element={<ServiceForm />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
