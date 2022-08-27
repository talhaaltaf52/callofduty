import React from "react";
import "./gamesrating.css";
import RatingImg1 from "../../Assets/game16.png";
import RatingImg2 from "../../Assets/game17.jpg";
import RatingImg3 from "../../Assets/game18.jpg";
import RatingImg4 from "../../Assets/game19.png";
import RatingImg5 from "../../Assets/game20.jpg";
import RatingImg6 from "../../Assets/game21.jpg";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const GameRating = () => {
  return (
    <>
      <div className="container-fluid rating_fluid">
        <div className="container pt-5">
          <div className="row pt-3">
            <div className="col-md-6">
              <div className="rating_main_div">
                <div>
                  <img src={RatingImg1} className="Rating_Img_1" />
                  <button className="rating_button_1">9.5</button>
                </div>
                <div>
                  <h4 className="rating_heading_1">
                    Call of Duty: Modern Warfare 2
                  </h4>
                  <div
                    className="text-center pb-3 pt-2"
                    style={{ color: "#ffb320", fontSize: "10px" }}
                  >
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                  <p className="rating_subheading">
                    Call of Duty: Modern Warfare 2 is a 2009 first-person
                    shooter game developed by Infinity Ward and published by
                    Activision. It is the sixth installment in the Call of Duty
                    series.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 Col_2">
              <div className="rating_main_div">
                <div>
                  <img src={RatingImg2} className="Rating_Img_1" />
                  <button className="rating_button_1">9.0</button>
                </div>
                <div>
                  <h4 className="rating_heading_1">
                    Call of Duty: American Rush 2
                  </h4>
                  <div
                    className="text-center pb-3 pt-2"
                    style={{ color: "#ffb320", fontSize: "10px" }}
                  >
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                  </div>
                  <p className="rating_subheading">
                    Call of Duty: American Rush 2 is a 2005 first-person shooter
                    video game developed by Infinity Ward and published by
                    Activision in most regions of the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-6">
              <div className="rating_main_div">
                <div>
                  <img src={RatingImg3} className="Rating_Img_1" />
                  <button className="rating_button_1">9.0</button>
                </div>
                <div>
                  <h4 className="rating_heading_1">
                    Call of Duty: World At War
                  </h4>
                  <div
                    className="text-center pb-3 pt-2"
                    style={{ color: "#ffb320", fontSize: "10px" }}
                  >
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                  <p className="rating_subheading">
                    Call of Duty: World at War is a 2008 first-person shooter
                    game developed by Treyarch and published by Activision. It
                    was release for Windows, PlayStation 3, Xbox 360 in 2008.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 Col_2">
              <div className="rating_main_div">
                <div>
                  <img src={RatingImg4} className="Rating_Img_1" />
                  <button className="rating_button_1">9.4</button>
                </div>
                <div>
                  <h4 className="rating_heading_1">
                    Call of Duty 4: Modern Warfare
                  </h4>
                  <div
                    className="text-center pb-3 pt-2"
                    style={{ color: "#ffb320", fontSize: "10px" }}
                  >
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                  <p className="rating_subheading">
                    Call of Duty 4: Modern Warfare is a 2007 first-person
                    shooter game developed by Infinity Ward and published by
                    Activision. It is the fourth main installment in the COD
                    series.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-6">
              <div className="rating_main_div">
                <div>
                  <img src={RatingImg5} className="Rating_Img_1" />
                  <button className="rating_button_1">9.0</button>
                </div>
                <div>
                  <h4 className="rating_heading_1">Call of Duty: 2</h4>
                  <div
                    className="text-center pb-3 pt-2"
                    style={{ color: "#ffb320", fontSize: "10px" }}
                  >
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                  <p className="rating_subheading">
                    Call of Duty: 2 is a 2005 first-person shooter game
                    developed by Infinity Ward and publish by Activision in most
                    regions of the world.Its 2nd installment of the COD series.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 Col_2">
              <div className="rating_main_div">
                <div>
                  <img src={RatingImg6} className="Rating_Img_1" />
                  <button className="rating_button_1">9.0</button>
                </div>
                <div>
                  <h4 className="rating_heading_1">Call of Duty: 1</h4>
                  <div
                    className="text-center pb-3 pt-2"
                    style={{ color: "#ffb320", fontSize: "10px" }}
                  >
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                  <p className="rating_subheading">
                    Call of Duty is a 2003 first-person shooter game developed
                    by Infinity Ward and published by Activision. It is the
                    first installment in the Call of Duty franchise,[2].
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-5 pb-5">
            <button className="rating_button">Load More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameRating;
