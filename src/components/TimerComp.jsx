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
    <div className="timer-block rounded-lg">
      <h3 className="text-xl mb-5">Timer {name}</h3>
      <button
        onClick={started ? handleStop : handleStart}
        className="px-4 py-2 border border-blue-800 rounded-lg cursor-pointer max-sm:py-2 max-sm:px-2 max-sm:text-xs text-white bg-gray-800 font-medium text-sm text-center hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-blue-300"
      >
        {started ? "Stop" : "Start"} Timer
      </button>
    </div>
  );
};

export default TimerComp;
