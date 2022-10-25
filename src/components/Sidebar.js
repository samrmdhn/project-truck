import React, { useState, useEffect } from "react";
import { Box, ListSubheader } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Collapse from "@mui/material/Collapse";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ListIcon from "@mui/icons-material/List";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { Link } from "react-router-dom";

const NESTED_ITEMS_PERUSAHAAN = [
  {
    link: "/perusahaan/list",
    text: "List",
    icon: <ListIcon />,
  },
  {
    link: "/perusahaan/pendaftaran",
    text: "Pendaftaran",
    icon: <NoteAddIcon />,
  },
];

export default function Sidebar() {
  const [nested1, setNested1] = useState(true);
  const [nested2, setNested2] = useState(true);

  const handleClick = (index) => {
    if (index == 1) {
      setNested1(!nested1);
    } else {
      setNested2(!nested2);
    }
  };

  return (
    <>
      <Box height={"100%"}>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Nested List Items
            </ListSubheader>
          }
        >
          <ListItemButton onClick={() => handleClick(1)}>
            <ListItemIcon>
              <ApartmentIcon />
            </ListItemIcon>
            <ListItemText primary="Perusahaan" style={{ marginLeft: -10 }} />
            {nested1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={nested1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {NESTED_ITEMS_PERUSAHAAN.map((items, index) => {
                return (
                  <>
                    <Link
                      to={items.link}
                      key={index}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>{items.icon}</ListItemIcon>
                        <ListItemText primary={items.text} />
                      </ListItemButton>
                    </Link>
                  </>
                );
              })}
            </List>
          </Collapse>

          <ListItemButton onClick={() => handleClick(2)}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Driver" />
            {nested2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          <Collapse in={nested2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link
                to={`/driver/list`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ListIcon />
                  </ListItemIcon>
                  <ListItemText primary="List" />
                </ListItemButton>
              </Link>
              <Link
                to={`/driver/pendaftaran`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <NoteAddIcon />
                  </ListItemIcon>
                  <ListItemText primary="Pendaftaran" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
        </List>
      </Box>
    </>
  );
}
