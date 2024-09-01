import "../styles.css";
import { useEffect, useState } from "react";

const FaqItem = ({ faq, index }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  function handleClick() {
    setShowAnswer((showAnswer) => !showAnswer);
  }

  useEffect(() => {
    if (index === 0) {
      setShowAnswer(true);
    }
  }, []);

  return (
    <div className="faq-box">
      <div className="question">
        <button
          id="show--answer"
          className={showAnswer ? "arrow" : ""}
          onClick={handleClick}
        >
          &gt;
        </button>
        {faq?.question}
      </div>
      {showAnswer && <div className="answer">- {faq?.answer}</div>}
    </div>
  );
};

export default FaqItem;
