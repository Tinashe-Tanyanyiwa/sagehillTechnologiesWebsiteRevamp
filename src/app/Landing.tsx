"use client";
import Image from "next/image";
import "./page.module.css";
import * as React from "react";
import { motion } from "framer-motion";
import useState from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/system";
import background from "../../public/Images/backgroundHome.jpg";
import Logo from "../../public/Images/sagehillTechnologiesLogo.png";
import sagehillProfessionals from "../../public/Images/sagehillProfessionals.png";
import "./globals.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import topBackground from "../../public/Images/toptopBackground.png";
import backgroundHomeEdit from "../../public/Images/backgroundHomeEdit.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import { GoogleFonts } from "next-google-fonts";

const pages = [
  "Home",
  <>
    {" "}
    Our Products <ExpandMoreIcon />
  </>,
  <>
  {" "}
  Our Services <ExpandMoreIcon />
</>,
  "Hosting & Domains",
  "Contact",
];

// ANIMATION FOR FLIPPING IMAGE
const flipAnimation = {
  hidden: {
    scaleX: 1,
  },
  visible: {
    scaleX: -1,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

// CODE TO ADD BUTTON
const AnimatedButton = styled(motion(Button))`
  background-color: #222d3d;
  color: #ffffff;
  /* Add any additional custom styles here */
`;

// HOVER FOR BUTTON
const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rbg(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

function Landing() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div style={{ height: "670px", position: "relative" }}>
      <Image src={topBackground} className="bg-img" alt={"Background Image"} />
      <Container maxWidth="xl">
        <Grid
          className="row"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {/* MENU */}
          <AppBar
            sx={{
              height: "80px",
              bgcolor: "transparent",
              boxShadow: "none",
            }}
          >
            <Container maxWidth="xl">
              <Toolbar disableGutters sx={{ position: "sticky" }}>
                <Box sx={{ flexGrow: 0, ml: 3 }}>
                  {/* LOGO */}
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Image
                      src={Logo}
                      style={{ height: "90px", width: "auto" }}
                      alt="Sagehill Technologies Logo"
                      className="logoTwo"
                    />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "flex", md: "none" },
                    justifyContent: "right",
                  }}
                >
                  {/* HAMBURGER ICON ON SMALL SCREEN VIEW */}
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  {/* LIST ON HAMBURGER MENU */}
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {/* {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))} */}
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Home</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Our Products</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Our Services</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        Hosting & Domains
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Contact</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    justifyContent: "right",
                  }}
                >
                  {/* MAIN SCREEN MENU */}
                  {pages.map((page, index) => (
                    <Button
                      key={index}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "flex",  }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </Grid>
        <Grid
          className="row"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ paddingTop: "240px" }}
        >
          <Grid
            item
            sm={12}
            md={6}
            sx={{ paddingLeft: "100px !important" }}
            className="column"
          >
            <Grid item xs={12}>
              <motion.div
                whileHover={{ scale: 1.1, originX: 0, color: "#f8e112" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{ color: "white", fontFamily: "Dancing Script" }}
                >
                  TECHNOLOGY SIMPLIFIED
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <motion.div
                whileHover={{ scale: 1.1, originX: 0, color: "#f8e112" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Typography
                  variant="subtitle2"
                  component="h2"
                  sx={{ color: "white", fontSize: "20px" }}
                >
                  Enabling 4IR through Data Analytics
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <AnimatedButton
                variants={buttonVariants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                size="large"
                variant="contained"
                endIcon={<ArrowForwardIosIcon />}
                sx={{ borderRadius: "0px 0px 45px" }}
              >
                Contact Us
              </AnimatedButton>
            </Grid>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            className="column"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <motion.div
              // variants={flipAnimation}
              // initial="hidden"
              // animate="visible"
              // whileHover={{
              //   scale: 1.3,
              //   textShadow: "0px 0px 8px rbg(255,255,255)",
              //   // boxShadow: "0px 0px 16px rgba(255, 255, 255, 0.8)",
              // }}
              // transition={{
              //   repeat: Infinity,
              //   repeatType: "reverse",
              //   repeatDelay: 6,
              // }}
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
                src={sagehillProfessionals}
                style={{ height: "300px", width: "auto" }}
                alt="Sagehill Professionals"
                className="logoTwo"
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Landing;
