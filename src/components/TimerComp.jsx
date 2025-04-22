import { useRef, useState } from "react";

/* Timer With Ref */

const TimerComp = ({ seconds, name, updateLog }) => {
  const [started, setStarted] = useState(false);
  const timer = useRef();

  const handleStart = () => {
    updateLog("clear");
    timer.current = setTimeout(() => {
      updateLog(
        "endLogTxt",
        `You Failed! Ended itself after ${seconds} second. [timerId: ${timer.current}]`
      );
      setStarted(false);
    }, 1000 * seconds);
    updateLog("startLogTxt", `Let's Go! [timerId: ${timer.current}]`);
    setStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
    updateLog(
      "stopLogTxt",
      `You Succeeded! You stopped before the end! [timerId: ${timer.current}]`
    );
    setStarted(false);
  };

  return (
    <div className="timer-block">
      <h3>Timer {name}</h3>
      <button onClick={started ? handleStop : handleStart}>
        {started ? "Stop" : "Start"} Timer
      </button>
    </div>
  );
};

export default TimerComp;
