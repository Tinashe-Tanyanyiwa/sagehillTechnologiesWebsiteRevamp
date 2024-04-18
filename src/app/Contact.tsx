"use client";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import GroupsIcon from "@mui/icons-material/Groups";
import "./globals.css";
import teamWork from "../../public/Images/teamWork.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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
// CODE TO ADD BUTTON
const AnimatedButton = styled(motion(Button))`
  background-color: #222d3d;
  color: #ffffff;
  /* Add any additional custom styles here */
`;

function Contact() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ height: "auto" }}>
      <Grid
        className="row"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ marginTop: "80px", display: "flex", justifyContent: "center" }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: "black",
              fontFamily: "Dancing Script",
              textAlign: "center",
            }}
          >
            Contact Us
          </Typography>
        </Container>
        <Box
          sx={{
            border: "2px solid #1976d2",
            width: "12%",
            marginTop: "23px",
          }}
        ></Box>
      </Grid>

      {/* CONTACT AREA */}
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
          <motion.div
            whileHover={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="contactUs"
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "white",
                fontFamily: "Dancing Script",
                backgroundColor: "#222D3D",
                width: "60%",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "200px 0px 200px",
              }}
            >
              Contact Us
              <IconButton aria-label="success rate">
                <FormatQuoteIcon sx={{ color: "#1976d2" }} />
              </IconButton>
            </Typography>
          </motion.div>
          <Typography
            variant="subtitle2"
            component="h2"
            sx={{ color: "black", fontSize: "19px", paddingTop: "30px" }}
          >
            Need to get in touch with us? Either fill out the form with your
            inquiry or find the department email you’d like to contact below
          </Typography>
          <AnimatedButton
            variants={buttonVariants}
            whileHover="hover"
            size="medium"
            variant="contained"
            sx={{ marginTop: "40px" }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            The Emails we use{" "}
            <IconButton aria-label="success rate">
              <ArrowDropDownIcon sx={{ color: "#1976d2" }} />
            </IconButton>
          </AnimatedButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>info@sagehilltechnologies.com</MenuItem>
            <MenuItem onClick={handleClose}>support@sagehilltechnologies.comt</MenuItem>
          </Menu>
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          className="column"
          // sx={{ display: "flex"}}
        >
          <TextField
            fullWidth
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
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
            label="Email"
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
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
