import Box from "@mui/material/Box";import {
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
    name: "PT GERHANA",
    contract: "Contract/efhwf/webweb",
    phone: "08235235",
    status: false,
  },
  {
    id: 3,
    name: "PT INDAH PERKASA",
    contract: "Contract/ewkgl/2wvwe",
    phone: "08982948294",
    status: true,
  },
  {
    id: 4,
    name: "PT ANGIN RIBUT",
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
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={"bolder"}>
                  Cari Truck
                </Typography>
                <Grid container spacing={2} padding={0} marginTop={1} p={0}>
                  <Grid item md={4}>
                    <TextField size="small" fullWidth={true} />
                  </Grid>

                  <Grid item md={2}>
                    <Button variant="contained">Cari</Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
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