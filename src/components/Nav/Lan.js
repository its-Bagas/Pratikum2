import React from "react";
import { Route, Routes } from "react-router-dom";

import Beranda from "./Beranda";
import Gallery from "./Gallery";
import Hari from "./Hari";

class lan extends React.Component {
  render() {
    return (
      <Routes>
        <Route exacth path="/" element={<Beranda />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Hari" element={<Hari />} />
      </Routes>
    );
  }
}

export default lan;
