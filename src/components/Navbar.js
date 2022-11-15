import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export default function Navbar({ link, name }) {
  return (
    <Box p={3}>
      <Breadcrumbs aria-label="breadcrumb" separator="›" color="black">
        <Link underline="hover" color="black" href="/">
          {link}
        </Link>

        <Typography>{name}</Typography>
      </Breadcrumbs>
    </Box>
  );
}
