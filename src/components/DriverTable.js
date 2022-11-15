import React, { useState, useEffect } from "react";import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Box, Typography, Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";

function createData(id, foto, nama, status) {
  return { id, foto, nama, status };
}

export default function DriverTable() {
  const data = [
    {
      id: "D2384",
      nama: "Kael Ramadhan",
      umur: "37",
      jenisKelamin: "Laki-laki",
      noHp: "085155305199",
      status: "AKTIF",
      img: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
      id: "D5582",
      nama: "Gheo P. Sakti",
      umur: "47",
      jenisKelamin: "Laki-laki",
      noHp: "083829881172",
      status: "AKTIF",
      img: "https://randomuser.me/api/portraits/men/72.jpg",
    },
    {
      id: "D9582",
      nama: "Sarti Ratna",
      umur: "22",
      jenisKelamin: "Perempuan",
      noHp: "087843429941",
      status: "TIDAK AKTIF",
      img: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ];

  const [selectedData, setSelectedData] = useState({
    id: "D2384",
    nama: "Kael Ramadhan",
    umur: "37",
    jenisKelamin: "Laki-laki",
    noHp: "085155305199",
    status: "AKTIF",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
  });

  const [filteredData, setFilteredData] = useState([
    {
      id: "D5582",
      nama: "Gheo P. Sakti",
      umur: "47",
      jenisKelamin: "Laki-laki",
      noHp: "083829881172",
      status: "AKTIF",
    },
    {
      id: "D9582",
      nama: "Sarti Ratna",
      umur: "22",
      jenisKelamin: "Perempuan",
      noHp: "087843429941",
      status: "TIDAK AKTIF",
    },
  ]);

  const rows = filteredData.map((filtered) => {
    return createData(
      filtered.id,
      filtered.jenisKelamin,
      filtered.nama,
      filtered.status
    );
  });

  const handleClick = (id) => {
    console.log(id);

    const cloneData = [...data];

    const selected = cloneData.find((clone) => {
      return clone.id == id;
    });

    setSelectedData(selected);

    const filtered = cloneData.filter((clone) => {
      return clone.id !== id;
    });

    setFilteredData(filtered);

    console.log(filtered);
  };

  return (
    <Box>
      <Box display="flex" gap={2} mb={2}>
        <Box>
          <Avatar
            variant="rounded"
            sx={{ width: "150px", height: "150px", borderRadius: 2 }}
          >
            Profile
          </Avatar>
        </Box>

        <Box>
          {/* BOX NAMA*/}
          <Box display="flex" gap={1}>
            <Box>
              <Typography
                sx={{ fontWeight: "bolder", marginBottom: 1, fontSize: "20px" }}
              >
                {selectedData.nama}
              </Typography>
            </Box>

            <Box>
              <VerifiedIcon
                fontSize="small"
                sx={{ color: "#1B3884", marginTop: "5px" }}
              />
            </Box>
          </Box>

          {/* BOX DETAILS*/}

          <Box display="flex" alignItems="center" gap={1} marginBottom={2}>
            <Typography sx={{ fontSize: "12px" }}>
              {selectedData.jenisKelamin}
            </Typography>
            <Typography sx={{ fontSize: "12px" }}>•</Typography>
            <Typography sx={{ fontSize: "12px" }}>
              {selectedData.umur} Tahun
            </Typography>
            <Typography sx={{ fontSize: "12px" }}>•</Typography>
            <Typography sx={{ fontSize: "12px" }}>
              {selectedData.noHp}
            </Typography>
          </Box>

          {/* BOX TRUK DAN STATUS*/}
          <Box display="flex" justifyContent="space-between">
            <Box sx={{ borderRadius: "3", border: "1px solid grey" }}>
              <Typography
                sx={{
                  fontWeight: "bolder",
                  fontSize: "12px",
                }}
              >
                TRUK
              </Typography>
            </Box>
            <Box>
              <Typography>STATUS</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <TableContainer component={Box}>
        <Table aria-label="simple table" sx={{ border: "unset" }}>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  ":hover": {
                    cursor: "pointer",
                    backgroundColor: "#F4F4F4",
                  },
                }}
                onClick={() => handleClick(row.id)}
              >
                <TableCell component="th" scope="row" sx={{ border: "unset" }}>
                  {row.id}
                </TableCell>

                <TableCell sx={{ border: "unset" }}>{row.nama}</TableCell>
                <TableCell sx={{ border: "unset" }}>{row.umur} Tahun</TableCell>

                <TableCell sx={{ border: "unset" }}>
                  <Box
                    sx={{
                      padding: "3px 7px",
                      backgroundColor:
                        row.status === "AKTIF" ? "#1B3884" : "#9AB2CD",
                      borderRadius: 2,
                      width: row.status === "AKTIF" ? "50px" : "75px",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "10px",
                        color: "white",
                        fontWeight: "bolder",
                      }}
                    >
                      {row.status}
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
