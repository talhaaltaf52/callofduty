import React from "react";
import './games.css';

const Games = () => {
  return (
    <>
      <div className="container-fluid fluid_div">
        <div className="container contain_div">
          <div className="row">
            <div className="col-md-3 col_div">
              <button className="new_button">new</button>
              <h3 className="game_heading">Call Of Duty Mobile</h3>
              <h6 className="game_sub_heading">Call of Duty: Mobile is a free-to-play shooter game developed by TiMi Studio Group and published by Activision for Android and iOS.</h6>
              <p className="game_comments">3 Comments</p>
            </div>
            <div className="col-md-3 col_div_1">
              <button className="new_button_1">new</button>
              <h3 className="game_heading">Call Of Duty Black Ops</h3>
              <h6 className="game_sub_heading_1">Call of Duty: Black Ops is a 2010 first-person shooter game developed by Treyarch and published by Activision.It was released in November 2010.</h6>
              <p className="game_comments">3 Comments</p>
            </div>
            <div className="col-md-3 col_div_2">
              <button className="new_button">new</button>
              <h3 className="game_heading">Call Of Duty Modern Warfare 3</h3>
              <h6 className="game_sub_heading_1">Call of Duty: Modern Warfare 3 is a 2011 first-person shooter game, developed by Infinity Ward and Sledgehammer Games and published by Activision.</h6>
              <p className="game_comments">3 Comments</p>
            </div>
            <div className="col-md-3 col_div_3">
              <button className="new_button_2">new</button>
              <h3 className="game_heading">Call Of Duty Ghosts</h3>
              <h6 className="game_sub_heading_1">Call of Duty: Ghosts is a 2013 first-person shooter video game developed by Infinity Ward and published by Activision.</h6>
              <p className="game_comments">3 Comments</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;
