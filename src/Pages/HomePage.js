import React from "react";
import MainCarousel from "../Components/Carousel/MainCarousel";
import Footer from "../Components/Footer/Footer";
import Games from "../Components/Games/Games";
import MainNavbar from "../Components/Navbar/MainNavbar";
import RecentGames from "../Components/RecentGames/RecentGames";
import RecentReviews from "../Components/RecentReviews/RecentReviews";
import Tournaments from "../Components/Tournaments/Tournaments";

const HomePage = () => {
  return (
    <>
      <MainNavbar />
       <MainCarousel />
      <Games />
      <RecentGames />
     <Tournaments />
      <RecentReviews />
     <Footer />
    </>
  );
};

export default HomePage;
