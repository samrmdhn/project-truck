import { Box, TextField, Grid, Typography } from "@mui/material";import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
export default function SisiBawah() {
  return (
    <Box>
      <Box mb={2} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ fontWeight: "bolder" }}
          >
            1. Kondisi Sistem Kemudi / Steering Condition
          </FormLabel>
        </FormControl>

        <ul style={{ color: "grey" }}>
          <li style={{ marginBottom: "10px" }}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                <Typography>Kebocoran Oli / Oil Leak</Typography>
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
                <Typography>Tie Rod</Typography>
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
                <Typography>Drag Link</Typography>
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
                <Typography>Steering Knucle</Typography>
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
                <Typography>King Pin</Typography>
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
            2. Kondisi Rem Utama Dan Rem Parkir / Service Brake & Parking Brake
            Condition
          </FormLabel>
        </FormControl>

        <ul style={{ color: "grey" }}>
          <li style={{ marginBottom: "10px" }}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                <Typography>Pipa Hydralic</Typography>
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
                <Typography>Ketebalan Kampas Rem</Typography>
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
                <Typography>Wheel Sylinder</Typography>
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
            3. Kondisi Sistem Kopling / Clutch System Condition
          </FormLabel>
        </FormControl>

        <ul style={{ color: "grey" }}>
          <li>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                <Typography>Pipa dan selang minyak kopling</Typography>
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
            4. Kondisi Sumbu Depan Dan Suspensi / Fron Axle Dan Suspension
            Condition
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
            5. Kondisi Sumbu Belakang Dan Suspensi / Real Axle Dan Suspension
            Condition
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
