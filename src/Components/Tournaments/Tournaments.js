import React from "react";
import "./tournaments.css";
import Tournament1 from "../../Assets/tournament1.jpg";
import Tournament2 from "../../Assets/tournament2.jpg";

const Tournaments = () => {
  return (
    <>
      <div className="container-fluid tournament_fluid">
        <div className="container">
          <button className="tournament_button">Tournaments</button>
          <div className="row">
            <div className="col-md-6 tournament_columns">
              <button className="free_champ_button">
                Free World Championship
              </button>
              <div className="container">
                <div className="row" style={{ marginTop: "30px" }}>
                  <div className="col-md-4">
                    <img src={Tournament1} className="champ_img" />
                  </div>
                  <div className="col-md-8">
                    <h4 className="champ_heading">Call Of Duty Mobile</h4>
                    <ul className="champ_ul">
                      <li className="champ_li">
                        <span className="champ_span">Tournament Beggins: </span>
                        December 09, 2022
                      </li>
                      <li className="champ_li">
                        <span className="champ_span">
                          Tournament End Date:{" "}
                        </span>
                        December 11, 2022
                      </li>
                      <li className="champ_li">
                        <span className="champ_span">Participants: </span> 16
                        teams
                      </li>
                      <li className="champ_li">
                        <span className="champ_span">Tournament Author: </span>
                        Activision
                      </li>
                    </ul>
                    <p className="champ_para">
                      <span className="champ_span1">Prizes: </span> $ 1,700,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 tournament_columns1">
              <button className="free_champ_button">Preminm Tournament</button>
              <div className="container">
                <div className="row" style={{ marginTop: "30px" }}>
                  <div className="col-md-4">
                    <img src={Tournament2} className="champ_img" />
                  </div>
                  <div className="col-md-8">
                    <h4 className="champ_heading">Call Of Duty Mobile</h4>
                    <ul className="champ_ul">
                      <li className="champ_li">
                        <span className="champ_span">Tournament Beggins: </span>
                        March 09, 2022
                      </li>
                      <li className="champ_li">
                        <span className="champ_span">Modes: </span>{" "}
                        Free-for-All, 2v2 TDM, Gunfight, Gunfight TDM, 2v2 KC
                      </li>
                      <li className="champ_li">
                        <span className="champ_span">Tournament Author: </span>
                        Activision
                      </li>
                    </ul>
                    <p className="champ_para">
                      <span className="champ_span1">Prizes: </span> CP & Free
                      Gun Skins
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tournaments;
