import React from "react";
import Number from "./Number";
import Message from "./Message";
import Button from "./Button";
import { useState } from "react";
export default function Modal() {
  const [step, setStep] = useState(1);
  function handlePrevious() {
    if (step > 1) setStep((step) => step - 1);
  }

  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
  }
  return (
    <div className="w-[500px] h-[500px]  bg-slate-300  m-auto mt-16 rounded-lg     ">
      <Number step={step}></Number>
      <Message step={step}></Message>
      <Button handlePrevious={handlePrevious} handleNext={handleNext}></Button>
    </div>
  );
}
