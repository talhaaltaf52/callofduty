import React, { useState } from "react";
import "./contact.css";
import { Textarea } from "@chakra-ui/textarea";
import { BsPinterest } from "react-icons/bs";
import { RiFacebookFill, RiBasketballLine } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaBehance, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  return (
    <>
      <div className="container-fluid contact_fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3
                className="text-light"
                style={{
                  fontFamily: '"Chivo", sans-serif',
                  paddingBottom: "40px",
                }}
              >
                Contact Us
              </h3>
              <p
                className="text-light"
                style={{ fontFamily: '"Chivo", sans-serif' }}
              >
                Log in to your Activision account to access our recommended
                support options.
              </p>
              <p
                style={{
                  fontFamily: '"Chivo", sans-serif',
                  fontSize: "15px",
                  color: "#fdc609",
                }}
              >
                Address: <span className="text-light">Lahore, Pakistan</span>
              </p>
              <p
                style={{
                  fontFamily: '"Chivo", sans-serif',
                  fontSize: "15px",
                  color: "#fdc609",
                }}
              >
                Phone: <span className="text-light">+92 123 456 7890</span>
              </p>
              <p
                style={{
                  fontFamily: '"Chivo", sans-serif',
                  fontSize: "15px",
                  color: "#fdc609",
                }}
              >
                Email: <span className="text-light">talhaaltaf@gmail.com</span>
              </p>
              <div>
                <ul className="icons_ul">
                  <li className="icons_li">
                    <BsPinterest />
                  </li>
                  <li className="icons_li">
                    <RiFacebookFill />
                  </li>
                  <li className="icons_li">
                    <AiOutlineTwitter />
                  </li>
                  <li className="icons_li">
                    <RiBasketballLine />
                  </li>
                  <li className="icons_li">
                    <FaBehance />
                  </li>
                  <li className="icons_li">
                    <FaLinkedinIn />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-7">
              <h3 className="reply_heading">Leave a Reply</h3>
              <form>
                <input
                  className="input_name"
                  placeholder="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="input_email"
                  placeholder="Email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  className="input_subject"
                  placeholder="Subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <Textarea
                  placeholder="Message"
                  className="text_area"
                  size="x-lg"
                />
                <button className="form_button">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
