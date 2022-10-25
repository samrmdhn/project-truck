import { Button, CardContent, Typography } from "@mui/material";import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function CardPerusahaan({ name, contract, phone, status, id }) {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 10, fontWeight: "bolder" }}
            color="text.secondary"
            gutterBottom
          >
            INFORMASI PERUSAHAAN
          </Typography>
          <Typography
            variant="h6"
            component="div"
            fontWeight={"bolder"}
            marginBottom={1}
          >
            {name}
          </Typography>

          <Typography variant="body2">{contract}</Typography>

          <Typography variant="body2">{phone}</Typography>
        </CardContent>
        <CardActions>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            padding={1}
          >
            <Box
              borderRadius={10}
              backgroundColor={status ? "green" : "grey"}
              color={"white"}
              fontSize={10}
              fontWeight={"bolder"}
              padding={1}
            >
              {status ? "ACTIVE" : "NOT ACTIVE"}
            </Box>

            <Box display={"flex"} justifyContent={"space-around"}>
              <Box marginRight={1}>
                <Link
                  to={`/perusahaan/edit/${id}`}
                  style={{ textDecoration: "none", fontWeight: "bolder" }}
                >
                  <a>Edit</a>
                </Link>
              </Box>
              <Box>|</Box>
              <Box marginLeft={1}>
                <Link
                  to={`/perusahaan/edit/${id}`}
                  style={{ textDecoration: "none", fontWeight: "bolder" }}
                >
                  <a>Delete</a>
                </Link>
              </Box>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </>
  );
}
