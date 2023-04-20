import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import React from "react";

const AppLogIn = () => {
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
          LOGIN
        </Typography>
        <Box sx={{ width: 500, maxWidth: 700, padding: 5 }}>
          <TextField fullWidth margin="normal" label="Email Address" />
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
        </Box>
        <Box sx={{ padding: 5 }}>
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
          >
            LOGIN
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
            href="/signup"
          >
            SIGN UP
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AppLogIn;
