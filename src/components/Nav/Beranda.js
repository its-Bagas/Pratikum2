import React from "react";
import gambar from "../assets/Adiwiyata.png";

class Beranda extends React.Component {
  render() {
    return (
      <div>
        <div className=" container">
          <div className=" flex justify-evenly px-20">
            <div className=" gambar w-2/6">
              <img className=" w-full item-center py-12  " src={gambar} alt="logo adiwiyata" />
            </div>

            <div className="arti py-40 text-start">
              <p>
                Adiwiyata adalah program nasional di Indonesia yang bertujuan untuk mendorong sekolah-sekolah <br /> untuk berpartisipasi aktif dalam upaya pelestarian lingkungan hidup dan pembangunan berkelanjutan. <br /> Program ini
                dikembangkan oleh Kementerian Lingkungan Hidup dan Kehutanan <br /> bersama dengan Kementerian Pendidikan dan Kebudayaan Kemendikbud. <br /> Program Adiwiyata merupakan langkah positif dalam mengintegrasikan pendidikan
                lingkungan hidup dalam <br /> sistem pendidikan nasional Indonesia dan mendorong partisipasi aktif sekolah dalam upaya pelestarian lingkungan.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Beranda;
