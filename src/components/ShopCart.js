import { Box, Container, Typography } from "@mui/material";
import React from "react";

const ShopCart = () => {
  return (
    <>
      <Container
        sx={{
          textAlign: "center",
          marginTop: 16,
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            width: 1200,
            alignItems: "center",
            marginTop: 8,
            marginBottom: 8,
            borderColor: "black"
          }}
        >
          <Typography variant="h3" sx={{ fontFamily: "Helvetica" }}>
            Shopping Cart
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default ShopCart;
