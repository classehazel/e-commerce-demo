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

const Bottom = () => {
  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h4" paddingBottom={5}>
        Bottom
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper elevation={3}>
            <Button href="/products">
              <img
                src="https://images.unsplash.com/photo-1637069585336-827b298fe84a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRlbmltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
                Denim Jeans
              </Link>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3}>
            <Button href="/products">
              <img
                src="https://images.unsplash.com/photo-1577900232427-18219b9166a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2tpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
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
                Long Wrinkle Skirt
              </Link>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Bottom;
