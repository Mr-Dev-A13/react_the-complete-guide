import { useRef } from "react";

function Answers ({answers, selectedAnswer, answerState, onSelect}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if ((answerState === "correct" || answerState === "wrong") && isSelected) {
          cssClass = answerState;
        }

        return (
          <li className="answer" key={answer}>
            <button
              className={cssClass}
              disabled={answerState !== ""}
              onClick={() => onSelect(answer)}
            >
              {answer}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default Answers;