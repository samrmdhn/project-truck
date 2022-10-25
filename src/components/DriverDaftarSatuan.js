import {  FormControl,
  Grid,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  Input,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";

import React, { useState } from "react";

export default function DriveDaftarSatuan() {
  const [mor, setMor] = useState("");
  const [kelamin, setKelamin] = useState("Laki-laki");

  const handleChange = (e) => {
    setKelamin(e.target.value);
  };

  return (
    <Box mt={2}>
      <form>
        <Grid container alignItems="center" display="flex" mb={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="mor">Nama Lengkap</label>
          </Grid>
          <Grid xs="10" md="10" lg="10">
            <TextField
              size="small"
              id="mor"
              onChange={(e) => setMor(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" mb={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="mor">Tanggal Lahir</label>
          </Grid>
          <Grid xs="10" md="10" lg="10">
            <TextField
              type="date"
              size="small"
              id="mor"
              onChange={(e) => setMor(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" mb={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="mor">Jenis Kelamin</label>
          </Grid>
          <Grid xs="10" md="10" lg="10">
            <RadioGroup row>
              <FormControlLabel
                value="Laki-laki"
                control={<Radio />}
                label="Laki-laki"
                checked={kelamin === "Laki-laki"}
                onChange={handleChange}
              />
              <FormControlLabel
                value="Perempuan"
                control={<Radio />}
                label="Perempuan"
                onChange={handleChange}
                checked={kelamin === "Perempuan"}
              />
            </RadioGroup>
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" mb={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="mor">Email</label>
          </Grid>
          <Grid xs="10" md="10" lg="10">
            <TextField
              size="small"
              id="mor"
              onChange={(e) => setMor(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" mb={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="mor">Nomor Handphone</label>
          </Grid>
          <Grid xs="10" md="10" lg="10">
            <TextField
              size="small"
              id="mor"
              onChange={(e) => setMor(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" mb={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="mor">Foto</label>
          </Grid>
          <Grid xs="10" md="10" lg="10">
            <TextField
              multiline={false}
              type="file"
              size="small"
              id="mor"
              onChange={(e) => setMor(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" mb={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="mor">KTP</label>
          </Grid>
          <Grid xs="10" md="10" lg="10">
            <TextField
              size="small"
              type="file"
              id="mor"
              onChange={(e) => setMor(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container alignItems="center" display="flex" mb={2}>
          <Grid xs="2" md="2" lg="2">
            <label for="mor">Kontrak</label>
          </Grid>
          <Grid xs="10" md="10" lg="10">
            <TextField
              type="file"
              size="small"
              id="mor"
              onChange={(e) => setMor(e.target.value)}
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
            lg="6"
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
