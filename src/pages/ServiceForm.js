import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  TextField,
  Divider,
} from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";

import Navbar from "../components/Navbar";
import Home from "./Home";
import SisiKananDepan from "../components/serviceForm/SisiKananDepan";
import SisiDepanKendaraan from "../components/serviceForm/SisiDepanKendaraan";
import React, { useState, useEffect } from "react";
import SisiKiriDepan from "../components/serviceForm/SisiKiriDepan";
import SisiKiriTengah from "../components/serviceForm/SisiKiriTengah";
import SisiKiriBelakang from "../components/serviceForm/SisiKiriBelakang";
import SisiBelakang from "../components/serviceForm/SisiBelakang";
import SisiKananBelakang from "../components/serviceForm/SisiKananBelakang";
import SisiBawah from "../components/serviceForm/SisiBawah";
import SisiDalamKendaraan from "../components/serviceForm/SisiDalamKendaraan";
import SisiKananTengah from "../components/serviceForm/SisiKananTengah";
import SubmitForm from "../components/serviceForm/SubmitForm";
import KeteranganForm from "../components/KeteranganForm";
import TableService from "../components/TableService";

export default function ServiceForm() {
  const steps = [
    "Sisi Kanan Depan",
    "Sisi Depan Kendaraan",
    "Sisi Kiri Depan",
    "Sisi Kiri Tengah",
    "Sisi Kiri Belakang",
    "Sisi Belakang",
    "Sisi Kanan Belakang",
    "Sisi Kanan Tengah",
    "Sisi Bawah",
    "Sisi Dalam Kendaraan",
    "Submit Form",
  ];

  const steps_form = [
    <SisiKananDepan />,
    <SisiDepanKendaraan />,
    <SisiKiriDepan />,
    <SisiKiriTengah />,
    <SisiKiriBelakang />,
    <SisiBelakang />,
    <SisiKananBelakang />,
    <SisiKananTengah />,
    <SisiBawah />,
    <SisiDalamKendaraan />,
    <SubmitForm />,
  ];

  /* Bawaan MUI */
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  /* Batas Bawaan MUI*/

  return (
    <Box>
      <Home>
        <Navbar link={`Service`} name={`Form`} />
        <Box backgroundColor={"rgb(244, 244, 244)"} minHeight={`100vh`}>
          <Box p={3}>
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item md={12} textAlign={`center`}>
                    <Typography fontWeight={`bolder`} mb={6} mt={2}>
                      LEMBAR PEMERIKSAAN TEKNIS <br /> HINO 300 SERIES RGID
                      TRUCK
                    </Typography>

                    <Box mb={3} />
                  </Grid>
                </Grid>

                <Grid container>
                  <Box sx={{ width: "100%" }}>
                    <Box mb={4}>
                      <Stepper
                        nonLinear
                        activeStep={activeStep}
                        alternativeLabel
                      >
                        {steps.map((label, index) => (
                          <Step key={label} completed={completed[index]}>
                            <StepButton
                              color="inherit"
                              onClick={handleStep(index)}
                            >
                              <Typography fontSize={"10px"}>{label}</Typography>
                            </StepButton>
                          </Step>
                        ))}
                      </Stepper>
                    </Box>
                    <div>
                      {allStepsCompleted() ? (
                        <>
                          {/* Ini bagian untuk menampilkan konten table*/}
                          <TableService />

                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              pt: 2,
                            }}
                          >
                            <Box sx={{ flex: "1 1 auto" }} />
                            <Button onClick={handleReset}>Reset</Button>
                          </Box>
                        </>
                      ) : (
                        <>
                          {/* Ini bagian untuk menampilkan konten dari Stepper*/}

                          {activeStep == steps.length - 1 ? (
                            <>
                              <SubmitForm />
                            </>
                          ) : (
                            <>
                              <Grid container>
                                <Grid item md={6} p={2} mt={2}>
                                  {/* Ini looping  steps*/}
                                  <Typography mb={2}>
                                    {steps.map((step, index) => {
                                      return (
                                        <>
                                          {index == activeStep && (
                                            <>
                                              <Typography fontWeight={`bolder`}>
                                                {step}
                                              </Typography>
                                            </>
                                          )}
                                        </>
                                      );
                                    })}
                                  </Typography>

                                  {/* Ini looping component*/}
                                  {steps_form.map((step_form, index) => {
                                    return (
                                      <>
                                        {index == activeStep && (
                                          <>{step_form}</>
                                        )}
                                      </>
                                    );
                                  })}
                                </Grid>

                                <Grid item md={6} p={2} mt={2}>
                                  {steps.map((step, index) => {
                                    return (
                                      <>
                                        {index == activeStep && (
                                          <>
                                            <KeteranganForm />
                                          </>
                                        )}
                                      </>
                                    );
                                  })}
                                </Grid>
                              </Grid>
                            </>
                          )}

                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              pt: 2,
                            }}
                          >
                            <Button
                              color="inherit"
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              sx={{ mr: 1 }}
                            >
                              Back
                            </Button>
                            <Box sx={{ flex: "1 1 auto" }} />
                            <Button onClick={handleNext} sx={{ mr: 1 }}>
                              Next
                            </Button>
                            {activeStep !== steps.length &&
                              (completed[activeStep] ? (
                                <Typography
                                  variant="caption"
                                  sx={{ display: "inline-block" }}
                                >
                                  Step {activeStep + 1} already completed
                                </Typography>
                              ) : (
                                <Button onClick={handleComplete}>
                                  {completedSteps() === totalSteps() - 1
                                    ? "Finish"
                                    : "Complete Step"}
                                </Button>
                              ))}
                          </Box>
                        </>
                      )}
                    </div>
                  </Box>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Home>
    </Box>
  );
}
