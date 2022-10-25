import React, { useState, useEffect } from "react";import { Box, Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function PerusahaanDaftarSatuan() {
  const [mor, setMor] = useState("");
  const [name, setName] = useState("");
  const [nokontrak, setNoKontrak] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mor, name, nokontrak, email, hp);
  };

  return (
    <Box mt={2}>
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" display="flex" marginBottom={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="mor">MOR</label>
          </Grid>
          <Grid xs="10" md="10" lg="10">
            <TextField
              size="small"
              id="mor"
              onChange={(e) => setMor(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" marginBottom={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="name">Nama PT</label>
          </Grid>
          <Grid xs="10" md="10" lg="10">
            <TextField
              size="small"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" marginBottom={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="nokontrak">No Kontrak</label>
          </Grid>
          <Grid xs="10" md="10" lg="10">
            <TextField
              size="small"
              id="nokontrak"
              onChange={(e) => setNoKontrak(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" marginBottom={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="email">Email</label>
          </Grid>
          <Grid xs="10" md="10" lg="10">
            <TextField
              size="small"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" marginBottom={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="hp">HP</label>
          </Grid>
          <Grid xs="10" md="10" lg="10">
            <TextField
              size="small"
              id="hp"
              onChange={(e) => setHp(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex">
          <Grid xs="2" md="2" lg="2">
            {/* */}
          </Grid>
          <Grid
            xs="10"
            md="10"
            lg="4"
            display={"Flex"}
            justifyContent={"center"}
          >
            <Button variant="contained" type="submit">
              Daftarkan
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
