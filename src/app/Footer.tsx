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
import Logo from "../../public/Images/whiteLogoSagehill.png";
import sagehillProfessionals from "../../public/Images/sagehillProfessionals.png";
import "./globals.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

function Footer() {
  return (
    <div style={{ height: "auto", background: "#222d3d", marginTop: "30px" }}>
      <Container maxWidth="xl">
        <Grid
          className="row"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ marginTop: "80px", paddingLeft: "60px", paddingRight: "60px" }}
        >
          <Grid
            item
            sm={12}
            md={6}
            className="column"
            // sx={{ display: "flex", justifyContent: "center" }}
          >
            <Image
              src={Logo}
              style={{ height: "90px", width: "auto" }}
              alt="White Sagehill Technologies Logo"
              className="logoTwo"
            />
            <Box sx={{ marginTop: "10px" }}>
              <IconButton aria-label="success rate">
                <InstagramIcon sx={{ height: 25, width: 25, color: "white" }} />
              </IconButton>
              <IconButton aria-label="success rate">
                <FacebookIcon sx={{ height: 25, width: 25, color: "white" }} />
              </IconButton>
              <IconButton aria-label="success rate">
                <XIcon sx={{ height: 25, width: 25, color: "white" }} />
              </IconButton>
              <IconButton aria-label="success rate">
                <WhatsAppIcon sx={{ height: 25, width: 25, color: "white" }} />
              </IconButton>
            </Box>
            <Box
              sx={{ marginTop: "10px", display: "flex", alignItems: "center" }}
            >
              <IconButton aria-label="success rate">
                <LocationOnIcon
                  sx={{ height: 25, width: 25, color: "white" }}
                />
              </IconButton>
              <Typography
                variant="subtitle2"
                component="h2"
                sx={{ color: "white", fontSize: "19px", marginLeft: "10px" }}
              >
                23 South Wing Mon Repos <br /> Newlands Shopping Centre 
                Harare, Zimbabwe
              </Typography>
            </Box>
            <Box
              sx={{ marginTop: "10px", display: "flex", alignItems: "center" }}
            >
              <IconButton aria-label="success rate">
                <AddIcCallIcon
                  sx={{ height: 25, width: 25, color: "white" }}
                />
              </IconButton>
              <Typography
                variant="subtitle2"
                component="h2"
                sx={{ color: "white", fontSize: "19px", marginLeft: "10px" }}
              >
                (+263) 713 921 721
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            className="column"
            sx={{ paddingTop: "30px !important"}}
          >
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d121556.15053757964!2d30.991876444671615!3d-17.8090919450945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e6!4m5!1s0x1931a5d9bdbd6047%3A0x55c4b60f3f138a3!2sSagehill%20Business%20Solutions%2C%2023%20South%20Wing%20Mon%20Repos%20Newlands%20Shopping%20Centre%20Harare%2C%20zimbabwe%2C%20Zimbabwe!3m2!1d-17.809109199999998!2d31.074279599999997!4m4!1s0x1931a5d9bdbd6047%3A0x55c4b60f3f138a3!3m2!1d-17.809109199999998!2d31.074279599999997!5e0!3m2!1sen!2sus!4v1712743826143!5m2!1sen!2sus"
              width="100%"
              height="309"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
          <Container sx={{display:"flex", justifyContent:"center"}}>
          <Box
          sx={{
            border: "1px solid white",
            width: "100%",
            marginTop: "23px",
          }}
        ></Box>
          </Container>
          <Typography
                variant="subtitle2"
                component="h2"
                sx={{ color: "white", fontSize: "19px", marginLeft: "34px", marginTop:"20px", marginBottom:"20px" }}
              >
              © 2024 sagehilltechnologies ,All Rights Reserved. Design by Sagehill Business Solutions
              </Typography>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
