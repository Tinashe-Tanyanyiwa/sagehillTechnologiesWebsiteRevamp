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
import handShake from "../../public/Images/handShake.jpg";
import Image from "next/image";
import softwareDevelopment from "../../public/Images/softwareDevelopment.jpg";
import support from "../../public/Images/support.jpg";
import domains from "../../public/Images/domains.jpg";
import ShareIcon from "@mui/icons-material/Share";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import servicesBackground from "../../public/Images/servicesBackground.png"

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

function Services() {
  const theme = useTheme();
  return (
    <div style={{ height: "auto", position: "relative" }}>
      <Image src={servicesBackground} className="bg-img" alt={"Background Image"} style={{opacity:"0.1"}} />
      <Box>
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
              Our Products & Services
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
        {/* CARDS */}
        <Grid
          className="row"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            marginTop: "80px",
            marginBottom: "140px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            sm={12}
            md={6}
            className="column"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "60px",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto", marginBottom: "40px" }}>
                    <Typography
                      component="div"
                      variant="h5"
                      sx={{ width: "243.8px" }}
                    >
                      Software Development
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Front-end & Back-end
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  >
                    <IconButton aria-label="play/pause">
                      <ShareIcon sx={{ height: 20, width: 20 }} />
                    </IconButton>
                    <IconButton aria-label="play/pause">
                      <AnimatedButton
                        variants={buttonVariants}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        size="small"
                        variant="contained"
                        sx={{ borderRadius: "95px 95px 95px 95px" }}
                      >
                        <Typography
                          variant="body1"
                          style={{
                            textTransform: "none",
                            fontFamily: "Dancing Script",
                          }}
                        >
                          Learn More
                        </Typography>
                      </AnimatedButton>
                    </IconButton>
                    <IconButton aria-label="play/pause">
                      <FavoriteIcon
                        sx={{ height: 20, width: 20, color: "red" }}
                      />
                    </IconButton>
                  </Box>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={domains.src}
                  alt="domains"
                />
              </Card>
            </motion.div>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            className="column"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "60px",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto", marginBottom: "40px" }}>
                    <Typography
                      component="div"
                      variant="h5"
                      sx={{ width: "243.8px" }}
                    >
                      Hosting & Domains
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Everything Web Related
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  >
                    <IconButton aria-label="play/pause">
                      <ShareIcon sx={{ height: 20, width: 20 }} />
                    </IconButton>
                    <IconButton aria-label="play/pause">
                      <AnimatedButton
                        variants={buttonVariants}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        size="small"
                        variant="contained"
                        sx={{ borderRadius: "95px 95px 95px 95px" }}
                      >
                        <Typography
                          variant="body1"
                          style={{
                            textTransform: "none",
                            fontFamily: "Dancing Script",
                          }}
                        >
                          Learn More
                        </Typography>
                      </AnimatedButton>
                    </IconButton>
                    <IconButton aria-label="play/pause">
                      <FavoriteIcon
                        sx={{ height: 20, width: 20, color: "red" }}
                      />
                    </IconButton>
                  </Box>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={support.src}
                  alt="Live from space album cover"
                />
              </Card>
            </motion.div>
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            className="column"
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "60px",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto", marginBottom: "40px" }}>
                    <Typography
                      component="div"
                      variant="h5"
                      sx={{ width: "243.8px" }}
                    >
                      IT Support
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      We have all your solutions
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  >
                    <IconButton aria-label="play/pause">
                      <ShareIcon sx={{ height: 20, width: 20 }} />
                    </IconButton>
                    <IconButton aria-label="play/pause">
                      <AnimatedButton
                        variants={buttonVariants}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        size="small"
                        variant="contained"
                        sx={{ borderRadius: "95px 95px 95px 95px" }}
                      >
                        <Typography
                          variant="body1"
                          style={{
                            textTransform: "none",
                            fontFamily: "Dancing Script",
                          }}
                        >
                          Learn More
                        </Typography>
                      </AnimatedButton>
                    </IconButton>
                    <IconButton aria-label="play/pause">
                      <FavoriteIcon
                        sx={{ height: 20, width: 20, color: "red" }}
                      />
                    </IconButton>
                  </Box>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={softwareDevelopment.src}
                  alt="Live from space album cover"
                />
              </Card>
            </motion.div>
          </Grid>
        </Grid>
        {/* ROW WITH DESiGN */}
        <Grid
          className="row"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            marginTop: "80px",
            display: "flex",
            justifyContent: "center",
            height: "400px",
            position: "relative",
          }}
        >
          <Image
            src={handShake}
            className="bg-img bg-img-one"
            alt={"Background Image"}
          />
          <Box
            className="overlay"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Grid
              className="row"
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                item
                sm={6}
                md={3}
                className="column"
                sx={{ display: "inline-block", textAlign: "center" }}
              >
                <IconButton
                  aria-label="success rate"
                  sx={{ background: "#326598", borderRadius: "10px" }}
                >
                  <DoneAllIcon sx={{ height: 60, width: 60, color: "white" }} />
                </IconButton>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ color: "white", fontFamily: "Dancing Script" }}
                >
                  30
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ color: "white", fontFamily: "Dancing Script" }}
                >
                  Successful Projects
                </Typography>
              </Grid>
              <Grid
                item
                sm={6}
                md={3}
                className="column"
                sx={{ display: "inline-block", textAlign: "center" }}
              >
                <IconButton
                  aria-label="success rate"
                  sx={{ background: "#326598", borderRadius: "10px" }}
                >
                  <VideoCameraBackIcon
                    sx={{ height: 60, width: 60, color: "white" }}
                  />
                </IconButton>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ color: "white", fontFamily: "Dancing Script" }}
                >
                  54
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ color: "white", fontFamily: "Dancing Script" }}
                >
                  Media Activities
                </Typography>
              </Grid>
              <Grid
                item
                sm={6}
                md={3}
                className="column"
                sx={{ display: "inline-block", textAlign: "center" }}
              >
                <IconButton
                  aria-label="success rate"
                  sx={{ background: "#326598", borderRadius: "10px" }}
                >
                  <GroupsIcon sx={{ height: 60, width: 60, color: "white" }} />
                </IconButton>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ color: "white", fontFamily: "Dancing Script" }}
                >
                  12
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ color: "white", fontFamily: "Dancing Script" }}
                >
                  Skilled Experts
                </Typography>
              </Grid>
              <Grid
                item
                sm={6}
                md={3}
                className="column"
                sx={{ display: "inline-block", textAlign: "center" }}
              >
                <IconButton
                  aria-label="success rate"
                  sx={{ background: "#326598", borderRadius: "10px" }}
                >
                  <InsertEmoticonIcon
                    sx={{ height: 60, width: 60, color: "white" }}
                  />
                </IconButton>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ color: "white", fontFamily: "Dancing Script" }}
                >
                  500
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ color: "white", fontFamily: "Dancing Script" }}
                >
                  Happy Clients
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}

export default Services;
