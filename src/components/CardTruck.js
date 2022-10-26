import {
  Button,
  CardContent,
  Typography,
  Box,
  Avatar,
  Divider,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "./Navbar";

export default function CariTruck() {
  return (
    <Box>
      <Home>
        <Navbar link={`Truck`} name={`List`} />
      </Home>
      <h5>Testt</h5>
    </Box>
  );
}
