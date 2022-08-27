import React from "react";
import "./gallery.css";
import Gallery1 from "../../Assets/game1.jpg";
import Gallery2 from "../../Assets/game2.jpg";
import Gallery3 from "../../Assets/game3.jpg";
import Gallery4 from "../../Assets/game4.jpg";
import Gallery5 from "../../Assets/game5.jpg";
import Gallery6 from "../../Assets/game6.jpg";
import Gallery7 from "../../Assets/game7.jpg";
import Gallery8 from "../../Assets/game8.jpg";
import Gallery9 from "../../Assets/game9.png";
import Gallery10 from "../../Assets/game10.jpg";
import Gallery11 from "../../Assets/game11.jpg";
import Gallery12 from "../../Assets/game13.jpg";
import Gallery13 from "../../Assets/game14.jpg";
import Gallery14 from "../../Assets/game15.jpg";
import Gallery15 from "../../Assets/game16.png";
import Gallery16 from "../../Assets/game17.jpg";
import Gallery17 from "../../Assets/game18.jpg";
import Gallery18 from "../../Assets/game19.png";
import Gallery19 from "../../Assets/game20.jpg";
import Gallery20 from "../../Assets/game21.jpg";

const Gallery = () => {
  return (
    <>
      <div className="container-fluid game_fluid">
        <div className="container">
        <div className="text-center">
          <h1 className="Gallery_Heading">GALLERY</h1>
        </div>
          <div className="row">
            <div className="col-md-4">
              <img src={Gallery1} className="Gallery_1" />
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-6">
                  <img src={Gallery2} className="Gallery_2" />
                </div>
                <div className="col-6">
                  <img src={Gallery3} className="Gallery_3" />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <img src={Gallery4} className="Gallery_4" />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="row">
                <div className="col-6">
                  <img src={Gallery5} className="Gallery_5" />
                </div>
                <div className="col-6">
                  <img src={Gallery6} className="Gallery_5" />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <img src={Gallery7} className="Gallery_5" />
                </div>
                <div className="col-6">
                  <img src={Gallery8} className="Gallery_5" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={Gallery9} className="Gallery_6" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-3">
              <img src={Gallery10} className="Gallery_7" />
            </div>
            <div className="col-md-3">
              <img src={Gallery11} className="Gallery_7" />
            </div>
            <div className="col-md-3">
              <img src={Gallery12} className="Gallery_7" />
            </div>
            <div className="col-md-3">
              <img src={Gallery13} className="Gallery_7" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <img src={Gallery14} className="Gallery_8" />
              <div className="row mt-3">
                <div className="col-12">
                  <img src={Gallery15} className="Gallery_9" />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <img src={Gallery16} className="Gallery_10" />
              <div className="row mt-3">
                <div className="col-6">
                  <img src={Gallery17} className="Gallery_11" />
                </div>
                <div className="col-6">
                  <img src={Gallery18} className="Gallery_11" />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <img src={Gallery19} className="Gallery_12" />
            </div>
            <div className="col-md-12 mt-3">
              <img src={Gallery20} className="Gallery_12" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
