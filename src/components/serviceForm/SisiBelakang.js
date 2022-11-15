import { Box, TextField, Grid, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
export default function SisiBelakang() {
  return (
    <Box>
      <Grid container>
        <Box mb={2} display={`flex`} flexDirection={`column`}>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              1. Kondisi Lampu / Lamps Condition
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
      </Grid>
    </Box>
  );
}
