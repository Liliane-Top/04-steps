import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // create a state function with default value which you assign to 
  // use => is a react hook 
  // can only at top level not in an if statement or sub function
  //you can't set the state manually you have to use the methos setStep function which is tied to state
  const [step,  setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true)

function handlePrevious() {
  if(step > 1)
  setStep((current) => current - 1);
}

function handleNext() {
  if(step < 3) {
    setStep((current) => current + 1);
  }
 
}


  return (
<>
  <button className="close" onClick={() => setIsOpen((open) =>  !open)}>&times;</button>
    { isOpen && (
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1? "active" : ""}>1</div>
          <div className={step >= 2? "active" : ""}>2</div>
          <div className={step >= 3? "active" : ""}>3</div>
        </div>
        <p className="message">
          Step {step}: {messages[step-1]} 
        </p>
        <div className="buttons">
          <button style={{backgroundColor: "#7950f2", color: "#fff"}} 
          onClick={handlePrevious}
          >Previous</button>
          <button style={{backgroundColor: "#7950f2", color: "#fff"}} 
          onClick={handleNext}
          >Next</button>
        </div>
      </div>
    )}
  </>
  );
}