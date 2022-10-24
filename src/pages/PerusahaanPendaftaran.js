import React, { useState, useEffect } from "react";import Box from "@mui/material/Box";
import Home from "./Home";

//TABS
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import DaftarSatuan from "../components/DaftarSatuan";
import Navbar from "../components/Navbar";

export default function PerusahaanPendaftaran() {
  const [valueTabs, setValueTabs] = useState("satuan");

  const handleChange = (event, newValue) => {
    setValueTabs(newValue);
  };

  return (
    <Box>
      <Home>
        <Box p={3} width={"100%"} bgcolor={"primary.main"}>
          <Navbar name="Pendaftaran" />
        </Box>

        <Box mt={2} p={3}>
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={valueTabs}
              onChange={handleChange}
              aria-label="secondary tabs example"
            >
              <Tab value="satuan" label="Satuan" />
              <Tab value="batch" label="Batch" />
            </Tabs>
          </Box>

          {valueTabs === "satuan" ? (
            <>
              <DaftarSatuan />
            </>
          ) : (
            <>Batch</>
          )}
        </Box>
      </Home>
    </Box>
  );
}
