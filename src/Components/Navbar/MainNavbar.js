import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../../Assets/logo.png";
import "./mainnavbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { FaSignOutAlt } from "react-icons/fa";

const MainNavbar = () => {
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location, "location");

  const Logout = () => {
    alert("Logout Successful");
    navigate("/");
  };

  const menu = (
    <Menu>
      <Menu.Item className="Menu_Items" key="0">
        <button onClick={Logout} className="logout_button">
          Log Out <FaSignOutAlt />
        </button>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Navbar
        expand="lg"
        style={{ borderBottom: "1px solid #fdc609", backgroundColor: "#000" }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} className="Logo_1" />
            <span className="cod_name">call of </span>
            <span className="cod_name_1">duty</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
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
                    className={location.pathname === "/gallery" ? "active" : ""}
                  >
                    Gallery
                  </span>
                </Link>
                <Link to="/forums" className="forums_link">
                  <span
                    className={location.pathname === "/forums" ? "active" : ""}
                  >
                    Forums
                  </span>
                </Link>
                <Link to="/contact" className="contact_link">
                  <span
                    className={location.pathname === "/contact" ? "active" : ""}
                  >
                    Contact
                  </span>
                </Link>
              </Nav>
            </div>
            <div>
              <Dropdown overlay={menu}>
                <button
                  className="btn ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Login Successful <DownOutlined className="down_arrow" />
                </button>
              </Dropdown>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
