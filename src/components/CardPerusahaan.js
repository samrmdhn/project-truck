import { CardContent, Typography } from "@mui/material";import Card from "@mui/material/Card";

import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/system";

export default function CardPerusahaan({ name, contract, phone, status }) {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
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
            {status ? (
              <>
                <Box
                  borderRadius={10}
                  backgroundColor={"green"}
                  color={"white"}
                  fontSize={10}
                  fontWeight={"bolder"}
                  padding={1}
                >
                  Active
                </Box>
              </>
            ) : (
              <>
                <Box
                  borderRadius={10}
                  backgroundColor={"red"}
                  color={"white"}
                  fontSize={10}
                  fontWeight={"bolder"}
                  padding={1}
                >
                  Not Active
                </Box>
              </>
            )}

            <Box display={"flex"} justifyContent={"space-around"}>
              <Box>Edit</Box>
              <Box> | </Box>
              <Box>Delete</Box>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </>
  );
}
