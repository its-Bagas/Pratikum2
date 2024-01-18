import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Carosel({ slide }) {
  let [current, setCurrent] = useState(0);

  let previus = () => {
    if (current === 0) setCurrent(slide.length - 1);
    else setCurrent(current - 1);
  };

  let next = () => {
    if (current === slide.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className=" overflow-hidden relative">
      <div className="flex transition ease-out duration-40 " style={{ transform: `translateX(-${current * 100}%)` }}>
        {slide.map((s) => {
          return <img src={s} />;
        })}
      </div>
      <div className=" absolute top-0 h-full w-full items-center justify-between flex px-4 text-2xl">
        <button onClick={previus} className=" text-white">
          <FaArrowLeft />
        </button>
        <button onClick={next} className=" text-white">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
