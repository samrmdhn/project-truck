import * as React from "react";import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";

import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { Box, Grid, Typography, Avatar, AvatarGroup } from "@mui/material";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#9AD0F5",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#9AB2CD",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const white = {
  10: "#ffffff",
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 4px 6px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[200]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[200]};
    color: ${white[10]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)(
  ({ theme }) => `
  width: 100%;
  
  `
);

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  width: "100%";
  background-color: ${blue[500]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  
  `
);

export default function UnstyleTabs() {
  return (
    <Box>
      <TabsUnstyled defaultValue={0}>
        <TabsList>
          <Tab>Driver</Tab>
          <Tab>Truk</Tab>
        </TabsList>
        <TabPanel value={0}>
          <Grid container alignItems="center">
            <Grid item md="6">
              <Typography sx={{ color: "#97A2AD" }}>1. VEEFE</Typography>
            </Grid>
            <Grid item md="6">
              <AvatarGroup total={24} max={3}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://randomuser.me/api/portraits/men/14.jpg"
                />

                <Avatar
                  alt="Agnes Walker"
                  src="https://randomuser.me/api/portraits/men/19.jpg"
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="/static/images/avatar/5.jpg"
                />
              </AvatarGroup>
            </Grid>
          </Grid>

          <Grid container alignItems="center">
            <Grid item md="6">
              <Typography sx={{ color: "#97A2AD" }}>1. VEEFE</Typography>
            </Grid>
            <Grid item md="6">
              <AvatarGroup total={24} max={3}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://randomuser.me/api/portraits/men/14.jpg"
                />

                <Avatar
                  alt="Agnes Walker"
                  src="https://randomuser.me/api/portraits/men/19.jpg"
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="/static/images/avatar/5.jpg"
                />
              </AvatarGroup>
            </Grid>
          </Grid>

          <Grid container alignItems="center">
            <Grid item md="6">
              <Typography sx={{ color: "#97A2AD" }}>1. VEEFE</Typography>
            </Grid>
            <Grid item md="6">
              <AvatarGroup total={24} max={3}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://randomuser.me/api/portraits/men/14.jpg"
                />

                <Avatar
                  alt="Agnes Walker"
                  src="https://randomuser.me/api/portraits/men/19.jpg"
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="/static/images/avatar/5.jpg"
                />
              </AvatarGroup>
            </Grid>
          </Grid>

          <Grid container alignItems="center">
            <Grid item md="6">
              <Typography sx={{ color: "#97A2AD" }}>1. VEEFE</Typography>
            </Grid>
            <Grid item md="6">
              <AvatarGroup total={24} max={3}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://randomuser.me/api/portraits/men/14.jpg"
                />

                <Avatar
                  alt="Agnes Walker"
                  src="https://randomuser.me/api/portraits/men/19.jpg"
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="/static/images/avatar/5.jpg"
                />
              </AvatarGroup>
            </Grid>
          </Grid>

          <Grid container alignItems="center">
            <Grid item md="6">
              <Typography sx={{ color: "#97A2AD" }}>1. VEEFE</Typography>
            </Grid>
            <Grid item md="6">
              <AvatarGroup total={24} max={3}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://randomuser.me/api/portraits/men/14.jpg"
                />

                <Avatar
                  alt="Agnes Walker"
                  src="https://randomuser.me/api/portraits/men/19.jpg"
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="/static/images/avatar/5.jpg"
                />
              </AvatarGroup>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={1}>Profile page</TabPanel>
      </TabsUnstyled>
    </Box>
  );
}
