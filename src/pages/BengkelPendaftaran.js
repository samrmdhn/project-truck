import { Box, Card, CardContent, Tabs, Tab } from "@mui/material";
import Navbar from "../components/Navbar";
import Home from "./Home";

export default function BengkelPendaftaran() {
  return (
    <Box>
      <Home>
        <Navbar title={`Bengkel`} name={`Pendaftaran`} />
        <Box p={3}></Box>
      </Home>
    </Box>
  );
}
