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
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import guyPointing from "../../public/Images/guyPointing.png";
import missionIcon from "../../public/Images/missionIcon.png";
import visionIcon from "../../public/Images/visionIcon.png";
import didYouKnow from "../../public/Images/didYouKnow.png";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import CardMedia from "@mui/material/CardMedia";
import bottomBackground from "../../public/Images/bottomBackground.png";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function About() {
  return (
    <div style={{ height: "auto", position: "relative" }}>
      <Image
        src={bottomBackground}
        className="bg-img"
        alt={"Background Image"}
      />
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
                      world gain competitive advantage through the provision of
                      innovative and simplified ICT business solutions that
                      improve their profitability.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardActions>
                </Card>
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
                      effective and high quality ICT products thereby maximizing
                      wealth for shareholders and other key stakeholders.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardActions>
                </Card>
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
                        // fontFamily: "Dancing Script",
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
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardActions>
                </Card>
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
          >
            <Grid
              item
              sm={12}
              md={6}
              className="column"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Image
                src={guyPointing}
                style={{ height: "450px", width: "auto" }}
                alt="Sagehill Employee"
              />
            </Grid>
            <Grid
              item
              sm={12}
              md={6}
              className="column"
              // sx={{ display: "flex"}}
            >
              {/* <Grid item xs={12}> */}
              {/* <motion.div
                  whileHover={{ scale: 1.1, originX: 0, color: "#f8e112" }}
                  transition={{ type: "spring", stiffness: 300 }}
                > */}
              <motion.div
                whileHover={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{ display: "flex" }}
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
              >
                Sagehill is an enabler of 4IR ( 4th Industrial Revolution)
                mainly focusing on digital transformation through business
                process automation. We offer a wide range of ICT Solutions
                including Mobile applications development, Sagehill Hospital
                Management Information System, Enterprise Resource Planning
                Software, Web Hosting and Web Design services, Consultancy
                Services as well Computer Hardware and Accessories Supply across
                Zimbabwe and Zambia. As Sagehill we have partnered with
                organisations such as IBM and Palladium Accounting South Africa,
                UiPath, Microsoft, Eset, Sophos and Kasperky to assist in the
                goal to simplify technology.
              </Typography>
              {/* </motion.div> */}
              {/* </Grid> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default About;
