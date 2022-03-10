import React from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import LayoutHero from "../components/LayoutHero";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <LayoutHero />
    
      <Footer />
    </>
  );
}

export default Home;
