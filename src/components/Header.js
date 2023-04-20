import React from "react";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Link,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import DrawerComp from "./DrawerComp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar
        sx={{
          background: "#A0816C",
          height: 80,
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Toolbar>
          <StoreIcon sx={{ fontSize: 32 }} />
          <Button sx={{ color: "#fff" }}>
            <Link
              href="/"
              variant="subtitle1"
              underline="none"
              color="white"
              sx={{ fontSize: 24, fontFamily: "Helvetica" }}
            >
              SHOPPY
            </Link>
          </Button>
          {isMatch ? (
            <DrawerComp />
          ) : (
            <>
              <Tabs>
                <Tab
                  label="Home"
                  href="/"
                  sx={{ fontFamily: "Helvetica", fontSize: 16, color: "#fff" }}
                />
                <Tab
                  label="PRODUCTS"
                  href="/products"
                  sx={{ fontFamily: "Helvetica", fontSize: 16, color: "#fff" }}
                />
                <Tab
                  label="ABOUT US"
                  href="/aboutus"
                  sx={{ fontFamily: "Helvetica", fontSize: 16, color: "#fff" }}
                />
              </Tabs>
              <Box marginLeft={"auto"}>
                <Badge badgeContent={3} sx={{ marginRight: 3 }}>
                  <Link href="/cart" color={"#fff"}>
                    <ShoppingCartIcon />
                  </Link>
                </Badge>
                <Button
                  variant="contained"
                  sx={{
                    "&:hover": {
                      backgroundColor: "#43352c",
                    },
                    bgcolor: "#604D40",
                    fontFamily: "Helvetica",
                    fontSize: 16,
                  }}
                  href="/login"
                >
                  Login
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
