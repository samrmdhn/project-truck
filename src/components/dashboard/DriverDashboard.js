import { Box, Typography, Grid, Button, Avatar } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

import Select from "@mui/material/Select";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Bar, Line, Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import DriverTable from "../DriverTable";
import VerifiedIcon from "@mui/icons-material/Verified";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: ["Scheduled", "Completed"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

const options = {
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "top",
      align: "middle",
      display: false,
    },
  },
};

const dataHorizontal1 = {
  labels: [
    "07/09/2022",
    "08/09/2022",
    "09/09/2022",
    "10/09/2022",
    "11/09/2022",
    "12/09/2022",
    "13/09/2022",
  ],
  datasets: [
    {
      label: "Dataset 2",
      data: [7, 19, 15, 20, 10, 24, 12],
      borderColor: "#1B3884",
      backgroundColor: ["rgba(53, 162, 235, 0.5)", "rgba(53, 102, 155, 0.5)"],
      tension: 0.3,
    },
  ],
};

const options1 = {
  maintainAspectRatio: false,
  elements: {
    bar: {
      borderWidth: 2,
    },
    point: {
      pointStyle: "circle",
    },
  },
  plugins: {
    legend: {
      position: "top",
      align: "middle",
      display: false,
    },
    filler: {
      propagate: true,
    },
  },
};

const options2 = {
  maintainAspectRatio: false,
  indexAxis: "y",
  plugins: {
    legend: {
      position: "top",
      align: "middle",
      display: true,
    },
    title: {
      display: false,
    },
  },
};

const dataHorizontal = {
  labels: ["07/09/2022", "08/09/2022", "09/09/2022", "10/09/2022"],
  datasets: [
    {
      label: "Dataset 2",
      data: [7, 19, 15, 20, 10, 24, 9],
      borderColor: "#1B3884",
      backgroundColor: ["rgba(53, 162, 235, 0.5)", "rgba(53, 102, 155, 0.5)"],
      tension: 0.3,
      fill: false,
    },
  ],
};

const dataHorizontal2 = {
  labels: ["07/09/2022", "08/09/2022", "09/09/2022", "10/09/2022"],
  datasets: [
    {
      label: "Dataset 2",
      data: [7, 19, 15, 20, 10, 24, 9],
      backgroundColor: ["rgba(53, 162, 235, 0.5)", "rgba(53, 102, 155, 0.5)"],
      tension: 0.3,
      fill: false,
    },
  ],
};

const dataHorizontal5 = {
  labels: [
    "01/01/2022",
    "01/02/2022",
    "01/03/2022",
    "01/04/2022",
    "01/05/2022",
  ],
  datasets: [
    {
      label: "Total",
      data: [50, 53, 70, 100, 105, 110],
      backgroundColor: ["#9AB2CD", "#1B3884"],
      tension: 0.3,
      fill: false,
      borderRadius: 8,
      barThickness: 30, // <<<<<<<<<<<<   bar / column size
    },
  ],
};

const options5 = {
  maintainAspectRatio: false,
  indexAxis: "x",
  plugins: {
    legend: {
      position: "top",
      align: "middle",
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const dataHorizontal3 = {
  labels: [
    "PT. Asura",
    "PT. Cloud ID",
    "PT. Braga Tech",
    "PT. Travelindo",
    "PT. Cipta",
  ],
  datasets: [
    {
      label: "Dataset 2",
      data: [7, 19, 15, 20, 10, 24, 12],
      backgroundColor: ["#9AB2CD", "#1B3884"],
      fill: false,
      tension: 0.3,
      borderRadius: 6,
      barThickness: 20, // <<<<<<<<<<<<   bar / column size
    },
  ],
};

const options3 = {
  maintainAspectRatio: false,
  indexAxis: "y",
  layout: {
    padding: {
      bottom: 30,
      right: 15,
    },
  },
  plugins: {
    legend: {
      position: "top",
      align: "middle",
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const images = [
  "https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png",
  "https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png",
  "https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo-thumbnail.png",
];

const dataCatatan = {
  labels: ["Aktif (9)", "Tidak Aktif (20)"],
  datasets: [
    {
      label: "# of Votes",
      data: [9, 20],
      backgroundColor: ["#9AB2CD", "#F4F4F4"],
      borderColor: "#1B3884",
      borderWidth: 7,
      borderRadius: 10,
    },
  ],
};

const options4 = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      align: "middle",
      labels: {
        color: "white",
      },
    },
    datalabels: {
      display: true,
      backgroundColor: "#red",
      borderRadius: 3,
      fontColor: "white",
      font: {
        color: "red",
        weight: "bold",
      },
    },
  },
};

const DriverDashboard = () => {
  return (
    <Box>
      <Typography sx={{ fontWeight: "bolder", marginBottom: 2 }}>
        Driver
      </Typography>

      <Grid container spacing={2} mb={2}>
        <Grid item md="6">
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 3,
              padding: 3,
              border: "1px solid #E6EBF1",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Box>
                <Typography sx={{ color: "#97a2ad" }}>
                  Baru ditambahkan
                </Typography>
              </Box>
              <Box>
                <Link
                  to={"/driver/list"}
                  style={{
                    textDecoration: "none",
                    color: "#1B3884",
                  }}
                >
                  <a>
                    <Typography sx={{ fontSize: "12px" }}>
                      Lihat semua
                    </Typography>
                  </a>
                </Link>
              </Box>
            </Box>

            <Box>
              <DriverTable />
            </Box>
          </Box>
        </Grid>

        <Grid item md="6">
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 3,
              padding: 3,
              border: "1px solid #E6EBF1",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Box>
                <Typography sx={{ color: "#97a2ad" }}>Jumlah Driver</Typography>
              </Box>
              <Box>
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <Select
                    value={10}
                    defaultValue={10}
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{ color: "#97A2B5" }}
                  >
                    <MenuItem value={10}>Bulanan</MenuItem>
                    <MenuItem value={20}>Tahunan</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            <Box>
              <Bar data={dataHorizontal5} options={options5} height="256px" />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} marginBottom={2} alignItems="stretch">
        <Grid item md="8">
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 3,
              padding: 3,
              border: "1px solid #E6EBF1",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Box>
                <Typography sx={{ color: "#97a2ad" }}>Data terakhir</Typography>
              </Box>
              <Box>
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <Select
                    value={10}
                    defaultValue={10}
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{ color: "#97A2B5" }}
                  >
                    <MenuItem value={10}>Harian</MenuItem>
                    <MenuItem value={20}>Mingguan</MenuItem>
                    <MenuItem value={30}>Bulanan</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            <Box>
              <Line data={dataHorizontal1} options={options1} height="200px" />
            </Box>
          </Box>
        </Grid>

        <Grid item md="4">
          <Box
            sx={{
              backgroundColor: "#1B3884",
              borderRadius: 3,
              padding: 3,
              border: "1px solid #E6EBF1",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Box>
                <Typography sx={{ color: "white" }}>Status Driver</Typography>
              </Box>
            </Box>
            <Box mb={2}>
              <Doughnut data={dataCatatan} options={options4} height="200px" />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* <Grid container spacing={2}>
        <Grid item md="12">
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 3,
              padding: 3,

              border: "1px solid #E6EBF1",
            }}
          >
            <Typography sx={{ color: "#97a2ad", marginBottom: 2 }}>
              Data terakhir dibuat
            </Typography>

            <Box>
              <CustomTable />
            </Box>
          </Box>
        </Grid>
      </Grid>*/}
    </Box>
  );
};

export default DriverDashboard;
