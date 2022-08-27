import React from "react";
import GameReviews from "../Components/GameReviews/GameReviews";
import GameRating from "../Components/GamesRating/GameRating";
import MainNavbar from "../Components/Navbar/MainNavbar";
import RecentReviews from "../Components/RecentReviews/RecentReviews";
import Footer from "../Components/Footer/Footer";

const GamesPage = () => {
  return (
    <>
      <MainNavbar />
      <GameReviews />
      <GameRating />
      <RecentReviews />
      <Footer />
    </>
  );
};

export default GamesPage;
