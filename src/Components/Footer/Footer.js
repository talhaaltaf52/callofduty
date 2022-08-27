import React from "react";
import "./footer.css";
import FooterLogo from "../../Assets/logo.png";
import FooterImg from "../../Assets/game12.png";
import FooterImg1 from "../../Assets/game13.jpg";
import FooterImg2 from "../../Assets/game14.jpg";
import FooterImg3 from "../../Assets/game15.jpg";
import FooterImg4 from "../../Assets/erik.jpg";
import FooterImg5 from "../../Assets/daniel.jpg";
import FooterImg6 from "../../Assets/joey.jpg";
import FooterImg7 from "../../Assets/julie.jpg";
import { AiOutlineCopyrightCircle, AiOutlineHeart } from "react-icons/ai";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <>
      <div className="container-fluid footer_fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={FooterLogo} className="footer_logo" />
              <span className="footer_logo_name">call of </span>
              <span className="footer_logo_name_1">duty</span>
              <p className="footer_sub_heading">
                Call of Duty: Ghosts is a 2013 first-person shooter video game
                developed by Infinity Ward and published by Activision.
              </p>
              <img src={FooterImg} className="footer_img" />
            </div>
            <div className="col-md-8" style={{ marginTop: "20px" }}>
              <div className="row">
                <div className="col-md-6 footer_col">
                  <h4 className="footer_heading">Latest Posts</h4>
                  <div className="row">
                    <div className="col-4">
                      <img src={FooterImg1} className="footer_img_1" />
                    </div>
                    <div className="col-8">
                      <h6 className="footer_heading1">May 4, 2020</h6>
                      <p className="footer_sub_heading1">
                        COD: MW2CR is a remastered version of COD: MW
                      </p>
                      <p className="footer_sub_heading2">Activision</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <img src={FooterImg2} className="footer_img_1" />
                    </div>
                    <div className="col-8">
                      <h6 className="footer_heading1">November 4, 2016</h6>
                      <p className="footer_sub_heading1">
                        COD: WWII is a first-person shooter game developed by
                        Sledgehammer
                      </p>
                      <p className="footer_sub_heading2">Activision</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <img src={FooterImg3} className="footer_img_1" />
                    </div>
                    <div className="col-8">
                      <h6 className="footer_heading1">November 4, 2016</h6>
                      <p className="footer_sub_heading1">
                        COD: MWR is 1st-per shooter game developed by Raven
                        Software
                      </p>
                      <p className="footer_sub_heading2">Activision</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 footer_col1">
                  <h4 className="footer_heading">Top Comments</h4>
                  <div className="row">
                    <div className="col-3">
                      <img src={FooterImg4} className="footer_img_2" />
                    </div>
                    <div className="col-9">
                      <span style={{ color: "#ff205f" }}>
                        Erik Austin
                        <span style={{ color: "#afb5b6" }}> on </span>
                        <span style={{ color: "#fff" }}>
                          CODM is greatest multiplayer game I ever played.
                        </span>
                      </span>
                      <h6 className="footer_heading1">March 08, 2022</h6>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: "20px" }}>
                    <div className="col-3">
                      <img src={FooterImg5} className="footer_img_2" />
                    </div>
                    <div className="col-9">
                      <span style={{ color: "#ff205f" }}>
                        Daniel Gellar
                        <span style={{ color: "#afb5b6" }}> on </span>
                        <span style={{ color: "#fff" }}>
                          CODBO this is a very educational and good game
                        </span>
                      </span>
                      <h6 className="footer_heading1">May 17, 2020</h6>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: "20px" }}>
                    <div className="col-3">
                      <img src={FooterImg6} className="footer_img_2" />
                    </div>
                    <div className="col-9">
                      <span style={{ color: "#ff205f" }}>
                        Joey F<span style={{ color: "#afb5b6" }}> on </span>
                        <span style={{ color: "#fff" }}>
                          CODMW3 This game is so appropriate and it is fun
                        </span>
                      </span>
                      <h6 className="footer_heading1">June 22, 2017</h6>
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: "20px" }}>
                    <div className="col-3">
                      <img src={FooterImg7} className="footer_img_2" />
                    </div>
                    <div className="col-9">
                      <span style={{ color: "#ff205f" }}>
                        Julie B<span style={{ color: "#afb5b6" }}> on </span>
                        <span style={{ color: "#fff" }}>
                          Call of Duty Ghosts is a good game but is quite
                          bloody.
                        </span>
                      </span>
                      <h6 className="footer_heading1">August 8, 2018</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer_fluid1">
        <div className="container">
          <div className="row">
            <div className="col-md-7 footer_div">
              <h6
                style={{
                  color: "#fff",
                  paddingTop: "10px",
                  paddingBottom: "7px",
                }}
              >
                Copyright <AiOutlineCopyrightCircle /> 2022 All right reserved |
                This template is made with <AiOutlineHeart /> by
                <span style={{ color: "#fdc609" }}>Talha Altaf</span>
              </h6>
            </div>
            <div className="col-md-5 footer_div">
              <div className="nav">
                <Nav className="nav_links me-auto">
                  <Link to="/home" className="home_link">
                    <span
                      className={location.pathname === "/home" ? "active" : ""}
                    >
                      Home
                    </span>
                  </Link>
                  <Link to="/games" className="home_link">
                    <span
                      className={location.pathname === "/games" ? "active" : ""}
                    >
                      Games
                    </span>
                  </Link>
                  <Link to="/gallery" className="home_link">
                    <span
                      className={
                        location.pathname === "/gallery" ? "active" : ""
                      }
                    >
                      Gallery
                    </span>
                  </Link>
                  <Link to="/forums" className="forums_link">
                    <span
                      className={
                        location.pathname === "/forums" ? "active" : ""
                      }
                    >
                      Forums
                    </span>
                  </Link>
                  <Link to="/contact" className="contact_link">
                    <span
                      className={
                        location.pathname === "/contact" ? "active" : ""
                      }
                    >
                      Contact
                    </span>
                  </Link>
                </Nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
