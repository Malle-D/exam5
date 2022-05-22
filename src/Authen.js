import React from "react";

import Header from "./Components/Header/Header";
import "./Assets/main.css"
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import Chanel from "./Pages/Chanel/Chanel";

function Authen() {
  return (
    <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chanel/:id" element={<Chanel />} />
            <Route path="/video/:id" element={<Video />} />
          </Routes> 
    </>
  );
}

export default Authen;