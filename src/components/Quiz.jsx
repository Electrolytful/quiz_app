import { useState } from "react";

export default function Quiz() {
  const [aciveQuestionIndex, setAciveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  return <p>Current Question</p>;
}
