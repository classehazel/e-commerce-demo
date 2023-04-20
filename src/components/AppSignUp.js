import React from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  FormControl,
  InputAdornment,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const AppSignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container
      sx={{
        textAlign: "center",
        marginTop: 10,
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Box
        component="form"
        sx={{ "&.MuiTextField-root": { m: 1, width: "25ch" }, padding: 15 }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h2" sx={{ fontFamily: "Helvetica" }}>
          SHOPPY
        </Typography>
        <Typography variant="h3" sx={{ fontFamily: "Helvetica" }}>
          SIGN UP
        </Typography>
        <Grid container sx={{ paddingTop: 5 }}>
          <Grid item xs={6}>
            <TextField
              required
              margin="normal"
              variant="outlined"
              label="First Name"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              margin="normal"
              variant="outlined"
              label="Last Name"
            />
          </Grid>
        </Grid>

        <Box
          sx={{
            width: 500,
            maxWidth: 700,
            paddingBottom: 5,
            paddingLeft: 5,
            paddingRight: 5,
          }}
        >
          <TextField
            required
            fullWidth
            margin="normal"
            variant="outlined"
            label="Email Address"
          />
          <FormControl required fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Box>
        <Box sx={{ padding: 5 }}>
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
            href="/signup"
          >
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AppSignUp;
