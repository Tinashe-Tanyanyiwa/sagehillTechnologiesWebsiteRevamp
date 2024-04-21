"use client";
import Image from "next/image";
import "./page.module.css";
import * as React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

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
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import guyPointing from "../../public/Images/guyPointing.png";
import missionIcon from "../../public/Images/missionIcon.png";
import visionIcon from "../../public/Images/visionIcon.png";
import didYouKnow from "../../public/Images/didYouKnow.png";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import bottomBackground from "../../public/Images/bottomBackground.png";
import landingAndAboutBackground from "../../public/Images/landingAndAboutBackground.png";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import modalBackground from "../../public/Images/modalBackground.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TextField from "@mui/material/TextField";
import sagehillGuys from "../../public/Images/sagehillGuys.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "@mui/material/Link";
import Contact from "./Contact";
// MODAL OPEN

const style = {
  // position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 450,
  bgcolor: "background.paper",
  border: "0px solid transparent",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
  minHeight: "500px",
  position: "relative",
};

// const pages = [
//   "Home",
//   <>
//     {" "}
//     Our Products <ExpandMoreIcon />
//   </>,
//   <>
//     {" "}
//     Our Services <ExpandMoreIcon />
//   </>,
//   "Hosting & Domains",
//   "Contact",
// ];

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
  // MODAL
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // END OF MODL
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
  // SCROLL FRAMER MOTION
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  // PRODUCTS DROPDOW
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openProducts = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseProducts = () => {
    setAnchorEl(null);
  };

  // END OF DROPDOWN
  // SERVICES DROPDOW
  const [anchorElServices, setAnchorElServices] =
    React.useState<null | HTMLElement>(null);
  const openServices = Boolean(anchorElServices);
  const handleClickServices = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElServices(event.currentTarget);
  };
  const handleCloseServices = () => {
    setAnchorElServices(null);
  };

  // END OF DROPDOWN
  // HARDWARE AND ACCESSORIES DROPDOW
  const [anchorElHAA, setAnchorElHAA] = React.useState<null | HTMLElement>(
    null
  );
  const openHAA = Boolean(anchorElHAA);
  const handleClickHAA = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElHAA(event.currentTarget);
  };
  const handleCloseHAA = () => {
    setAnchorElHAA(null);
  };

  // END OF DROPDOWN
  // CYBER SECURITY DROPDOW
  const [anchorElCS, setAnchorElCS] = React.useState<null | HTMLElement>(null);
  const openCS = Boolean(anchorElCS);
  const handleClickCS = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElCS(event.currentTarget);
  };
  const handleCloseCS = () => {
    setAnchorElCS(null);
  };

  // END OF DROPDOWN
  // ERP SOFTWARE DROPDOW
  const [anchorElERP, setAnchorElERP] = React.useState<null | HTMLElement>(
    null
  );
  const openERP = Boolean(anchorElERP);
  const handleClickERP = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElERP(event.currentTarget);
  };
  const handleCloseERP = () => {
    setAnchorElERP(null);
  };

  // END OF DROPDOWN
  // POINT OF SALE DROPDOW
  const [anchorElPOS, setAnchorElPOS] = React.useState<null | HTMLElement>(
    null
  );
  const openPOS = Boolean(anchorElPOS);
  const handleClickPOS = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElPOS(event.currentTarget);
  };
  const handleClosePOS = () => {
    setAnchorElPOS(null);
  };

  // END OF DROPDOWN
  // HSTING AND DOMAINS  DROPDOW
  const [anchorElHD, setAnchorElHD] = React.useState<null | HTMLElement>(null);
  const openHD = Boolean(anchorElHD);
  const handleClickHD = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElHD(event.currentTarget);
  };
  const handleCloseHD = () => {
    setAnchorElHD(null);
  };

  // END OF DROPDOWN
  // SCROLL EVENT THAT CHANGES COLOR OF NAVBAR
  const [navColor, setnavColor] = React.useState(false);
  const listenScrollEvent = () => {
    if (window.scrollY >= 100) {
      setnavColor(true);
      console.log(window.scrollY);
    } else {
      setnavColor(false);
      console.log("Not loading");
    }
  };
  window.addEventListener("scroll", listenScrollEvent);
  // END OF SCROLL EVENT
  return (
    <div style={{ height: "auto", position: "relative" }}>
      <Image
        src={landingAndAboutBackground}
        className="bg-img"
        alt={"Background Image"}
      />
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
            <Container
              maxWidth="xl"
              sx={{
                paddingLeft: "0px !important",
                paddingRight: "0px !important",
              }}
            >
              <Toolbar
                disableGutters
                sx={{ position: "sticky" }}
                className={navColor ? "navFluid fixedFluid" : "navFluid"}
              >
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
                    <Link
                      href="#home"
                      color="inherit"
                      sx={{ textDecoration: "none" }}
                    >
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Home</Typography>
                      </MenuItem>
                    </Link>
                    <Link
                      href="#about"
                      color="inherit"
                      sx={{ textDecoration: "none" }}
                    >
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">About Us</Typography>
                      </MenuItem>
                    </Link>
                    <MenuItem onClick={(event) => handleClick(event)}>
                      <Typography
                        textAlign="center"
                        sx={{ display: "flex", textAlign: "center" }}
                      >
                        Our Products <ExpandMoreIcon />
                      </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={(event: React.MouseEvent<HTMLLIElement>) =>
                        handleClickServices(event)
                      }
                    >
                      <Typography
                        textAlign="center"
                        sx={{ display: "flex", textAlign: "center" }}
                      >
                        Our Services <ExpandMoreIcon />{" "}
                      </Typography>
                    </MenuItem>
                    <Link
                      href="#contact"
                      color="inherit"
                      sx={{ textDecoration: "none" }}
                    >
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">Contact</Typography>
                      </MenuItem>
                    </Link>
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
                  <Link
                    href="#home"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "flex" }}
                    >
                      Home
                    </Button>
                  </Link>
                  <Link
                    href="#about"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "flex" }}
                    >
                      About Us
                    </Button>
                  </Link>
                  <Button
                    sx={{ my: 2, color: "white", display: "flex" }}
                    id="basic-button"
                    aria-controls={openProducts ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openProducts ? "true" : undefined}
                    onClick={(event) => {
                      handleCloseNavMenu();
                      handleClick(event);
                    }}
                  >
                    Our Products <ExpandMoreIcon />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openProducts}
                    onClose={handleCloseProducts}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    {/* HARDWARE AND ACCESSORIES DROPDOWN AND CHILDREN COMPONENTS */}
                    <MenuItem
                      id="basic-button-HAA"
                      aria-controls={openHAA ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={openHAA ? "true" : undefined}
                      onClick={(event) => {
                        handleClickHAA(event);
                      }}
                    >
                      Hardware & Accessories{" "}
                      <ExpandMoreIcon sx={{ color: "#1976d2" }} />
                    </MenuItem>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorElHAA}
                      open={openHAA}
                      onClose={handleCloseHAA}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <Link
                        href="https://www.techshop.sagehilltechnologies.com/product-category/server/"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        sx={{ textDecoration: "none" }}
                      >
                        <MenuItem
                          onClick={() => {
                            handleCloseHAA();
                            handleCloseNavMenu();
                            handleCloseProducts();
                          }}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          Servers <ArrowForwardIcon sx={{ color: "#1976d2" }} />
                        </MenuItem>
                      </Link>
                      <Link
                        href="https://www.techshop.sagehilltechnologies.com/product-category/nas-devices/"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        sx={{ textDecoration: "none" }}
                      >
                        <MenuItem
                          onClick={() => {
                            handleCloseHAA();
                            handleCloseNavMenu();
                            handleCloseProducts();
                          }}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          NAS Devices{" "}
                          <ArrowForwardIcon sx={{ color: "#1976d2" }} />
                        </MenuItem>
                      </Link>
                      <Link
                        href="https://www.techshop.sagehilltechnologies.com/product-category/laptops/"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        sx={{ textDecoration: "none" }}
                      >
                        <MenuItem
                          onClick={() => {
                            handleCloseHAA();
                            handleCloseNavMenu();
                            handleCloseProducts();
                          }}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          Laptops and Desktops{" "}
                          <ArrowForwardIcon sx={{ color: "#1976d2" }} />
                        </MenuItem>
                      </Link>
                      <Link
                        href="https://www.techshop.sagehilltechnologies.com/product-category/accessories/"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        sx={{ textDecoration: "none" }}
                      >
                        <MenuItem
                          onClick={() => {
                            handleCloseHAA();
                            handleCloseNavMenu();
                            handleCloseProducts();
                          }}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          Consumables and Accessories{" "}
                          <ArrowForwardIcon sx={{ color: "#1976d2" }} />
                        </MenuItem>
                      </Link>
                    </Menu>
                    {/* END OF HARDWARE AND CHILDREN */}
                    {/* CYBER SECURITY DROPDOWN AND CHILDREN COMPONENTS */}
                    <MenuItem
                      id="basic-button-CS"
                      aria-controls={openCS ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={openCS ? "true" : undefined}
                      onClick={(event) => {
                        handleClickCS(event);
                      }}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      Cyber Security{" "}
                      <ExpandMoreIcon sx={{ color: "#1976d2" }} />
                    </MenuItem>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorElCS}
                      open={openCS}
                      onClose={handleCloseCS}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <Link
                        href="https://sagehilltechnologies.com/sophos.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        sx={{ textDecoration: "none" }}
                      >
                        <MenuItem
                          onClick={() => {
                            handleCloseCS();
                            handleCloseNavMenu();
                            handleCloseProducts();
                          }}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          Sophos Security{" "}
                          <ArrowForwardIcon sx={{ color: "#1976d2" }} />
                        </MenuItem>
                      </Link>
                      <Link
                        href="https://sagehilltechnologies.com/topia.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        sx={{ textDecoration: "none" }}
                      >
                        <MenuItem
                          onClick={() => {
                            handleCloseCS();
                            handleCloseNavMenu();
                            handleCloseProducts();
                          }}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          Topia Vulnerability Assessment{" "}
                          <ArrowForwardIcon sx={{ color: "#1976d2" }} />
                        </MenuItem>
                      </Link>
                    </Menu>
                    {/* END OF CYBER SECURITY AND CHILDREN */}
                    {/* ERP SOFTWARE DROPDOWN AND CHILDREN COMPONENTS */}
                    <MenuItem
                      id="basic-button-ERP"
                      aria-controls={openERP ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={openERP ? "true" : undefined}
                      onClick={(event) => {
                        handleClickERP(event);
                      }}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      ERP Software <ExpandMoreIcon sx={{ color: "#1976d2" }} />
                    </MenuItem>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorElERP}
                      open={openERP}
                      onClose={handleCloseERP}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <Link
                        href="https://sagehilltechnologies.com/palladium.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        sx={{ textDecoration: "none" }}
                      >
                        <MenuItem
                          onClick={() => {
                            handleCloseERP();
                            handleCloseNavMenu();
                            handleCloseProducts();
                          }}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          Palladium Accounting{" "}
                          <ArrowForwardIcon sx={{ color: "#1976d2" }} />
                        </MenuItem>
                      </Link>
                    </Menu>
                    {/* END OF ERP SOFTWARE AND CHILDREN */}
                    {/* POINT OF SALE DROPDOWN AND CHILDREN COMPONENTS */}
                    <MenuItem
                      id="basic-button-POS"
                      aria-controls={openPOS ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={openPOS ? "true" : undefined}
                      onClick={(event) => {
                        handleClickPOS(event);
                      }}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      Point Of Sale <ExpandMoreIcon sx={{ color: "#1976d2" }} />
                    </MenuItem>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorElPOS}
                      open={openPOS}
                      onClose={handleClosePOS}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      {" "}
                      <Link
                        href="https://sagehilltechnologies.com/ivend.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        sx={{ textDecoration: "none" }}
                      >
                        <MenuItem
                          onClick={() => {
                            handleClosePOS();
                            handleCloseNavMenu();
                            handleCloseProducts();
                          }}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          Ivend Retail{" "}
                          <ArrowForwardIcon sx={{ color: "#1976d2" }} />
                        </MenuItem>
                      </Link>
                    </Menu>
                    {/* END OF POINT OF SALE AND CHILDREN */}
                    {/* <Link
                      href="https://sagehilltechnologies.com/ivend.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      color="inherit"
                      sx={{ textDecoration: "none" }}
                    >
                      <MenuItem
                        onClick={() => {
                          handleCloseProducts();
                          handleCloseNavMenu();
                          handleCloseProducts();
                        }}
                      >
                        Hospital MIS
                      </MenuItem>
                    </Link> */}
                  </Menu>

                  <Button
                    sx={{ my: 2, color: "white", display: "flex" }}
                    id="basic-button-services"
                    aria-controls={openServices ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openServices ? "true" : undefined}
                    onClick={(event) => {
                      handleCloseNavMenu();
                      handleClickServices(event);
                    }}
                  >
                    Our Services <ExpandMoreIcon />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorElServices}
                    open={openServices}
                    onClose={handleCloseServices}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <Link
                      href="#software"
                      color="inherit"
                      sx={{ textDecoration: "none" }}
                    >
                      <MenuItem
                        onClick={() => {
                          handleCloseServices();
                          handleCloseNavMenu();
                          handleCloseProducts();
                        }}
                      >
                        Software Development
                      </MenuItem>
                    </Link>
                    {/* <MenuItem
                      onClick={() => {
                        handleCloseServices();
                        handleCloseNavMenu();
                        handleCloseProducts();
                      }}
                    >
                      Hosting & Domains
                    </MenuItem> */}
                    {/* HOSTING AND DOMAINS DROPDOWN AND CHILDREN COMPONENTS */}
                    <MenuItem
                      id="basic-button-HD"
                      aria-controls={openHD ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={openHD ? "true" : undefined}
                      onClick={(event) => {
                        // handleCloseNavMenu();
                        handleClickHD(event);
                      }}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      Hosting & Domains{" "}
                      <ExpandMoreIcon sx={{ color: "#1976d2" }} />
                    </MenuItem>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorElHD}
                      open={openHD}
                      onClose={handleCloseHD}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <Link
                        href="https://sagehillhost.com/index.php?rp=/store/ssl-certificates"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        sx={{ textDecoration: "none" }}
                      >
                        <MenuItem
                          onClick={() => {
                            handleCloseHD();
                            handleCloseNavMenu();
                            handleCloseServices();
                          }}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          SSL Certificates{" "}
                          <ArrowForwardIcon sx={{ color: "#1976d2" }} />
                        </MenuItem>
                      </Link>
                      <Link
                        href="https://sagehillhost.com/cart.php?a=add&domain=register"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        sx={{ textDecoration: "none" }}
                      >
                        <MenuItem
                          onClick={() => {
                            handleCloseHD();
                            handleCloseNavMenu();
                            handleCloseServices();
                          }}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          Domain Registration{" "}
                          <ArrowForwardIcon sx={{ color: "#1976d2" }} />
                        </MenuItem>
                      </Link>
                      <Link
                        href="https://sagehillhost.com/index.php?rp=/store/shared-hosting"
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        sx={{ textDecoration: "none" }}
                      >
                        <MenuItem
                          onClick={() => {
                            handleCloseHD();
                            handleCloseNavMenu();
                            handleCloseServices();
                          }}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          Hosting Space{" "}
                          <ArrowForwardIcon sx={{ color: "#1976d2" }} />
                        </MenuItem>
                      </Link>
                    </Menu>
                    {/* END OF HOSTING AND DOMAINS AND CHILDREN */}
                    <Link
                      href="#software"
                      color="inherit"
                      sx={{ textDecoration: "none" }}
                    >
                      <MenuItem
                        onClick={() => {
                          handleCloseServices();
                          handleCloseNavMenu();
                          handleCloseProducts();
                        }}
                      >
                        IT Support
                      </MenuItem>
                    </Link>
                  </Menu>
                  <Link
                    href="#contact"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "flex" }}
                    >
                      Contact
                    </Button>
                  </Link>
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
          style={{
            paddingTop: "260px",
            paddingBottom: "240px",
            display: "flex",
            justifyContent: "center",
          }}
          id="home"
        >
          <Grid
            item
            sm={12}
            md={6}
            sx={{ paddingLeft: "100px !important" }}
            className="column"
          >
            <Grid item xs={11}>
              <motion.div
                whileHover={{ scale: 1.1, originX: 0, color: "#f8e112" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{ color: "white", fontStyle: "italic" }}
                >
                  TECHNOLOGY SIMPLIFIED
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={11} sx={{ mt: 2 }}>
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
                onClick={handleOpen}
              >
                Contact Us
              </AnimatedButton>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Image
                      src={modalBackground}
                      className="bg-img-zero"
                      alt={"Background Image"}
                    />

                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{
                        color: "black",

                        textAlign: "center",
                      }}
                    >
                      Hire Us
                    </Typography>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Full Name"
                      variant="outlined"
                      sx={{ marginTop: "40px" }}
                    />
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Phone Number"
                      variant="outlined"
                      sx={{ marginTop: "40px" }}
                    />
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Email Address"
                      variant="outlined"
                      sx={{ marginTop: "40px" }}
                    />
                    <TextField
                      fullWidth
                      id="outlined-multiline-static"
                      label="Message"
                      multiline
                      rows={4}
                      defaultValue="I need assistance with..."
                      sx={{ marginTop: "40px" }}
                    />
                    <Box sx={{ marginTop: "40px" }}>
                      <AnimatedButton
                        variants={buttonVariants}
                        whileHover="hover"
                        size="medium"
                        variant="contained"
                        sx={{ borderRadius: "0px 0px 45px", maxWidth: "300px" }}
                      >
                        Submit
                      </AnimatedButton>
                      <AnimatedButton
                        variants={buttonVariants}
                        whileHover="hover"
                        size="medium"
                        variant="contained"
                        sx={{
                          marginLeft: "25px",
                          borderRadius: "0px 0px 45px",
                          backgroundColor: "grey",
                          maxWidth: "300px",
                        }}
                      >
                        Clear
                      </AnimatedButton>
                    </Box>
                  </Box>
                </Fade>
              </Modal>
            </Grid>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            className="column landIcon"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
                src={sagehillProfessionals}
                style={{ height: "250px", width: "auto" }}
                alt="Sagehill Professionals"
                className="logoTwo"
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* ABOUT US SECTION */}

      <Box>
        <Container maxWidth="xl">
          <Grid
            className="row"
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              marginTop: "  0px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              sm={12}
              md={4}
              className="column"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                // viewport={{once : true}}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Card
                    sx={{
                      minWidth: 275,
                      padding: "0px 12px 0px 12px",
                      margin: "0 0px 30px 0px",
                      width: "300px",
                    }}
                  >
                    <CardContent>
                      <Grid
                        item
                        sm={12}
                        md={12}
                        className="column"
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <CardMedia
                          component="img"
                          image={missionIcon.src}
                          style={{ height: "250px", width: "auto" }}
                          alt="Sagehill Employee"
                        />
                      </Grid>
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                          color: "black",
                          fontStyle: "italic",
                          textAlign: "center",
                        }}
                      >
                        Our Mission
                      </Typography>
                    </CardContent>
                    <CardActions
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Typography
                        variant="body2"
                        style={{ textAlign: "justify" }}
                      >
                        To Assist individuals and organizations throughout the
                        world gain competitive advantage through the provision
                        of innovative and simplified ICT business solutions that
                        improve their profitability.
                      </Typography>
                    </CardActions>
                  </Card>
                </motion.div>
              </motion.div>
            </Grid>
            <Grid
              item
              sm={12}
              md={4}
              className="column"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                // viewport={{once : true}}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Card
                    sx={{
                      minWidth: 275,
                      padding: "0px 12px 0px 12px",
                      margin: "0 0px 30px 0px",
                      width: "300px",
                    }}
                  >
                    <CardContent>
                      <Grid
                        item
                        sm={12}
                        md={12}
                        className="column"
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <CardMedia
                          component="img"
                          image={visionIcon.src}
                          style={{ height: "250px", width: "auto" }}
                          alt="Sagehill Employee"
                        />
                      </Grid>
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                          color: "black",
                          fontStyle: "italic",
                          textAlign: "center",
                        }}
                      >
                        Our Vision
                      </Typography>
                    </CardContent>
                    <CardActions
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Typography
                        variant="body2"
                        style={{ textAlign: "justify" }}
                      >
                        To provide the business community with timely cost
                        effective and high quality ICT products thereby
                        maximizing wealth for shareholders and other key
                        stakeholders.
                      </Typography>
                    </CardActions>
                  </Card>
                </motion.div>
              </motion.div>
            </Grid>
            <Grid
              item
              sm={12}
              md={4}
              className="column"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                // viewport={{once : true}}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Card
                    sx={{
                      minWidth: 275,
                      padding: "0px 12px 0px 12px",
                      margin: "0 0px 30px 0px",
                      width: "300px",
                    }}
                  >
                    <CardContent>
                      <Grid
                        item
                        sm={12}
                        md={12}
                        className="column"
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <CardMedia
                          component="img"
                          image={didYouKnow.src}
                          style={{ height: "250px", width: "auto" }}
                          alt="Sagehill Employee"
                        />
                      </Grid>
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                          color: "black",
                          fontStyle: "italic",
                          textAlign: "center",
                        }}
                      >
                        Did you know?
                      </Typography>
                    </CardContent>
                    <CardActions
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Typography
                        variant="body2"
                        style={{ textAlign: "justify" }}
                      >
                        Sagehill Business Solutions is a wholly owned Zimbabwean
                        Company, established in 2011 by an innovative team of
                        highly motivated and energetic, young entrepreneurs with
                        international experience.
                      </Typography>
                    </CardActions>
                  </Card>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>

          {/* ABOUT US */}

          <Grid
            className="row"
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ marginTop: "80px" }}
            id="about"
          >
            <Grid
              item
              sm={12}
              md={6}
              className="column"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                // viewport={{once : true}}
              >
                <Image
                  src={sagehillGuys}
                  style={{ maxHeight: "380px", width: "auto" }}
                  alt="Sagehill Employee"
                  className="sagehillGuys"
                />
              </motion.div>
            </Grid>
            <Grid
              item
              sm={12}
              md={6}
              className="column"

              // sx={{ display: "flex"}}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                // viewport={{once : true}}
              >
                <motion.div
                  whileHover={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 500, damping: 10 }}
                  style={{
                    display: "flex",
                  }}
                  className="aboutUs"
                >
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      color: "white",

                      backgroundColor: "#222D3D",
                      width: "60%",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "200px 0px 200px",
                      textAlign: "justify",
                      fontStyle: "italic",
                    }}
                  >
                    About Us
                    <IconButton aria-label="success rate">
                      <FormatQuoteIcon sx={{ color: "#1976d2" }} />
                    </IconButton>
                  </Typography>
                </motion.div>
                {/* </motion.div> */}
                {/* </Grid> */}
                {/* <br /> */}
                {/* <Grid item xs={12} sx={{ mt: 2 }}> */}
                {/* <motion.div
                  whileHover={{ scale: 1.1, originX: 0, color: "#f8e112" }}
                  transition={{ type: "spring", stiffness: 300 }}
                > */}
                <Typography
                  variant="subtitle2"
                  component="h2"
                  sx={{
                    color: "black",
                    fontSize: "19px",
                    paddingTop: "30px",
                    textAlign: "justify",
                  }}
                  className="aboutFIR"
                >
                  Sagehill is an enabler of 4IR(the 4th Industrial Revolution)
                  mainly focusing on digital transformation through business
                  process automation. We offer a wide range of ICT Solutions
                  including Mobile applications development, Sagehill Hospital
                  Management Information System, Enterprise Resource Planning
                  Software, Web Hosting and Web Design services, Consultancy
                  Services as well Computer Hardware and Accessories Supply
                  across Zimbabwe and Zambia. As Sagehill we have partnered with
                  organisations such as IBM and Palladium Accounting South
                  Africa, UiPath, Microsoft, Eset, Sophos and Kasperky to assist
                  in the goal to simplify technology.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Landing;
