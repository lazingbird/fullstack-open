import { useState } from "react";

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const StatisticsLine = ({ text, value }) => {
  if (text === "positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Statistics = ({ good, neutral, bad }) => {
  const getAll = () => good + neutral + bad;
  const getAverage = () => {
    return good + neutral + bad > 0
      ? (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)
      : 0;
  };
  const getPositive = () => {
    return good + neutral + bad > 0 ? good / (good + neutral + bad) : 0;
  };

  if (good + neutral + bad === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text={"good"} value={good}></StatisticsLine>
          <StatisticsLine text={"neutral"} value={neutral}></StatisticsLine>
          <StatisticsLine text={"bad"} value={bad}></StatisticsLine>
          <StatisticsLine text={"all"} value={getAll()}></StatisticsLine>
          <StatisticsLine
            text={"average"}
            value={getAverage()}
          ></StatisticsLine>
          <StatisticsLine
            text={"positive"}
            value={getPositive()}
          ></StatisticsLine>
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onHandleClick = (value) => {
    const click = () => {
      switch (value) {
        case "good":
          setGood(good + 1);
          break;
        case "neutral":
          setNeutral(neutral + 1);
          break;
        case "bad":
          setBad(bad + 1);
          break;
      }
    };
    return click;
  };

  return (
    <div>
      <main>
        <h1>give feedback</h1>
        <div id="buttons-container">
          <Button text="good" onClick={onHandleClick("good")}></Button>
          <Button text="neutral" onClick={onHandleClick("neutral")}></Button>
          <Button text="bad" onClick={onHandleClick("bad")}></Button>
        </div>
        <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
      </main>
    </div>
  );
};

export default App;
