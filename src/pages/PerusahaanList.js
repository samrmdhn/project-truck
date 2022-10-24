import React from "react";import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Home from "./Home";
import Navbar from "../components/Navbar";
import { Button, TextField, Typography } from "@mui/material";
import CardPerusahaan from "../components/CardPerusahaan";

const DUMMY_LIST_PERUSAHAAN = [
  {
    name: "PT SINAR MENTARI",
    contract: "Contract/abcd/234cf",
    phone: "082523952352",
    status: true,
  },
  {
    name: "PT GERHANA BULAN",
    contract: "Contract/efhwf/webweb",
    phone: "08235235",
    status: false,
  },
  {
    name: "PT INDAH PERKASA",
    contract: "Contract/ewkgl/2wvwe",
    phone: "08982948294",
    status: true,
  },
  {
    name: "PT ANGIN RIBUT",
    contract: "Contract/wefwe/239829ch",
    phone: "087878909097",
    status: false,
  },
];

export default function PerusahaanList() {
  return (
    <Box>
      <Home>
        <Box p={3} width={"100%"} bgcolor={"primary.main"}>
          <Navbar name="List" />
        </Box>

        <Box mt={2} p={3}>
          <Typography>Cari Perusahaan</Typography>
          <Grid container padding={0} marginTop={1}>
            <Grid md={4}>
              <TextField size="small" fullWidth={true} />
            </Grid>

            <Grid md={2}>
              <Button variant="contained">Cari</Button>
            </Grid>
          </Grid>
        </Box>

        <Box p={3}>
          <Grid container padding={0}>
            {DUMMY_LIST_PERUSAHAAN.map((list, index) => {
              return (
                <>
                  <Grid md={4}>
                    <CardPerusahaan
                      key={index}
                      name={list.name}
                      contract={list.contract}
                      phone={list.phone}
                      status={list.status}
                    />
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Box>
      </Home>
    </Box>
  );
}
