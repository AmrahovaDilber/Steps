import React from "react";

export default function Button({ handlePrevious, handleNext }) {
  return (
    <div className="flex w-[300px] justify-between mx-auto mt-32">
      <button
        className="bg-blue-600 w-[100px] py-3 rounded-xl text-white"
        onClick={handlePrevious}
      >
        Previous
      </button>
      <button
        className="bg-blue-600 w-[100px] py-3 rounded-xl  text-white"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}
