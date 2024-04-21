"use client";
import React from "react";
import styles from "./page.module.css";
import Landing from "./Landing";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import CssBaseline from "@mui/material/CssBaseline";
import BackToTopButton from "./BackToTopButton";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import {useState, useEffect} from 'react';
// import { Poppins } from "@fontsource/poppins";

// Import the Poppins font CSS
import "@fontsource/poppins/500.css"; // Adjust the font weight (e.g., 500) as needed

// Create a custom theme with Poppins font
const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
}); 

export default function Home() {
  return (
    <div className={styles.center} style={{ width: "100%" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Landing></Landing>
        {/* <About></About> */}
        <Services></Services>
        <Contact></Contact>
        <Footer></Footer>
        <BackToTopButton></BackToTopButton>
      </ThemeProvider>
    </div>
  );
}
