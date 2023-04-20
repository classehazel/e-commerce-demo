import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";

const IntroMain = () => {
  return (
    <Container
      sx={{
        marginY: 8,
        bgcolor: "#d6c8b9",
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
      }}
      maxWidth="100"
    >
      <Box
        sx={{
          padding: 10,
          justifyContent: "center",
          width: 1200,
          marginTop: 8,
          marginBottom: 8,
        }}
      >
        <Grid container spacing={5} sx={{ justifyContent: "center" }}>
          <Grid item xs={6}>
            <Typography
              variant="h2"
              paddingTop={10}
              paddingBottom={10}
              sx={{ fontFamily: "Helvetica" }}
            >
              SHOPPY IS...
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="h6"
              paddingTop={8}
              paddingBottom={8}
              sx={{ fontFamily: "Helvetica", display: "flex" }}
            >
              Thank you for choosing SHOPPY as your go-to destination for
              fashion. We hope you enjoy your shopping experience here at SHOPPY
              and find the perfect pieces to enhance your wardrobe.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default IntroMain;
