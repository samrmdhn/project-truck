import { Box, TextField, Grid, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
export default function SisiKiriDepan() {
  return (
    <Box>
      <Box mb={2} display={`flex`} flexDirection={`column`}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            1. Kondisi Fisik Kabin / Cabin
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
            2. Kondisi Kaca Pintu / Window Glass
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
            3. Kondisi Kaca Spion / Mirror
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
            4. Kondisi Fisik Ban / Tires Condition
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
            5. Kekencangan Baut Pengikat Roda / Wheel Nuts
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
            6. Kondisi Pengunci Kabin / Cabin Lock Condition
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
            7. Ketinggian Oli Power Steering / Power Steering Oil Level
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
