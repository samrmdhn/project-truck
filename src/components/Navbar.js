import Typography from "@mui/material/Typography";import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function Navbar({ name }) {
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" separator="›">
        <Link underline="hover" color="white" href="/">
          Perusahaan
        </Link>
        <Typography color="white">{name}</Typography>
      </Breadcrumbs>
    </div>
  );
}
