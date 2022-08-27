import React, { useState } from "react";
import "./login.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LoginLogo from "../../Assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [icon, setIcon] = useState(false);

  const toggleIcon = () => {
    setIcon((prevState) => !prevState);
  };

  const Login = (e) => {
    if (name !== "" && password !== "") {
      navigate("/home");
    } else {
      alert("Login Failed!");
    }
  };

  return (
    <>
      <div className="container-fluid Login_Fluid">
        <div className="logo_div text-center">
          <ul className="logo_ul">
            <li  className="logo_li">
              <img src={LoginLogo} className="Login_Logo" alt="logo" />
            </li>
            <li  className="logo_li">
              <h1 className="logo_heading">CALL OF DUTY</h1>
            </li>
          </ul>
        </div>
        <div className="container Login_Container">
          <div>
            <div className="text-center">
              <form>
                <div className="input_1">
                  <span className="name_icon">
                    <FaUserAlt />
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="form-control name_field"
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="off"
                    required
                    maxlength="15"
                  />
                </div>
                <div className="input_2">
                  <span className="lock_icon">
                    <FaLock />
                  </span>
                  <input
                    type={icon ? "text" : "password"}
                    placeholder="Enter Your Password"
                    className="form-control password_field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    autoComplete="off"
                    required
                    maxlength="20"
                  />
                  <span className="eye_icon" onClick={toggleIcon}>
                    {icon ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </span>
                </div>
                <button className="Login_button" onClick={Login}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
