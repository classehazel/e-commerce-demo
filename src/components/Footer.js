import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Container
      sx={{
        marginTop: 10,
        bgcolor: "#A0816C",
        justifyContent: "center",
        display: "flex",
      }}
      maxWidth="100"
    >
      <Box sx={{ padding: 7 }}>
        <Grid container spacing={5} sx={{ justifyContent: "center" }}>
          <Grid item xs={3} padding={10} color={"#fff"} columns={2}>
            <Box color={"#fff"} display={"flex"}>
              <StoreIcon fontSize="large" />
              <Typography
                variant="subtitle1"
                fontWeight={"bold"}
                paddingLeft={1}
                fontSize={24}
                fontFamily={"Helvetica"}
              >
                SHOPPY
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3} padding={10}>
            <Typography
              variant="subtitle1"
              color={"#fff"}
              fontWeight={"bold"}
              paddingBottom={2}
              fontSize={20}
              fontFamily={"Helvetica"}
            >
              MENU
            </Typography>
            <Box>
              <Link
                variant="subtitle1"
                href="/"
                underline="hover"
                color={"#fff"}
                fontSize={14}
                fontFamily={"Helvetica"}
              >
                HOME
              </Link>
            </Box>
            <Box>
              <Link
                variant="subtitle1"
                href="/products"
                underline="hover"
                color={"#fff"}
                fontSize={14}
                fontFamily={"Helvetica"}
              >
                PRODUCTS
              </Link>
            </Box>
            <Box>
              <Link
                variant="subtitle1"
                href="/aboutus"
                underline="hover"
                color={"#fff"}
                fontSize={14}
                fontFamily={"Helvetica"}
              >
                ABOUT US
              </Link>
            </Box>
            <Box>
              <Link
                variant="subtitle1"
                href="/login"
                underline="hover"
                color={"#fff"}
                fontSize={14}
                fontFamily={"Helvetica"}
              >
                LOGIN
              </Link>
            </Box>
          </Grid>
          <Grid item xs={3} padding={10}>
            <Typography
              variant="subtitle1"
              color={"#fff"}
              fontWeight={"bold"}
              paddingBottom={2}
              fontSize={20}
              fontFamily={"Helvetica"}
            >
              COMPANY
            </Typography>
            <Box>
              <Link
                variant="subtitle1"
                href="/"
                underline="hover"
                color={"#fff"}
                fontSize={14}
                fontFamily={"Helvetica"}
              >
                Privacy Policy
              </Link>
            </Box>
            <Box>
              <Link
                variant="subtitle1"
                href="/"
                underline="hover"
                color={"#fff"}
                fontSize={14}
                fontFamily={"Helvetica"}
              >
                Terms of Service
              </Link>
            </Box>
            <Box>
              <Link
                variant="subtitle1"
                href="/"
                underline="hover"
                color={"#fff"}
                fontSize={14}
                fontFamily={"Helvetica"}
              >
                Contact Us
              </Link>
            </Box>
            <Box>
              <Link
                variant="subtitle1"
                href="/"
                underline="hover"
                color={"#fff"}
                fontSize={14}
                fontFamily={"Helvetica"}
              >
                Cookie Settings
              </Link>
            </Box>
            <Box>
              <Link
                variant="subtitle1"
                href="/"
                underline="hover"
                color={"#fff"}
                fontSize={14}
                fontFamily={"Helvetica"}
              >
                Cookie Policy
              </Link>
            </Box>
          </Grid>
          <Grid item xs={3} padding={10}>
            <Typography
              variant="subtitle1"
              color={"#fff"}
              fontWeight={"bold"}
              paddingBottom={2}
              fontSize={20}
              fontFamily={"Helvetica"}
            >
              SOCIAL
            </Typography>
            <Box>
              <Link
                href="https://www.instagram.com"
                color={"#fff"}
                paddingRight={1}
              >
                <InstagramIcon fontSize="medium" />
              </Link>
              <Link
                href="https://www.youtube.com"
                color={"#fff"}
                paddingRight={1}
              >
                <YouTubeIcon fontSize="medium" />
              </Link>
              <Link
                href="https://www.facebook.com"
                color={"#fff"}
                paddingRight={1}
              >
                <FacebookIcon fontSize="medium" />
              </Link>
              <Link
                href="https://www.twitter.com"
                color={"#fff"}
                paddingRight={1}
              >
                <TwitterIcon fontSize="medium" />
              </Link>
              <Link
                href="https://www.linkedin.com"
                color={"#fff"}
                paddingRight={1}
              >
                <LinkedInIcon fontSize="medium" />
              </Link>
            </Box>
            <Typography variant="subtitle2" color={"#fff"} paddingTop={10}>
              SHOPPY @ 2023
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
