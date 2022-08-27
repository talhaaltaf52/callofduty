import React from "react";
import { Card } from "react-bootstrap";
import "./recentgames.css";
import CardImg1 from "../../Assets/game5.jpg";
import CardImg2 from "../../Assets/game6.jpg";
import CardImg3 from "../../Assets/game7.jpg";

const RecentGames = () => {
  return (
    <>
      <div className="container-fluid recent_fluid">
        <div className="container">
          <button className="recent_new_button">new</button>
          <h1 className="recent_heading">Recent Games</h1>
          <div className="row">
            <div className="col-md-4">
              <Card
                style={{
                  border: "none",
                  borderRadius: "5px 5px 0px 0px",
                  marginBottom: "40px",
                }}
              >
                <Card.Img
                  src={CardImg1}
                  style={{ borderRadius: "5px 5px 0px 0px" }}
                />
                <button className="recent_new_button_1">new</button>
                <Card.Body className="card_body">
                  <h3 className="recent_heading_1">
                    Call of Duty: Modern Warfare 2 Campaign Remastered
                  </h3>
                  <h6 className="recent_sub_heading">
                    Call of Duty: Modern Warfare 2 is a 2009 first-person
                    shooter game developed by Infinity Ward and published by
                    Activision.
                  </h6>
                  <p className="recent_comments">3 Comments</p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card
                style={{
                  border: "none",
                  borderRadius: "5px 5px 0px 0px",
                  marginBottom: "40px",
                }}
              >
                <Card.Img
                  src={CardImg2}
                  style={{ borderRadius: "5px 5px 0px 0px" }}
                />
                <button className="recent_new_button_2">new</button>
                <Card.Body className="card_body_1">
                  <h3 className="recent_heading_1">Call of Duty: WWII</h3>
                  <h6 className="recent_sub_heading_1">
                    Call of Duty: WWII 2017 first-person shooter game developed
                    by Sledgehammer Games and published by Activision.
                  </h6>
                  <p className="recent_comments_1">3 Comments</p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card
                style={{
                  border: "none",
                  borderRadius: "5px 5px 0px 0px",
                  marginBottom: "40px",
                }}
              >
                <Card.Img
                  src={CardImg3}
                  style={{ borderRadius: "5px 5px 0px 0px", height: "200px" }}
                />
                <button className="recent_new_button_3">new</button>
                <Card.Body className="card_body_2">
                  <h3 className="recent_heading_2">
                    Call of Duty: Infinite Warfare
                  </h3>
                  <h6 className="recent_sub_heading_2">
                    Call of Duty: Infinite Warfare is a 2016 first-person
                    shooter video game developed by Infinity Ward and published
                    by Activision.
                  </h6>
                  <p className="recent_comments_2">3 Comments</p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentGames;
