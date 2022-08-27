import React from "react";
import "./recentreviews.css";
import ReviewImg1 from "../../Assets/game8.jpg";
import ReviewImg2 from "../../Assets/game9.png";
import ReviewImg3 from "../../Assets/game10.jpg";
import ReviewImg4 from "../../Assets/game11.jpg";

const RecentReviews = () => {
  return (
    <>
      <div className="container-fluid review_fluid">
        <div className="container">
          <button className="review_button">new</button>
          <h1 className="review_heading">Recent Reviews</h1>
          <div className="row">
            <div className="col-md-3">
              <div className="review_main_div">
                <div>
                  <img src={ReviewImg1} className="Review_Img_1" />
                  <button className="review_button_1">8.5</button>
                </div>
                <div>
                  <h4 className="review_heading_1">
                    Call of Duty: Modern Warfare Remastered
                  </h4>
                  <p className="review_subheading">
                    Call of Duty: Modern Warfare Remastered is a 2016
                    first-person shooter game developed by Raven Software and
                    published by Activision.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="review_main_div">
                <div>
                  <img src={ReviewImg2} className="Review_Img_1" />
                  <button className="review_button_2">9.1</button>
                </div>
                <div>
                  <h4 className="review_heading_1">
                    Call of Duty: Advanced Warfare
                  </h4>
                  <p className="review_subheading">
                    Call of Duty: Advanced Warfare is a 2014 first-person
                    shooter video game developed by Sledgehammer Games and
                    published by Activision.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="review_main_div">
                <div>
                  <img src={ReviewImg3} className="Review_Img_1" />
                  <button className="review_button_3">9.2</button>
                </div>
                <div>
                  <h4 className="review_heading_1">
                    Call of Duty: Black Ops 3
                  </h4>
                  <p className="review_subheading">
                    Call of Duty: Black Ops III is a 2015 first-person shooter
                    game developed by Treyarch and published by Activision.
                    Released on Microsoft Windows.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="review_main_div">
                <div>
                  <img src={ReviewImg4} className="Review_Img_1" />
                  <button className="review_button_4">8.9</button>
                </div>
                <div>
                  <h4 className="review_heading_1">
                    Call of Duty: United Offensive
                  </h4>
                  <p className="review_subheading">
                    Call of Duty: United Offensive is released on 2004 and
                    developed by Gray Matter Interactive, with contributions
                    from Pi Studios, and published by Activision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentReviews;
