import Home from "./Home";import Navbar from "../components/Navbar";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import Box from "@mui/material/Box";

import CardPerusahaan from "../components/CardPerusahaan";
import CardDriver from "../components/CardDriver";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import IconButton from "@mui/material/IconButton";

const DUMMY_LIST_PERUSAHAAN = [
  {
    id: 1,
    name: "Syams Syair R",
    jenisKelamin: "Laki-laki",
    email: "thesyams.rebel8@gmail.com",
    phone: "082523952352",
    image: "https://i.pravatar.cc/150?img=57",
    status: true,
  },
  {
    id: 2,
    name: "Reska",
    jenisKelamin: "Laki-laki",
    email: "screamparad0x@gmail.com",
    phone: "082523952352",
    image: "https://i.pravatar.cc/150?img=17",
    status: false,
  },
  {
    id: 3,
    name: "Navira",
    jenisKelamin: "Perempuan",
    email: "tzz@gmail.com",
    phone: "0835952352",
    image: "https://i.pravatar.cc/150?img=47",
    status: true,
  },
  {
    id: 4,
    name: "Faris Muhammad",
    jenisKelamin: "Laki-laki",
    email: "mfarissetiawan91@gmail.com",
    phone: "082523952352",
    image: "https://i.pravatar.cc/150?img=60",
    status: false,
  },
];

export default function DriverList() {
  return (
    <Box>
      <Home>
        <Navbar link={`Driver`} name={`List`} />
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
                  Cari Driver
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
                      <CardDriver
                        key={index}
                        id={list.id}
                        name={list.name}
                        jenisKelamin={list.jenisKelamin}
                        email={list.email}
                        phone={list.phone}
                        image={list.image}
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
