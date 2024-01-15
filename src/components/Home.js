import React from "react";
import Header from './Header/Header'
import ImageCarousel from './ImageCarousel/ImageCarousel'
import Welcome from './Welcome/Welcome'
import Connect from "./Connect/Connect";
import Story from "./Story/Story";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";

const Home = () => {
  return <div>
    <div style={{padding: '0 20px'}}>
    <Header/>
    <ImageCarousel/>
    <Welcome/>
    <Connect/>
    <Story/>
    <Testimonials/>
    </div>
    <Footer/>
  </div>;
};

export default Home;
