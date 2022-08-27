import React from "react";
import { Carousel } from "antd";
import "./maincarousel.css";

const MainCarousel = () => {
  return (
    <>
      <Carousel
        autoplay
        effect="fade"
        style={{ borderBottom: "1px solid #fdc609" }}
      >
        <div>
          <div className="slide1">
            <div className="container">
              <h1 className="heading">
                The Best <span style={{ color: "#fdc609" }}>Games</span> Out
                There
              </h1>
              <p className="paragraph">
                Call of Duty: Infinite Warfare is a 2016 first-person shooter
                video game developed by Infinity Ward and published by
                Activision. It is the thirteenth installment in the Call of Duty
                series and was released worldwide for Microsoft Windows,
                PlayStation 4, and Xbox One on November 4, 2016.
              </p>
              <button className="read_button">Read More</button>
              <div className="overlay"> </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slide2">
            <div className="container">
              <h1 className="heading">
                The Best <span style={{ color: "#fdc609" }}>Games</span> Out
                There
              </h1>
              <p className="paragraph">
                Call of Duty: Modern Warfare 3 is a 2011 first-person shooter
                video game, jointly developed by Infinity Ward and Sledgehammer
                Games and published by Activision. The game was released
                worldwide in November 2011 for Microsoft Windows, the Xbox 360,
                PlayStation 3, and Wii.
              </p>
              <button className="read_button">Read More</button>
              <div className="overlay"> </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default MainCarousel;
