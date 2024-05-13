import React from "react";

export default function Number({ step }) {
  return (
    <div className="flex w-[300px] justify-between mx-auto pt-4">
      <div
        className={`w-[50px] h-[50px] rounded-full  text-black text-xl font-semibold justify-center items-center flex ${
          step >= 1 ? "active" : ""
        }`}
      >
        1
      </div>
      <div
        className={`w-[50px] h-[50px] rounded-full text-black text-xl justify-center font-semibold items-center flex ${
          step >= 2 ? "active" : ""
        }`}
      >
        2
      </div>
      <div
        className={`w-[50px] h-[50px] rounded-full text-black text-xl justify-center font-semibold items-center flex ${
          step >= 3 ? "active" : ""
        }`}
      >
        3
      </div>
    </div>
  );
}
