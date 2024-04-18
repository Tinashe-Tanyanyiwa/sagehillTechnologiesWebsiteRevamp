import Image from "next/image";
import styles from "./page.module.css";
import Landing from "./Landing";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import CssBaseline from "@mui/material/CssBaseline";
import BackToTopButton from "./backToTopButton";


export default function Home() {
  return (
   <div className={styles.center} style ={{width: "100%"}}>
    <CssBaseline />
    <Landing></Landing>
    {/* <About></About> */}
    <Services></Services>
    <Contact></Contact>
    <Footer></Footer>
    <BackToTopButton></BackToTopButton>
   </div>
  );
}
