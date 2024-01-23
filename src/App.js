import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((current) => current - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((current) => current + 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((open) => !open)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              textcolor={"#fff"}
              bgcolor={"#7950f2"}
              onClick={handlePrevious}
            >
              <span>👈</span> Previous
            </Button>
            <Button textcolor={"#fff"} bgcolor={"#7950f2"} onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

// children are a predefine keyword in React which passes all data which is between the opening and closing tag
function Button({ textcolor, bgcolor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgcolor, color: textcolor }}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
}
