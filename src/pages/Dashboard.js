import Navbar from "../components/Navbar";import Home from "./Home";
import Box from "@mui/material/Box";
import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
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
      data: [5, 20],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

const dataHorizontal = {
  labels: ["Harian", "Mingguan", "Bulanan", "6 Bulanan"],
  datasets: [
    {
      label: "Dataset 2",
      data: [7, 5, 3, 2],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: ["rgba(53, 162, 235, 0.5)", "rgba(53, 102, 155, 0.5)"],
    },
  ],
};

const dataVertical = {
  labels: ["DEAX", "X-923F0", "I-W235", "HONDA AKSO", "WARKA88F"],
  datasets: [
    {
      label: "Dataset 2",
      data: [7, 5, 3, 2],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: ["rgba(53, 162, 235, 0.5)", "rgba(53, 102, 155, 0.5)"],
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
      align: "start",
    },
  },
};

const options2 = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      display: false,
    },
    title: {
      display: true,
    },
  },
};

const options35 = {
  indexAxis: "x",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      display: false,
    },
    title: {
      display: true,
    },
  },
};

const options3 = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

export default function Dashboard() {
  return (
    <Box>
      <Home>
        <Navbar link={`Dashboard`} />
        <Box backgroundColor={"rgb(244, 244, 244)"} minHeight={`100vh`}>
          <Box p={3}>
            <Grid container padding={0} spacing={3} mb={3}>
              <Grid item md={2}>
                <Card>
                  <CardContent>
                    <Typography style={{ fontWeight: "bolder" }} mb={2}>
                      MAINTENANCE ORDERS
                    </Typography>
                    <Typography>3 Top Priority</Typography>
                    <Typography>11 Past Due</Typography>
                    <Typography>11 Total</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item md={5}>
                <Card>
                  <CardContent>
                    <Typography style={{ fontWeight: "bolder" }}>
                      SCHEDULED vs COMPLETED
                    </Typography>
                    <Typography style={{ color: "grey" }} mb={2}>
                      This Week
                    </Typography>
                    <Box pr={3} pl={3}>
                      <Doughnut
                        data={data}
                        width={`150px`}
                        height={`150px`}
                        options={options}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item md={5}>
                <Card>
                  <CardContent>
                    <Typography style={{ fontWeight: "bolder" }}>
                      WORK COMPLETION
                    </Typography>
                    <Typography style={{ color: "grey" }} mb={2}>
                      This Week
                    </Typography>
                    <Box>
                      <Doughnut
                        data={data}
                        width={`150px`}
                        height={`150px`}
                        options={options}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Grid container padding={0} spacing={3} mb={3}>
              <Grid item md={2}>
                <Card>
                  <CardContent>
                    <Typography style={{ fontWeight: "bolder" }} mb={2}>
                      OPERATIONS
                    </Typography>
                    <Typography>11 Past Due</Typography>
                    <Typography>11 Ready</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={5}>
                <Card>
                  <CardContent>
                    <Typography style={{ fontWeight: "bolder" }}>
                      MAINTENANCE WORKS
                    </Typography>
                    <Bar data={dataHorizontal} options={options2} />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={5}>
                <Card>
                  <CardContent>
                    <Typography style={{ fontWeight: "bolder" }}>
                      MAINTENANCE DENGAN CATATAN
                    </Typography>
                    <Typography style={{ color: "grey" }} mb={2}>
                      This Month
                    </Typography>
                    <Box>
                      <Doughnut
                        data={dataCatatan}
                        width={`150px`}
                        height={`150px`}
                        options={options}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Grid container padding={0} spacing={3}>
              <Grid item md={5}>
                <Card>
                  <CardContent>
                    <Typography style={{ fontWeight: "bolder" }}>
                      PAST DUE MAINTENANCE
                    </Typography>
                    <Bar data={dataHorizontal} options={options2} />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={5}>
                <Card>
                  <CardContent>
                    <Typography style={{ fontWeight: "bolder" }}>
                      TRUCK WITH MOST DUE
                    </Typography>
                    <Bar data={dataVertical} options={options3} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Home>
    </Box>
  );
}
