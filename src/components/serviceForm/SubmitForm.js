import {  Box,
  Typography,
  Divider,
  Grid,
  TextField,
  Badge,
  Button,
} from "@mui/material";
import CustomBadge from "../../atoms/CustomBadge";

export default function SubmitForm() {
  return (
    <Box>
      <Grid container>
        <Grid item md={6} p={2}>
          <Grid container display="flex" alignItems="end">
            <Grid item md={4}>
              <Typography sx={{ fontWeight: "bolder" }}>
                Nama Penguji
              </Typography>
              <Typography sx={{ fontStyle: "italic", color: "grey" }}>
                Inspector Name
              </Typography>
            </Grid>

            <Grid item md={8}>
              <TextField
                variant="standard"
                size="small"
                placeholder="Faris Setiawan"
                fullWidth="true"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={6} p={2}>
          <Grid container display="flex" alignItems="end">
            <Grid item md={5}>
              <Typography sx={{ fontWeight: "bolder" }}>
                Tanggal Pemeriksaan
              </Typography>
              <Typography sx={{ fontStyle: "italic", color: "grey" }}>
                Date Inspection{" "}
              </Typography>
            </Grid>

            <Grid item md={7}>
              <TextField
                variant="standard"
                size="small"
                value="27/10/2022"
                fullWidth="true"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container mb={3}>
        <Grid item md={6} p={2}>
          <Grid container display="flex" alignItems="end">
            <Grid item md={4}>
              <Typography sx={{ fontWeight: "bolder" }}>No Polisi</Typography>
              <Typography sx={{ fontStyle: "italic", color: "grey" }}>
                Police Number
              </Typography>
            </Grid>

            <Grid item md={8}>
              <TextField
                variant="standard"
                size="small"
                value="B 2432 AE"
                fullWidth="true"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={6} p={2}>
          <Grid container display="flex" alignItems="end">
            <Grid item md={5}>
              <Typography sx={{ fontWeight: "bolder" }}>
                No / Tipe Kendaraan
              </Typography>
              <Typography sx={{ fontStyle: "italic", color: "grey" }}>
                No / Type of Vehicle
              </Typography>
            </Grid>

            <Grid item md={7}>
              <TextField
                variant="standard"
                size="small"
                value="HINO2424"
                fullWidth="true"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container p={2}>
        <Grid item md={6}>
          <Box>
            <Typography sx={{ fontWeight: "bolder" }}>
              Sisi Kanan Depan
            </Typography>
            <Box mt={2} mb={2}>
              <Typography>
                Kondisi Fisik Kendaraan:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "yellow" }}
                >
                  &nbsp; P &nbsp;
                </Box>
                (Periksa)
              </Typography>
              <Typography>
                Kekencangan Baut Pengikat Roda / Wheel Nuts:{" "}
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "green" }}
                >
                  &nbsp; V &nbsp;
                </Box>
                (Layak Jalan)
              </Typography>
              <Typography>
                Kondisi Fisik Ban:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "green" }}
                >
                  &nbsp; V &nbsp;
                </Box>
                (Layak Jalan)
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: "bolder" }}>
              Sisi Depan Kendaraan
            </Typography>
            <Box mt={2} mb={2}>
              <Typography>
                Kondisi Fisik Kabin:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "blue" }}
                >
                  &nbsp; G &nbsp;
                </Box>
                (Ganti)
              </Typography>
              <Typography>
                Kekencangan Lampu Utama:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "blue" }}
                >
                  &nbsp; G &nbsp;
                </Box>
                (Ganti)
              </Typography>
              <Typography>
                Kebocoran Oli Steering:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "green" }}
                >
                  &nbsp; V &nbsp;
                </Box>
                (Layak Jalan)
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: "bolder" }}>
              Sisi Kiri Depan
            </Typography>
            <Box mt={2} mb={2}>
              <Typography>
                Kondisi Fisik Kabin / Cabin:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "green" }}
                >
                  &nbsp; V &nbsp;
                </Box>
                (Layak Jalan)
              </Typography>
              <Typography>
                Kondisi Kaca Pintu / Window Glass:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "yellow" }}
                >
                  &nbsp; P &nbsp;
                </Box>
                (Periksa)
              </Typography>
              <Typography>
                Kondisi Kaca Spion / Mirror:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "green" }}
                >
                  &nbsp; V &nbsp;
                </Box>
                (Layak Jalan)
              </Typography>
              <Typography>
                Kondisi Fisik Ban / Tires Condition:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "green" }}
                >
                  &nbsp; V &nbsp;
                </Box>
                (Layak Jalan)
              </Typography>
              <Typography>
                Kekencangan Baut Pengikat Roda / Wheel Nuts:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "green" }}
                >
                  &nbsp; V &nbsp;
                </Box>
                (Layak Jalan)
              </Typography>
              <Typography>
                Kondisi Pengunci Kabin / Cabin Lock Condition:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "yellow" }}
                >
                  &nbsp; P &nbsp;
                </Box>
                (Periksa)
              </Typography>
              <Typography>
                Ketinggian Oli Power Steering / Power Steering Oil Level:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "green" }}
                >
                  &nbsp; V &nbsp;
                </Box>
                (Layak Jalan)
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: "bolder" }}>
              Sisi Kiri Tengah
            </Typography>
            <Box mt={2} mb={2}>
              <Typography>
                Kondisi Kompartemen Baterai / Battery Condition:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "green" }}
                >
                  &nbsp; V &nbsp;
                </Box>
                (Layak Jalan)
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: "bolder" }}>
              Sisi Kiri Belakang
            </Typography>
            <Box mt={2} mb={2}>
              <Typography>
                Kondisi Fisik Ban / Tires Condition:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "blue" }}
                >
                  &nbsp; G &nbsp;
                </Box>
                (Ganti)
              </Typography>
              <Typography>
                Kekencangan Baut Pengikat Roda / Wheel Nuts:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "green" }}
                >
                  &nbsp; V &nbsp;
                </Box>
                (Layak Jalan)
              </Typography>
              <Typography>
                Kondisi Pegas / Springs:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "green" }}
                >
                  &nbsp; V &nbsp;
                </Box>
                (Layak Jalan)
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bolder" }}>Sisi Belakang</Typography>
            <Box mt={2} mb={2}>
              <Typography>
                Kondisi Lampu / Lamps Condition:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "yellow" }}
                >
                  &nbsp; P &nbsp;
                </Box>
                (Periksa)
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: "bolder" }}>
              Sisi Kanan Belakang
            </Typography>
            <Box mt={2} mb={2}>
              <Typography>
                Kekencangan Baut Pengikat Roda / Wheel Nuts:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "blue" }}
                >
                  &nbsp; G &nbsp;
                </Box>
                (Ganti)
              </Typography>
              <Typography>
                Kondisi Pegas / Springs:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "yellow" }}
                >
                  &nbsp; P &nbsp;
                </Box>
                (Periksa)
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: "bolder" }}>
              Sisi Kanan Tengah
            </Typography>
            <Box mt={2} mb={2}>
              <Typography>
                Selang Bahan Bakar:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "green" }}
                >
                  &nbsp; V &nbsp;
                </Box>
                (Layak Jalan)
              </Typography>
              <Typography>
                Kondisi Tangki Bahan Bakar:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "blue" }}
                >
                  &nbsp; G &nbsp;
                </Box>
                (Ganti)
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item md={6}>
          <Box>
            <Typography sx={{ fontWeight: "bolder" }}>Sisi Bawah</Typography>
            <Box mt={2} mb={2}>
              <Typography>
                Kondisi Sistem Kemudi / Steering Condition
              </Typography>
              <ul>
                <li>
                  <Typography>
                    Kebocoran Oli / Oil Lengka:
                    <Box
                      component="span"
                      sx={{ fontWeight: "bolder", color: "yellow" }}
                    >
                      &nbsp; P &nbsp;
                    </Box>
                    (Periksa)
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Tie Rod:
                    <Box
                      component="span"
                      sx={{ fontWeight: "bolder", color: "green" }}
                    >
                      &nbsp; V &nbsp;
                    </Box>
                    (Layak Jalan)
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Drag Link:
                    <Box
                      component="span"
                      sx={{ fontWeight: "bolder", color: "green" }}
                    >
                      &nbsp; V &nbsp;
                    </Box>
                    (Layak Jalan)
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Steering Knuckle:
                    <Box
                      component="span"
                      sx={{ fontWeight: "bolder", color: "blue" }}
                    >
                      &nbsp; G &nbsp;
                    </Box>
                    (Ganti)
                  </Typography>
                </li>
                <li>
                  <Typography>
                    King Pin:
                    <Box
                      component="span"
                      sx={{ fontWeight: "bolder", color: "green" }}
                    >
                      &nbsp; V &nbsp;
                    </Box>
                    (Layak Jalan)
                  </Typography>
                </li>
              </ul>

              <Typography>
                Kondisi Rem Utama Dan Rem Parkir / Service Brake & Parking Brake
                Condition
              </Typography>
              <ul>
                <li>
                  <Typography>
                    Pipa Hydralic:
                    <Box
                      component="span"
                      sx={{ fontWeight: "bolder", color: "green" }}
                    >
                      &nbsp; V &nbsp;
                    </Box>
                    (Layak Jalan)
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Ketebalan Kampas Rem:
                    <Box
                      component="span"
                      sx={{ fontWeight: "bolder", color: "yellow" }}
                    >
                      &nbsp; P &nbsp;
                    </Box>
                    (Periksa)
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Wheel Sylinder:
                    <Box
                      component="span"
                      sx={{ fontWeight: "bolder", color: "blue" }}
                    >
                      &nbsp; G &nbsp;
                    </Box>
                    (Ganti)
                  </Typography>
                </li>
              </ul>

              <Typography>
                Kondisi Sistem Kopling / Clutch System Condition
              </Typography>
              <ul>
                <li>
                  <Typography>
                    Pipa dan selang minyak kopling:
                    <Box
                      component="span"
                      sx={{ fontWeight: "bolder", color: "red" }}
                    >
                      &nbsp; R &nbsp;
                    </Box>
                    (Rusak)
                  </Typography>
                </li>
              </ul>

              <Typography>
                Kondisi Sumbu Depan Dan Suspensi / Fron Axle Dan Suspension
                Condition:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "red" }}
                >
                  &nbsp; R &nbsp;
                </Box>
                (Rusak)
              </Typography>

              <Typography>
                Kondisi Sumbu Belakang Dan Suspensi / Real Axle Dan Suspension
                Condition:
                <Box
                  component="span"
                  sx={{ fontWeight: "bolder", color: "blue" }}
                >
                  &nbsp; G &nbsp;
                </Box>
                (Ganti)
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ fontWeight: "bolder" }}>
                Sisi Dalam Kendaraan
              </Typography>

              <Box mt={2} mb={2}>
                <Typography>
                  Kunci Kontak Posisi "OFF" / Ignation Key "Off"
                </Typography>

                <Box>
                  <ol>
                    <li>
                      <Typography>
                        Speling Pedal Kopling / Clutch Pedal Speling
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        Speling Pedal Rem / Brake Pedal Speling
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        Speling Roda Kemudi / Steering Wheel Speling
                      </Typography>
                    </li>
                    <li>
                      <Typography>Sabuk Pengaman / Safety Belt</Typography>
                    </li>
                    <li>
                      <Typography>
                        Peratalan Kendaraan Lainnya / Others Equipment
                      </Typography>
                      <ul>
                        <li>
                          <Typography>
                            APAR (Alat Pemadam Api Ringan):
                            <Box component="span" sx={{ fontWeight: "bolder" }}>
                              &nbsp; X &nbsp;
                            </Box>
                            (Tidak Layak Jalan)
                          </Typography>
                        </li>
                        <li>
                          <Typography>
                            Kotak P3K:
                            <Box
                              component="span"
                              sx={{ fontWeight: "bolder", color: "blue" }}
                            >
                              &nbsp; G &nbsp;
                            </Box>
                            (Ganti)
                          </Typography>
                        </li>
                        <li>
                          <Typography>
                            Segitiga Pengaman:
                            <Box
                              component="span"
                              sx={{ fontWeight: "bolder", color: "yellow" }}
                            >
                              &nbsp; P &nbsp;
                            </Box>
                            (Periksa)
                          </Typography>
                        </li>
                      </ul>
                    </li>
                  </ol>
                </Box>

                <Typography>
                  Kunci Kontak Posisi "ON" / Ignation Key "ON"
                </Typography>
                <Box>
                  <ol>
                    <li>
                      <Typography>
                        Fungsi Switch Elektronik / Electrical Switch Function :
                        <Box component="span" sx={{ fontWeight: "bolder" }}>
                          &nbsp; X &nbsp;
                        </Box>
                        (Tidak Layak Jalan)
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        Tekanan Pompa Vacuum / Vacuum Pump :
                        <Box component="span" sx={{ fontWeight: "bolder" }}>
                          &nbsp; X &nbsp;
                        </Box>
                        (Tidak Layak Jalan)
                      </Typography>
                    </li>
                  </ol>
                </Box>

                <Typography>Saat Mesin Hidup / Engine On</Typography>
                <Box>
                  <ol>
                    <li>
                      <Typography>
                        Lampu Indikator / Indicator Lamps On Instrument Panel :
                        <Box
                          component="span"
                          sx={{ fontWeight: "bolder", color: "blue" }}
                        >
                          &nbsp; G &nbsp;
                        </Box>
                        (Ganti)
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        Tekanan Pompa Vacuum / Vacuum Pump :
                        <Box component="span" sx={{ fontWeight: "bolder" }}>
                          &nbsp; X &nbsp;
                        </Box>
                        (Tidak Layak Jalan)
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        Fungsi Rem Gas Buang / Exhaust Brake Function :
                        <Box
                          component="span"
                          sx={{ fontWeight: "bolder", color: "green" }}
                        >
                          &nbsp; V &nbsp;
                        </Box>
                        (Layak Jalan)
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        Fungsi Rem Kaki / Service Brake Function :
                        <Box
                          component="span"
                          sx={{ fontWeight: "bolder", color: "yellow" }}
                        >
                          &nbsp; P &nbsp;
                        </Box>
                        (Periksa)
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        Fungsi Rem Parkir / Parking Brake Function :
                        <Box
                          component="span"
                          sx={{ fontWeight: "bolder", color: "yellow" }}
                        >
                          &nbsp; P &nbsp;
                        </Box>
                        (Periksa)
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        Fungsi Klakson / Horn Function:
                        <Box
                          component="span"
                          sx={{ fontWeight: "bolder", color: "reen" }}
                        >
                          &nbsp; V &nbsp;
                        </Box>
                        (Layak Jalan)
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        Fungsi Lampu - Lampu / Lights Function:
                        <Box
                          component="span"
                          sx={{ fontWeight: "bolder", color: "green" }}
                        >
                          &nbsp; V &nbsp;
                        </Box>
                        (Layak Jalan)
                      </Typography>
                    </li>
                  </ol>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container p={2}>
        <Grid item md={2}>
          <Typography sx={{ fontWeight: "bolder" }}>
            Keterangan / <br /> Remarks
          </Typography>
        </Grid>
        <Grid item md={10}>
          <Typography>
            <Typography
              component="span"
              sx={{ color: "#e81a0c", fontWeight: "bolder" }}
            >
              {" "}
              R
            </Typography>{" "}
            = Rusak / Damage
          </Typography>

          <Typography>
            <Typography
              component="span"
              sx={{ color: "blue", fontWeight: "bolder" }}
            >
              {" "}
              G
            </Typography>{" "}
            = Ganti / Change
          </Typography>

          <Typography>
            <Typography
              component="span"
              sx={{ color: "yellow", fontWeight: "bolder" }}
            >
              {" "}
              P
            </Typography>{" "}
            = Periksa / Check
          </Typography>

          <Typography>
            <Typography
              component="span"
              sx={{ color: "green", fontWeight: "bolder" }}
            >
              {" "}
              V
            </Typography>{" "}
            = Layak Jalan / Permitted To Operate
          </Typography>

          <Typography>
            <Typography
              component="span"
              sx={{ color: "black", fontWeight: "bolder" }}
            >
              {" "}
              R
            </Typography>{" "}
            = Tidak Layak Jalan / Not Permitted To Operate
          </Typography>
        </Grid>
      </Grid>

      <Grid container p={2}>
        <Grid item md={2}>
          <Typography sx={{ fontWeight: "bolder" }}>Catatan / Note</Typography>
        </Grid>
        <Grid item md={10}>
          <TextField
            multiline="true"
            rows={4}
            fullWidth
            placeholder="Tambahan keterangan..."
          />
        </Grid>
      </Grid>

      <Grid container p={2} display="flex" justifyContent="end">
        <Grid item>
          <Button variant="contained">Submit</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
