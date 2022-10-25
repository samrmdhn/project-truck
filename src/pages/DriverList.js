import Home from "./Home";import Navbar from "../components/Navbar";
import { Box, Card, CardContent } from "@mui/material";

export default function DriverList() {
  return (
    <Box>
      <Home>
        <Navbar link={`Driver`} name={`List`} />
        <Box backgroundColor={"rgb(244, 244, 244)"} minHeight={"90vh"}>
          <Box p={3}>
            <Card>
              <CardContent>lorem20r390203</CardContent>
            </Card>
          </Box>
        </Box>
      </Home>
    </Box>
  );
}
