import React from "react";
import Community from "../Components/Community/Community";
import Forums from "../Components/Forums/Forums";
import MainNavbar from "../Components/Navbar/MainNavbar";
import Footer from "../Components/Footer/Footer";

const ForumsPage = () => {
  return (
    <>
      <MainNavbar />
      <Community />
      <Forums />
      <Footer />
    </>
  );
};

export default ForumsPage;
