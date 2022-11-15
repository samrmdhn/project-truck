import Box from "@mui/material/Box";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Home from "./Home";
import CardPerusahaan from "../components/CardPerusahaan";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import IconButton from "@mui/material/IconButton";

const DUMMY_LIST_PERUSAHAAN = [
  {
    id: 1,
    name: "MITSUBISHI",
    contract: "Contract/abcd/234cf",
    phone: "082523952352",
    status: true,
  },
  {
    id: 2,
    name: "HONDA",
    contract: "Contract/efhwf/webweb",
    phone: "08235235",
    status: false,
  },
  {
    id: 3,
    name: "MITSUBISHI",
    contract: "Contract/ewkgl/2wvwe",
    phone: "08982948294",
    status: true,
  },
  {
    id: 4,
    name: "HONDA",
    contract: "Contract/wefwe/239829ch",
    phone: "087878909097",
    status: false,
  },
];

export default function TruckList() {
  return (
    <Box>
      <Home>
        <Navbar link="Truck" name="List" />
        <Box backgroundColor={"rgb(244, 244, 244)"} minHeight={"90vh"}>
          <Box p={3}>
            <Box
              sx={{
                background:
                  "linear-gradient(90deg, rgba(27,56,132,1) 0%, rgba(45,60,123,1) 20%, rgba(56,64,115,1) 40%, rgba(65,68,106,1) 60%, rgba(71,72,98,1) 80%, rgba(76,76,89,1) 100%)",
                borderRadius: 3,
                width: "100%",
              }}
            >
              <Box sx={{ padding: 5 }}>
                <Typography
                  sx={{ color: "white", fontWeight: "bolder", mb: 2 }}
                  variant="h5"
                >
                  Cari Truck
                </Typography>
                <Box sx={{ width: "60%", mb: 6 }}>
                  <Typography variant="p" sx={{ color: "#97a2ad" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus eget condimentum lectus. Praesent et molestie
                    turpis. Curabitur ultrices risus vel magna varius, sed
                    tristique magna pharetra.
                  </Typography>
                </Box>

                <Box display="flex" gap={1} alignItems="center">
                  <Box>
                    <TextField
                      placeholder="Cari..."
                      size="small"
                      sx={{
                        boxShadow: "unset",
                        shadow: "unset",
                        backgroundColor: "white",
                        borderRadius: 2,
                        width: "250px",
                        ":focus": {
                          borderRadius: 2,
                          backgroundColor: "red",
                        },
                      }}
                    />
                  </Box>

                  <Box>
                    <Button
                      sx={{
                        boxShadow: "unset",
                        borderRadius: 2,
                        height: "40px",
                        ":hover": {
                          boxShadow: "unset",
                        },
                      }}
                      variant="contained"
                    >
                      <SearchIcon />
                    </Button>
                  </Box>

                  <Box>
                    <IconButton aria-label="delete">
                      <TuneIcon sx={{ color: "#97a2ad" }} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box p={3} pt={0}>
            <Grid container padding={0} spacing={3}>
              {DUMMY_LIST_PERUSAHAAN.map((list, index) => {
                return (
                  <>
                    <Grid item md={4}>
                      <CardPerusahaan
                        key={index}
                        id={list.id}
                        name={list.name}
                        contract={list.contract}
                        phone={list.phone}
                        status={list.status}
                      />
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Home>
    </Box>
  );
}
