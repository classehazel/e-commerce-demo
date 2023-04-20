import {
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Box,
  Link,
} from "@mui/material";
import React from "react";

const Outer = () => {
  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h4" paddingBottom={5}>
        Outer
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper elevation={3}>
            <Button href="/products">
              <img
                src="https://images.unsplash.com/photo-1610288311735-39b7facbd095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZGlnYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="img"
              />
            </Button>
            <Box>
              <Link
                variant="subtitle1"
                href="/products"
                underline="hover"
                color={"black"}
                sx={{ fontFamily: "Helvetica", fontSize: 20 }}
              >
                Yellow Cardigan
              </Link>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Outer;
