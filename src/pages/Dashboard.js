import Navbar from "../components/Navbar";import Home from "./Home";
import Box from "@mui/material/Box";
import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
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
import ApartmentIcon from "@mui/icons-material/Apartment";

import { Bar, Line, Doughnut } from "react-chartjs-2";
import React, { useState } from "react";
import PerusahaanDashboard from "../components/dashboard/PerusahaanDashboard";
import TrukDashboard from "../components/dashboard/TrukDashboard";
import BengkelDashboard from "../components/dashboard/BengkelDashboard";
import DriverDashboard from "../components/dashboard/DriverDashboard";

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

const dataCatatan = {
  labels: ["Dengan Catatan", "Tanpa Catatan"],
  datasets: [
    {
      label: "# of Votes",
      data: [9, 20],
      backgroundColor: ["#9AB2CD", "#1B3884"],
      borderColor: "#FFFFFF",
      borderWidth: 5,
      borderRadius: 8,
    },
  ],
};

const dataHorizontal = {
  labels: ["Harian", "Mingguan", "Bulanan", "6 Bulanan"],
  datasets: [
    {
      label: "Dataset 2",
      data: [20, 10, 11, 8],
      backgroundColor: ["#9AB2CD", "#1B3884"],
      tension: 0.2,
      borderRadius: 8,
      barThickness: 30, // <<<<<<<<<<<<   bar / column size
    },
  ],
};

const dataHorizontal5 = {
  labels: ["Harian", "Mingguan", "Bulanan", "6 Bulanan"],
  datasets: [
    {
      label: "Dataset 2",
      data: [20, 10, 11, 8],
      backgroundColor: ["#9AB2CD", "#1B3884"],
      tension: 0.2,
      borderRadius: 6,
      barThickness: 20, // <<<<<<<<<<<<   bar / column size
    },
  ],
};

const options5 = {
  maintainAspectRatio: true,
  indexAxis: "y",
  plugins: {
    legend: {
      position: "right",
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const dataHorizontal1 = {
  labels: ["Harian", "Mingguan", "Bulanan", "6 Bulanan"],
  datasets: [
    {
      label: "Dataset 2",
      data: [20, 10, 11, 8],
      borderColor: "#1B3884",
      backgroundColor: ["#9AB2CD", "#1B3884"],
      tension: 0.2,
    },
  ],
};

const dataVertical = {
  labels: ["DEAX", "X-923F0", "I-W235", "HONDA AKSO", "WARKA88F"],
  datasets: [
    {
      label: "Dataset 2",
      data: [7, 5, 3, 2, 8],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: ["rgba(53, 162, 235, 0.5)", "rgba(53, 102, 155, 0.5)"],
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

const options1 = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      align: "middle",
      display: false,
    },
  },
};

const options2 = {
  maintainAspectRatio: true,
  indexAxis: "y",
  plugins: {
    legend: {
      position: "right",
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const options3 = {
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const options4 = {
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "top",
      align: "middle",
    },
    datalabels: {
      display: true,
      backgroundColor: "#red",
      borderRadius: 3,
      font: {
        color: "red",
        weight: "bold",
      },
    },
  },
};

export default function Dashboard() {
  const [active, setActive] = useState("");
  const [showData, setShowData] = useState({});

  const datas = [
    {
      name: "Perusahaan",
      component: <PerusahaanDashboard />,
    },
    {
      name: "Driver",
      component: <DriverDashboard />,
    },
    {
      name: "Truk",
      component: <TrukDashboard />,
    },
    {
      name: "Bengkel",
      component: <BengkelDashboard />,
    },
  ];

  const handleClick = (categoryName) => {
    setActive(categoryName);

    const cloneActive = [...datas];

    const filteredCloneIndex = cloneActive.findIndex((clone, index) => {
      return clone.name === categoryName;
    });

    const fixData = cloneActive[filteredCloneIndex];

    setShowData(fixData);

    showData.name == fixData.name && setShowData({});

    active == categoryName && setActive("");
  };
  return (
    <Box>
      <Home>
        <Navbar
          link="Dashboard"
          name={showData.name ? showData.name : "Menu Utama"}
        />
        <Box backgroundColor={"rgb(244, 244, 244)"} minHeight="100vh">
          <Box p={3}>
            <Grid container marginBottom={2} spacing={2}>
              <Grid item md="3">
                <Box
                  sx={{
                    backgroundColor:
                      active === "Perusahaan" ? "#1B3884" : "white",
                    borderRadius: 3,
                    padding: 3,
                    border: "1px solid #E6EBF1",
                    minHeight: "94px",
                    ":hover": {
                      cursor: "pointer",
                      boxShadow: active === "Perusahaan" ? 0 : 1,
                    },
                  }}
                  onClick={() => handleClick("Perusahaan")}
                >
                  <Typography color="#97A2AD">Perusahaan</Typography>
                  <Box display="flex" alignItems="center" marginBottom="10px">
                    <Typography
                      fontWeight="bolder"
                      fontSize="20px"
                      color={active === "Perusahaan" ? "white" : "#1B3884"}
                    >
                      80
                    </Typography>
                    <Box
                      component="span"
                      padding="0px 8px"
                      marginLeft="5px"
                      backgroundColor={
                        active === "Perusahaan" ? "white " : "#1B3884"
                      }
                      borderRadius="3px"
                      alignItems="center"
                      display="flex"
                    >
                      <Typography
                        color={active === "Perusahaan" ? "#1B3884" : "white"}
                      >
                        +5
                      </Typography>
                    </Box>
                  </Box>
                  <Typography fontSize="10px" color="#97A2AD">
                    Seminggu terakhir (+5): PT. Asia Sagara, dan +4 lainnya.
                  </Typography>
                </Box>
              </Grid>
              <Grid item md="3">
                <Box
                  sx={{
                    backgroundColor: active === "Driver" ? "#1B3884" : "white",
                    borderRadius: 3,
                    padding: 3,
                    minHeight: "94px",
                    border: "1px solid #E6EBF1",
                    ":hover": {
                      cursor: "pointer",
                      boxShadow: active === "Driver" ? 0 : 1,
                    },
                  }}
                  onClick={() => handleClick("Driver")}
                >
                  <Typography color={active === "driver" ? "white" : "#97A2AD"}>
                    Driver
                  </Typography>
                  <Box display="flex" alignItems="center" marginBottom="10px">
                    <Typography fontWeight="bolder" fontSize="20px">
                      257
                    </Typography>
                    <Box
                      component="span"
                      padding="0px 8px"
                      marginLeft="5px"
                      backgroundColor="#1B3884"
                      borderRadius="3px"
                      alignItems="center"
                      display="flex"
                    >
                      <Typography color="white">+4</Typography>
                    </Box>
                  </Box>

                  <Box display="flex">
                    <Box marginRight="5px">
                      <Typography fontSize="10px" color="#97A2AD">
                        Seminggu terakhir (+4):
                      </Typography>
                    </Box>
                    <Box>
                      <AvatarGroup
                        max={3}
                        sx={{
                          "& .MuiAvatar-root": {
                            width: 26,
                            height: 26,
                            fontSize: 16,
                          },
                        }}
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src="https://randomuser.me/api/portraits/men/52.jpg"
                        />
                        <Avatar
                          alt="Remy Sharp"
                          src="https://randomuser.me/api/portraits/men/29.jpg"
                        />
                        <Avatar
                          alt="Remy Sharp"
                          src="https://randomuser.me/api/portraits/men/29.jpg"
                        />
                        <Avatar
                          alt="Remy Sharp"
                          src="https://randomuser.me/api/portraits/men/21.jpg"
                        />
                      </AvatarGroup>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item md="3">
                <Box
                  sx={{
                    backgroundColor: active === "Truk" ? "#1B3884" : "white",
                    borderRadius: 3,
                    padding: 3,
                    minHeight: "94px",
                    border: "1px solid #E6EBF1",
                    ":hover": {
                      cursor: "pointer",
                      boxShadow: active === "Truk" ? 0 : 1,
                    },
                  }}
                  onClick={() => handleClick("Truk")}
                >
                  <Typography color="#97A2AD">Truk</Typography>
                  <Box display="flex" alignItems="center" marginBottom="10px">
                    <Typography
                      fontWeight="bolder"
                      fontSize="20px"
                      color={active === "trucks" ? "white" : "#1B3884"}
                    >
                      92
                    </Typography>
                    <Box
                      component="span"
                      padding="0px 8px"
                      marginLeft="5px"
                      backgroundColor={
                        active === "trucks" ? "white" : "#1B3884"
                      }
                      borderRadius="3px"
                      alignItems="center"
                      display="flex"
                    >
                      <Typography
                        color={active === "trucks" ? "#1B3884" : "white"}
                      >
                        +3
                      </Typography>
                    </Box>
                  </Box>
                  <Typography fontSize="10px" color="#97A2AD">
                    Seminggu terakhir (+3): Rhino 300, dan +2 lainnya.
                  </Typography>
                </Box>
              </Grid>
              <Grid item md="3">
                <Box
                  sx={{
                    backgroundColor: active === "Bengkel" ? "#1B3884" : "white",
                    borderRadius: 3,
                    padding: 3,
                    minHeight: "94px",
                    border: "1px solid #E6EBF1",
                    ":hover": {
                      cursor: "pointer",
                      boxShadow: active === "Bengkel" ? 0 : 1,
                    },
                  }}
                  onClick={() => handleClick("Bengkel")}
                >
                  <Typography color="#97A2AD">Bengkel</Typography>
                  <Box display="flex" alignItems="center" marginBottom="10px">
                    <Typography fontWeight="bolder" fontSize="20px">
                      5
                    </Typography>
                    <Box
                      component="span"
                      padding="0px 8px"
                      marginLeft="5px"
                      backgroundColor="#1B3884"
                      borderRadius="3px"
                      alignItems="center"
                      display="flex"
                    >
                      <Typography color="white">+2</Typography>
                    </Box>
                  </Box>
                  <Typography fontSize="10px" color="#97A2AD">
                    Seminggu terakhir (+2): Bengkel Poltangan 23 Swadaya II, dan
                    +1 lainnya.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            {!showData.component ? (
              <>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    marginBottom: 2,
                  }}
                >
                  Maintenance
                </Typography>
                <Grid
                  container
                  spacing={2}
                  mb={2}
                  sx={{ alignItems: "stretch", direction: "row" }}
                >
                  <Grid item md={9}>
                    <Grid container spacing={2}>
                      <Grid item md="12">
                        <Box
                          sx={{
                            backgroundColor: "white",
                            borderRadius: 3,
                            padding: 3,
                            border: "1px solid #E6EBF1",
                          }}
                        >
                          <Box>
                            <Typography
                              sx={{ color: "#97A2AD", marginBottom: 2 }}
                            >
                              Maintenance Schedule
                            </Typography>
                            <Box>
                              <Line
                                data={dataHorizontal1}
                                options={options1}
                                height="200px"
                              />
                            </Box>
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
                          <Box>
                            <Typography
                              sx={{ color: "#97A2AD", marginBottom: 2 }}
                            >
                              Maintenance Works
                            </Typography>
                            <Box>
                              <Bar data={dataHorizontal} options={options} />
                            </Box>
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
                          <Box>
                            <Typography
                              sx={{ color: "#97A2AD", marginBottom: 2 }}
                            >
                              Maintenance Done
                            </Typography>
                            <Box>
                              <Bar data={dataHorizontal5} options={options5} />
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item md={3}>
                    <Grid container spacing={2}>
                      <Grid item md="12">
                        <Box
                          sx={{
                            backgroundColor: "#1B3884",
                            color: "white",
                            borderRadius: 3,
                            padding: 3,
                            border: "1px solid #E6EBF1",
                          }}
                        >
                          <Typography
                            sx={{ marginBottom: 2, fontWeight: "bolder" }}
                          >
                            Maintenance Orders
                          </Typography>
                          <Typography>3 Top Priority</Typography>
                          <Typography>11 Past Due</Typography>
                          <Typography>11 Total</Typography>
                        </Box>
                      </Grid>

                      <Grid item md="12">
                        <Box
                          sx={{
                            backgroundColor: "white",
                            borderRadius: 3,
                            padding: 3,
                            border: "1px solid #E6EBF1",
                          }}
                        >
                          <Typography
                            sx={{ marginBottom: 2, color: "#97a2ad" }}
                          >
                            Maintenance dengan catatan
                          </Typography>
                          <Box>
                            <Doughnut data={dataCatatan} options={options4} />
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            ) : (
              <>{showData.component}</>
            )}
          </Box>
        </Box>
      </Home>
    </Box>
  );
}
