import React from "react";
import Contact from "../Components/Contact/Contact";
import ContactUs from "../Components/ContactUs/ContactUs";
import Map from "../Components/Map/Map";
import MainNavbar from "../Components/Navbar/MainNavbar";
import Footer from "../Components/Footer/Footer";

const ContactPage = () => {
  return (
    <>
      <MainNavbar />
      <ContactUs />
      <Map />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
