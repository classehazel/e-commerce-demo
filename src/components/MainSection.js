import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const MainSection = () => {
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
              paddingBottom={2}
              sx={{ fontFamily: "Helvetica" }}
            >
              SPRING IS HERE!
            </Typography>
            <Typography
              variant="h5"
              paddingBottom={1}
              sx={{ fontFamily: "Helvetica" }}
            >
              Check new items
            </Typography>
            <Typography
              variant="h4"
              paddingBottom={5}
              sx={{ fontFamily: "Helvetica" }}
            >
              RIGHT NOW
            </Typography>
            <Box>
              <Button
                variant="outlined"
                sx={{
                  "&:hover": {
                    backgroundColor: "#c0b4a6",
                    borderColor: "#8f8279",
                  },
                  borderColor: "#604D40",
                  color: "#604D40",
                  fontFamily: "Helvetica",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
                size="large"
                href="/login"
              >
                GET STARTED
              </Button>
              <Button
                sx={{
                  "&:hover": {
                    backgroundColor: "#43352c",
                  },
                  marginLeft: "10px",
                  bgcolor: "#604D40",
                  fontFamily: "Helvetica",
                  fontSize: 18,
                }}
                variant="contained"
                size="large"
                endIcon={<ShoppingBasketIcon />}
                href="/products"
              >
                SHOP
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MainSection;
