import React from "react";
import { useState } from "react";

const TicketProcess = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 && (
        <div>
          <h1>First Content</h1>
          <button onClick={() => setStep(2)}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h1>Second Content</h1>
          <button onClick={() => setStep(1)}>Back</button>
          <button onClick={() => setStep(3)}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h1>Third Content</h1>
          <button onClick={() => setStep(2)}>Back</button>
        </div>
      )}
    </div>
  );
};

export default TicketProcess;
