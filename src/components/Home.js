import React from "react";
import Header from './Header/Header'
import ImageCarousel from './ImageCarousel/ImageCarousel'
import Welcome from './Welcome/Welcome'

const Home = () => {
  return <div>
    <Header/>
    <ImageCarousel/>
    <Welcome/>
  </div>;
};

export default Home;
