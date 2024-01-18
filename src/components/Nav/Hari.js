import React from "react";
import Car from "../Card.component";

import earth from "../assets/earth.jpg";
import animal from "../assets/animal.jpg";
import water from "../assets/water.jpg";
import lingkungan from "../assets/lingkungan.jpg";
import polution from "../assets/polution.jpg";
import reboisasi from "../assets/reboisasi.jpg";

export default function Hari() {
  return (
    <div className=" container grid grid-cols-3 gap-3 px-20 pt-11">
      <Car className="w-[80%]" imgsrc={earth}>
        <h2 className="font-bold">Hari Bumi (22 April)</h2>
        <p> dirayakan secara global setiap tahun untuk meningkatkan kesadaran tentang isu-isu lingkungan dan mendorong tindakan positif untuk melindungi planet kita.</p>
      </Car>
      <Car className="w-[45%]" imgsrc={water}>
        <h2 className=" font-bold">Hari Air Sedunia (22 Maret)</h2>
        <p>Hari Air Sedunia menyoroti pentingnya air bersih dan sanitasi serta menggalakkan tindakan untuk melindungi sumber daya air dunia.</p>
      </Car>
      <Car className="w-[45%]" imgsrc={lingkungan}>
        <h2 className=" font-bold">Hari Lingkungan hidup (5 Juni)</h2>
        <p>mengingatkan dunia akan kebutuhan perlindungan lingkungan dan mendorong tindakan bersama untuk menjaga keberlanjutan lingkungan</p>
      </Car>
      <Car className="w-[45%]" imgsrc={animal}>
        <h2 className=" font-bold">Hari Keanekaragaman hayati (22 Mei)</h2>
        <p>meningkatkan kesadaran tentang pentingnya keanekaragaman hayati dan upaya pelestarian spesies yang terancam punah.</p>
      </Car>
      <Car className="w-[45%]" imgsrc={polution}>
        <h2 className=" font-bold">Hari Pemanasan Global (27 Januari)</h2>
        <p> meningkatkan kesadaran akan perubahan iklim dan dampaknya.</p>
      </Car>
      <Car className="w-[45%]" imgsrc={reboisasi}>
        <h2 className=" font-bold">Hari Penghijauan Dunia (21 Maret)</h2>
        <p>mempromosikan penanaman pohon dan pelestarian hutan sebagai upaya untuk mengatasi deforestasi dan mengurangi dampak perubahan iklim.</p>
      </Car>
    </div>
  );
}
