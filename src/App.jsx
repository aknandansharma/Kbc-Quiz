import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Who invented Java Programming?",
      answers: [
        {
          text: "Guido van Rossum",
          correct: false,
        },
        {
          text: " James Gosling",
          correct: true,
        },
        {
          text: "Dennis Ritchie",
          correct: false,
        },
        {
          text: "CBjarne Stroustrup",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question:
        "Which component is used to compile, debug and execute the java programs?",
      answers: [
        {
          text: " JRE",
          correct: false,
        },
        {
          text: "JIT",
          correct: false,
        },
        {
          text: "JDK",
          correct: true,
        },
        {
          text: "JVM",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: " Which one of the following is not a Java feature?",
      answers: [
        {
          text: "Object-oriented",
          correct: false,
        },
        {
          text: "Use of pointers",
          correct: true,
        },
        {
          text: "Portable",
          correct: false,
        },
        {
          text: " Dynamic and Extensible",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which of these cannot be used for a variable name in Java?",
      answers: [
        {
          text: "identifier & keyword",
          correct: false,
        },
        {
          text: "identifier",
          correct: false,
        },
        {
          text: "keyword",
          correct: true,
        },
        {
          text: "none of the mentioned",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: " What is the extension of java code files?",
      answers: [
        {
          text: ".js",
          correct: false,
        },
        {
          text: ".txt",
          correct: false,
        },
        {
          text: ".class",
          correct: false,
        },
        {
          text: ".java",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Which environment variable is used to set the java path?",
      answers: [
        {
          text: "MAVEN_Path",
          correct: false,
        },
        {
          text: "JavaPATH",
          correct: false,
        },
        {
          text: "JAVA",
          correct: false,
        },
        {
          text: "JAVA_HOME",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "Which of the following is not an OOPS concept in Java?",
      answers: [
        {
          text: "Polymorphism",
          correct: false,
        },
        {
          text: "Inheritance",
          correct: false,
        },
        {
          text: "Compilation",
          correct: true,
        },
        {
          text: "Encapsulation",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question:
        " Which of the following is a type of polymorphism in Java Programming?",
      answers: [
        {
          text: "Multiple polymorphism",
          correct: false,
        },
        {
          text: "Compile time polymorphism",
          correct: true,
        },
        {
          text: "Multilevel polymorphism",
          correct: false,
        },
        {
          text: "Execution time polymorphism",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: " Which of these are selection statements in Java?",
      answers: [
        {
          text: "break",
          correct: false,
        },
        {
          text: "continue",
          correct: false,
        },
        {
          text: " for()",
          correct: false,
        },
        {
          text: "if()",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Which of these keywords is used to define interfaces in Java?",
      answers: [
        {
          text: "intf",
          correct: false,
        },
        {
          text: "Intf",
          correct: false,
        },
        {
          text: "interface",
          correct: true,
        },
        {
          text: " Interfa",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Ranipur Tiger Reserve is located in which Indian state?",
      answers: [
        {
          text: "Uttar Pradesh",
          correct: true,
        },
        {
          text: "Assam",
          correct: false,
        },
        {
          text: "Bihar",
          correct: false,
        },
        {
          text: "Gujarat",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question:
        "Which state is the host of the ‘Urban Mobility India Conference and Expo 2022’?",
      answers: [
        {
          text: "Tamil Nadu",
          correct: false,
        },
        {
          text: "Kerala",
          correct: true,
        },
        {
          text: "Karnataka",
          correct: false,
        },
        {
          text: "Maharashtra",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question:
        "As per the UN-FAO joint report, eight million people of which country is at the risk of hunger?",
      answers: [
        {
          text: "South Sudan",
          correct: true,
        },
        {
          text: "Israel",
          correct: false,
        },
        {
          text: "Ghana",
          correct: false,
        },
        {
          text: "Egypt",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which institution released the Adaptation Gap Report 2022?",
      answers: [
        {
          text: "WEF",
          correct: false,
        },
        {
          text: "UNEP",
          correct: true,
        },
        {
          text: "UNFCCC",
          correct: false,
        },
        {
          text: "NITI Aayog",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question:
        "BSNL has received approval for a deal with which company to launch 4G services in India?",
      answers: [
        {
          text: "Meta",
          correct: false,
        },
        {
          text: "Samsung",
          correct: false,
        },
        {
          text: "Tata Consultancy Services",
          correct: true,
        },
        {
          text: "Apple",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 100" },
        { id: 2, amount: "₹ 200" },
        { id: 3, amount: "₹ 300" },
        { id: 4, amount: "₹ 500" },
        { id: 5, amount: "₹ 1000" },
        { id: 6, amount: "₹ 2000" },
        { id: 7, amount: "₹ 4000" },
        { id: 8, amount: "₹ 8000" },
        { id: 9, amount: "₹ 16000" },
        { id: 10, amount: "₹ 32000" },
        { id: 11, amount: "₹ 64000" },
        { id: 12, amount: "₹ 125000" },
        { id: 13, amount: "₹ 250000" },
        { id: 14, amount: "₹ 500000" },
        { id: 15, amount: "₹ 1000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
