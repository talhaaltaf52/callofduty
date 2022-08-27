import React from "react";
import "./forums.css";
import ForumsImg1 from "../../Assets/erik.jpg";
import ForumsImg2 from "../../Assets/Kauzer.jpeg";
import ForumsImg3 from "../../Assets/jack.jpg";
import ForumsImg4 from "../../Assets/joe.jpg";
import ForumsImg5 from "../../Assets/james.jpg";
import ForumsImg6 from "../../Assets/hiram.png";
import ForumsImg7 from "../../Assets/jaro.jpg";

const Forums = () => {
  return (
    <>
      <div className="container-fluid forums_fluid">
        <div className="container">
          <div>
            <h2 className="forums_heading">All Members (344)</h2>
          </div>
          <div>
            <div className="row forums_div">
              <div className="col-1">
                <img src={ForumsImg1} className="forums_Img_1" />
              </div>
              <div className="col-md-11">
                <span style={{ color: "#ff205f" }} className="div_form">
                  Erik Austin
                  <span style={{ color: "#fff", paddingLeft: "10px" }}>
                    posted an update
                  </span>
                </span>
                <p style={{ color: "#fdc609" }} className="div_form">
                  March 08, 2022
                </p>

                <p
                  style={{
                    color: "#fff",
                    fontFamily: "'Source Code Pro', monospace",
                  }}
                  className="div_form"
                >
                  Call of Duty Mobile is the greatest multiplayer game I have ever played.
                  There are almost a hundred different weapons to choose from to
                  fit your style. The graphics are extremely realistic and there
                  is high speed performance. I am impressed 5 stars all around
                  top to bottom.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="row forums_div mt-4">
              <div className="col-1">
                <img src={ForumsImg2} className="forums_Img_1" />
              </div>
              <div className="col-md-11">
                <span style={{ color: "#ff205f" }} className="div_form">
                  Peter Kauzer
                  <span style={{ color: "#fff", paddingLeft: "10px" }}>
                    posted an update
                  </span>
                </span>
                <p style={{ color: "#fdc609" }} className="div_form">
                  November 03, 2017
                </p>

                <p
                  style={{
                    color: "#fff",
                    fontFamily: "'Source Code Pro', monospace",
                  }}
                  className="div_form"
                >
                  After going in with low expectations I was surprised to find
                  that Call of Duty WWII is actually a decent game. The single
                  player campaign is solid, with some missions being excellent
                  and others being quite forgettable.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="row forums_div mt-4">
              <div className="col-1">
                <img src={ForumsImg3} className="forums_Img_1" />
              </div>
              <div className="col-md-11">
                <span className="div_form" style={{ color: "#ff205f" }}>
                  Jack Gillett
                  <span style={{ color: "#fff", paddingLeft: "10px" }}>
                    posted an update
                  </span>
                </span>
                <p className="div_form" style={{ color: "#fdc609" }}>
                  November 04, 2016
                </p>

                <p
                  className="div_form"
                  style={{
                    color: "#fff",
                    fontFamily: "'Source Code Pro', monospace",
                  }}
                >
                  Call of Duty: Infinite Warfare in this game is rather decent. It
                  has decent fluid movement, the jump boost is smooth and the
                  graphics are good. Compared to the poor movement in BO3 and
                  horrible cartoon graphics, it is a much better game. BUT, I
                  have seen way too many hackers.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="row forums_div mt-4">
              <div className="col-1">
                <img src={ForumsImg4} className="forums_Img_1" />
              </div>
              <div className="col-md-11">
                <span className="div_form" style={{ color: "#ff205f" }}>
                  Joe Gebbia
                  <span style={{ color: "#fff", paddingLeft: "10px" }}>
                    posted an update
                  </span>
                </span>
                <p className="div_form" style={{ color: "#fdc609" }}>
                  November 09, 2014
                </p>

                <p
                  className="div_form"
                  style={{
                    color: "#fff",
                    fontFamily: "'Source Code Pro', monospace",
                  }}
                >
                  I liked Call of Duty: Advanced Warfare the single player albeit very short. If I rated it
                  based on just single player, I'd give it a 9/10. But CoD is
                  all about multiplayer, and currently I can't give it any
                  points. The lag is crippling. I've tried giving it time
                  playing for almost 20 hours.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="row forums_div mt-4">
              <div className="col-1">
                <img src={ForumsImg5} className="forums_Img_1" />
              </div>
              <div className="col-md-11">
                <span className="div_form" style={{ color: "#ff205f" }}>
                  James Kuffner
                  <span style={{ color: "#fff", paddingLeft: "10px" }}>
                    posted an update
                  </span>
                </span>
                <p className="div_form" style={{ color: "#fdc609" }}>
                  November 11, 2008
                </p>

                <p
                  className="div_form"
                  style={{
                    color: "#fff",
                    fontFamily: "'Source Code Pro', monospace",
                  }}
                >
                  Call of Duty: World At War, Wow, what a let down, graphics, gameplay, and story all feel
                  tiring, aged with tired WWII genre gametype, and subpar
                  graphics that make you wonder how they ended up with COD2
                  graphics on the COD4 engine.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="row forums_div mt-4">
              <div className="col-1">
                <img src={ForumsImg6} className="forums_Img_1" />
              </div>
              <div className="col-md-11">
                <span className="div_form" style={{ color: "#ff205f" }}>
                  Hiram Brownel
                  <span style={{ color: "#fff", paddingLeft: "10px" }}>
                    posted an update
                  </span>
                </span>
                <p className="div_form" style={{ color: "#fdc609" }}>
                  July 12, 2011
                </p>

                <p
                  className="div_form"
                  style={{
                    color: "#fff",
                    fontFamily: "'Source Code Pro', monospace",
                  }}
                >
                  The best Call Of Duty and World War 2 game that I've ever
                  played! Very immersive game, the sound is loud and realistic.
                  A long game, if compared with its predecessors. I recommend
                  this game for all the fans of first person shooters,
                  especially for those of the WW2.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="row forums_div mt-4">
              <div className="col-1">
                <img src={ForumsImg7} className="forums_Img_1" />
              </div>
              <div className="col-md-11">
                <span className="div_form" style={{ color: "#ff205f" }}>
                  Jaro Zacko
                  <span style={{ color: "#fff", paddingLeft: "10px" }}>
                    posted an update
                  </span>
                </span>
                <p className="div_form" style={{ color: "#fdc609" }}>
                  Octuber 02, 2004
                </p>

                <p
                  className="div_form"
                  style={{
                    color: "#fff",
                    fontFamily: "'Source Code Pro', monospace",
                  }}
                >
                  Call of Duty: United Offensive is the probably the best game since doom. I bet some
                  people are saying "Its not enough like Black-ops!" Well i can
                  tell you one thing. Shut up, seriously I'm not trying to be
                  mean but its not supposed to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forums;
