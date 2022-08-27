import React, { useState, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import GamesPage from "./Pages/GamesPage";
import GalleryPage from "./Pages/GalleryPage";
import ForumsPage from "./Pages/ForumsPage";
import ContactPage from "./Pages/ContactPage";
import LoginPage from "./Pages/LoginPage";
import { HashLoader } from "react-spinners";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading">
          <HashLoader size={100} color={"#fdc609"} loading={loading} />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/forums" element={<ForumsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      )}
    </>
  );
};

export default App;
