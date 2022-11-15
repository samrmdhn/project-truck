import { Box, TextField, Grid, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
export default function SisiDalamKendaraan() {
  return (
    <Box>
      <Box mb={2} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            Kunci Kontak Posisi "OFF" / Ignation Key "Off"
          </FormLabel>
        </FormControl>
      </Box>

      <Box mb={2} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            1. Speling Pedal Kopling / Clutch Pedal Speling
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="R" control={<Radio />} label="R" />
            <FormControlLabel value="G" control={<Radio />} label="G" />
            <FormControlLabel value="P" control={<Radio />} label="P" />
            <FormControlLabel value="V" control={<Radio />} label="V" />
            <FormControlLabel value="X" control={<Radio />} label="X" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Rekomendasi" />
      </Box>

      <Box mb={2} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            2. Speling Pedal Rem / Brake Pedal Speling
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="R" control={<Radio />} label="R" />
            <FormControlLabel value="G" control={<Radio />} label="G" />
            <FormControlLabel value="P" control={<Radio />} label="P" />
            <FormControlLabel value="V" control={<Radio />} label="V" />
            <FormControlLabel value="X" control={<Radio />} label="X" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Rekomendasi" />
      </Box>

      <Box mb={2} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            3. Speling Roda Kemudi / Steering Wheel Speling
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="R" control={<Radio />} label="R" />
            <FormControlLabel value="G" control={<Radio />} label="G" />
            <FormControlLabel value="P" control={<Radio />} label="P" />
            <FormControlLabel value="V" control={<Radio />} label="V" />
            <FormControlLabel value="X" control={<Radio />} label="X" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Rekomendasi" />
      </Box>

      <Box mb={2} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            4. Sabuk Pengaman / Safety Belt
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="R" control={<Radio />} label="R" />
            <FormControlLabel value="G" control={<Radio />} label="G" />
            <FormControlLabel value="P" control={<Radio />} label="P" />
            <FormControlLabel value="V" control={<Radio />} label="V" />
            <FormControlLabel value="X" control={<Radio />} label="X" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Rekomendasi" />
      </Box>

      <Box mb={2} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            5. Peratalan Kendaraan Lainnya / Others Equipment
          </FormLabel>
        </FormControl>

        <ul style={{ color: "grey" }}>
          <li style={{ marginBottom: "10px" }}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                <Typography>APAR (Alat Pemadam Api Ringan)</Typography>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="R" control={<Radio />} label="R" />
                <FormControlLabel value="G" control={<Radio />} label="G" />
                <FormControlLabel value="P" control={<Radio />} label="P" />
                <FormControlLabel value="V" control={<Radio />} label="V" />
                <FormControlLabel value="X" control={<Radio />} label="X" />
              </RadioGroup>
            </FormControl>
            <TextField placeholder="Rekomendasi" size="small" />
          </li>

          <li>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                <Typography>Kotak P3K</Typography>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="R" control={<Radio />} label="R" />
                <FormControlLabel value="G" control={<Radio />} label="G" />
                <FormControlLabel value="P" control={<Radio />} label="P" />
                <FormControlLabel value="V" control={<Radio />} label="V" />
                <FormControlLabel value="X" control={<Radio />} label="X" />
              </RadioGroup>
            </FormControl>
            <TextField placeholder="Rekomendasi" size="small" />
          </li>

          <li>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                <Typography>Segitiga Pengaman</Typography>
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="R" control={<Radio />} label="R" />
                <FormControlLabel value="G" control={<Radio />} label="G" />
                <FormControlLabel value="P" control={<Radio />} label="P" />
                <FormControlLabel value="V" control={<Radio />} label="V" />
                <FormControlLabel value="X" control={<Radio />} label="X" />
              </RadioGroup>
            </FormControl>
            <TextField placeholder="Rekomendasi" size="small" />
          </li>
        </ul>
      </Box>

      <Box mb={2} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            Kunci Kontak Posisi "ON" / Ignation Key "ON"
          </FormLabel>
        </FormControl>
      </Box>

      <Box mb={2} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            1. Fungsi Switch Elektronik / Electrical Switch Function
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="R" control={<Radio />} label="R" />
            <FormControlLabel value="G" control={<Radio />} label="G" />
            <FormControlLabel value="P" control={<Radio />} label="P" />
            <FormControlLabel value="V" control={<Radio />} label="V" />
            <FormControlLabel value="X" control={<Radio />} label="X" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Rekomendasi" />
      </Box>

      <Box mb={2} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            2. Lampu Indikator / Indication Lamps On Instrument Panel
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="R" control={<Radio />} label="R" />
            <FormControlLabel value="G" control={<Radio />} label="G" />
            <FormControlLabel value="P" control={<Radio />} label="P" />
            <FormControlLabel value="V" control={<Radio />} label="V" />
            <FormControlLabel value="X" control={<Radio />} label="X" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Rekomendasi" />
      </Box>

      <Box mb={2} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            Saat Mesin Hidup / Engine On
          </FormLabel>
        </FormControl>
      </Box>

      <Box mb={2} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            1. Lampu Indikator / Indicator Lamps On Instrument Panel
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="R" control={<Radio />} label="R" />
            <FormControlLabel value="G" control={<Radio />} label="G" />
            <FormControlLabel value="P" control={<Radio />} label="P" />
            <FormControlLabel value="V" control={<Radio />} label="V" />
            <FormControlLabel value="X" control={<Radio />} label="X" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Rekomendasi" />
      </Box>

      <Box mb={2} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            2. Tekanan Pompa Vacuum / Vacuum Pump
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="R" control={<Radio />} label="R" />
            <FormControlLabel value="G" control={<Radio />} label="G" />
            <FormControlLabel value="P" control={<Radio />} label="P" />
            <FormControlLabel value="V" control={<Radio />} label="V" />
            <FormControlLabel value="X" control={<Radio />} label="X" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Rekomendasi" />
      </Box>

      <Box mb={2} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            3. Fungsi Rem Gas Buang / Exhaust Brake Function
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="R" control={<Radio />} label="R" />
            <FormControlLabel value="G" control={<Radio />} label="G" />
            <FormControlLabel value="P" control={<Radio />} label="P" />
            <FormControlLabel value="V" control={<Radio />} label="V" />
            <FormControlLabel value="X" control={<Radio />} label="X" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Rekomendasi" />
      </Box>

      <Box mb={2} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            4. Fungsi Rem Kaki / Service Brake Function
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="R" control={<Radio />} label="R" />
            <FormControlLabel value="G" control={<Radio />} label="G" />
            <FormControlLabel value="P" control={<Radio />} label="P" />
            <FormControlLabel value="V" control={<Radio />} label="V" />
            <FormControlLabel value="X" control={<Radio />} label="X" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Rekomendasi" />
      </Box>

      <Box mb={2} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            5. Fungsi Rem Parkir / Parking Brake Function
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="R" control={<Radio />} label="R" />
            <FormControlLabel value="G" control={<Radio />} label="G" />
            <FormControlLabel value="P" control={<Radio />} label="P" />
            <FormControlLabel value="V" control={<Radio />} label="V" />
            <FormControlLabel value="X" control={<Radio />} label="X" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Rekomendasi" />
      </Box>

      <Box mb={2} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            6. Fungsi Klakson / Horn Function
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="R" control={<Radio />} label="R" />
            <FormControlLabel value="G" control={<Radio />} label="G" />
            <FormControlLabel value="P" control={<Radio />} label="P" />
            <FormControlLabel value="V" control={<Radio />} label="V" />
            <FormControlLabel value="X" control={<Radio />} label="X" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Rekomendasi" />
      </Box>

      <Box mb={2} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            7. Fungsi Lampu - Lampu / Lights Function
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="R" control={<Radio />} label="R" />
            <FormControlLabel value="G" control={<Radio />} label="G" />
            <FormControlLabel value="P" control={<Radio />} label="P" />
            <FormControlLabel value="V" control={<Radio />} label="V" />
            <FormControlLabel value="X" control={<Radio />} label="X" />
          </RadioGroup>
        </FormControl>
        <TextField placeholder="Rekomendasi" />
      </Box>
    </Box>
  );
}
