import { Box, Avatar, Typography } from "@mui/material";import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";

export default function DriverProfile() {
  let { id } = useParams();

  return (
    <Box>
      <Home>
        <Navbar link={`Driver`} name={`Profile`}>
          <h5>Driver Profile</h5>
        </Navbar>
        <Box backgroundColor={"rgb(244, 244, 244)"} minHeight={"90vh"}>
          <Box p={3}>
            <Box
              sx={{
                width: "100%",
                height: "250px",
                background:
                  "linear-gradient(90deg, rgba(27,56,132,1) 0%, rgba(45,60,123,1) 20%, rgba(56,64,115,1) 40%, rgba(65,68,106,1) 60%, rgba(71,72,98,1) 80%, rgba(76,76,89,1) 100%)",
                border: "1px solid #E6EBF1",
                borderRadius: 3,
              }}
            >
              <Box p={3} display="flex" justifyContent="space-between">
                <Box display="flex" gap={2}>
                  <Box>
                    <Avatar sx={{ height: 150, width: 150 }} variant="rounded">
                      A
                    </Avatar>
                  </Box>

                  <Box>
                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                      <Box>
                        <Typography
                          sx={{
                            color: "white",
                            fontWeight: "bolder",
                          }}
                        >
                          Kai Havertz
                        </Typography>
                      </Box>

                      <Box>
                        <Box
                          sx={{
                            backgroundColor: "green",
                            padding: "0.5px 5px",
                            borderRadius: 3,
                          }}
                        >
                          <Typography sx={{ fontSize: "8px", color: "white" }}>
                            ACTIVE
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box display="flex" gap={2}>
                      <Box display="flex" alignItems="center" gap="2px">
                        <AccountCircleIcon fontSize="10px" />
                        <Typography sx={{ color: "white", fontSize: "12px" }}>
                          Driver
                        </Typography>
                      </Box>

                      <Box>
                        <Box display="flex" alignItems="center" gap="2px">
                          <PlaceIcon fontSize="10px" />
                          <Typography sx={{ color: "white", fontSize: "12px" }}>
                            Bandung, Ina
                          </Typography>
                        </Box>
                      </Box>

                      <Box>
                        <Box display="flex" alignItems="center" gap="2px">
                          <EmailIcon fontSize="10px" />
                          <Typography sx={{ color: "white", fontSize: "12px" }}>
                            thesyams.rebel8@gmail.com
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Typography sx={{ color: "white" }}>wfwef</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Home>
    </Box>
  );
}
