import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Typography } from "@mui/material";

function createData(namaPerusahaan, kontrak, noHp, status, driver) {
  return { namaPerusahaan, kontrak, noHp, status, driver };
}

const rows = [
  createData("PT. Mitra Abadi", "C-JWFH24A", "085135232447", "1", "23"),
  createData("PT. Guna Bakti", "C-JWFH24A", "083829442248", "1", "23"),
  createData("PT. Braga Technologies", "C-JWFH24A", "089814831194", "1", "23"),
  createData("PT. Karang Api ", "C-JWFH24A", "081352252471", "1", "23"),
  createData("PT. Sudacki Kencana", "C-JWFH24A", "087819331193", "1", "23"),
];

export default function BasicTable() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650, border: "unset" }} aria-label="simple table">
        <TableHead sx={{ border: "unset" }}>
          <TableRow sx={{ border: "unset" }}>
            <TableCell
              sx={{
                border: "unset",
                borderBottom: "1px solid grey",
                fontWeight: "bolder",
              }}
            >
              Nama Perusahaan
            </TableCell>
            <TableCell
              sx={{
                border: "unset",
                borderBottom: "1px solid grey",
                fontWeight: "bolder",
              }}
              align="left"
            >
              Kontrak
            </TableCell>
            <TableCell
              sx={{
                border: "unset",
                borderBottom: "1px solid grey",
                fontWeight: "bolder",
              }}
              align="left"
            >
              No HP
            </TableCell>

            <TableCell
              sx={{
                border: "unset",
                borderBottom: "1px solid grey",
                fontWeight: "bolder",
              }}
              align="left"
            >
              Status
            </TableCell>
            <TableCell
              sx={{
                border: "unset",
                borderBottom: "1px solid grey",
                fontWeight: "bolder",
              }}
              align="left"
            >
              Driver
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                border: "unset",
              }}
            >
              <TableCell component="th" scope="row" sx={{ border: "unset" }}>
                {row.namaPerusahaan}
              </TableCell>
              <TableCell sx={{ border: "unset" }} align="left">
                {row.kontrak}
              </TableCell>
              <TableCell sx={{ border: "unset" }} align="left">
                {row.noHp}
              </TableCell>
              <TableCell sx={{ border: "unset" }} align="left">
                {row.status}
              </TableCell>
              <TableCell sx={{ border: "unset" }} align="left">
                <AvatarGroup total={row.driver} max={3}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatar/4.jpg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                  />
                </AvatarGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
