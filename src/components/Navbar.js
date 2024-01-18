import React from "react";
import Lan from "./Nav/Lan";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className=" bg-slate-50 py-8">
          <div className=" flex  justify-between items-center top-0 px-10">
            <div className="logo font-bold text-2xl text-green-500">
              <h1>
                Adiwiyata<span className=" text-orange-300">KU</span>
              </h1>
            </div>
            <div className=" font-semibold">
              <Link className="px-2 hover:text-green-400" to="/">
                Beranda
              </Link>
              <Link className=" px-2 hover:text-green-400" to="/Gallery">
                Gallery
              </Link>
              <Link className=" px-2 hover:text-green-400" to="/Hari">
                HariBesar
              </Link>
            </div>
          </div>
        </div>
        <p>
          <Lan />
        </p>
      </div>
    );
  }
}

export default Navbar;
