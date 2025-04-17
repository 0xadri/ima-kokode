import { useRef, useState } from "react";

/* Timer With Ref */

const Timer = ({ seconds, name }) => {
  const [started, setStarted] = useState(false);
  const timer = useRef();

  const handleStart = () => {
    timer.current = setTimeout(() => {
      console.log(`Ended ${timer.current} after ${seconds} second.`);
      setStarted(false);
    }, 1000 * seconds);
    console.log(`Go!  ${timer.current}`);
    setStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
    console.log(`Stopped! ${timer.current}`);
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

export default Timer;
