import { useState } from "react";
import TimerComp from "../components/TimerComp";

const LOG_INIT_STATE = {
  startLogTxt: null,
  endLogTxt: null,
  stopLogTxt: null,
};

const Timer = () => {
  const [log, setLog] = useState(LOG_INIT_STATE);

  const updateLog = (logProperty, logTxt) => {
    if (logProperty === "clear" || logTxt === "clear") {
      setLog(LOG_INIT_STATE);
    } else {
      setLog((prev) => ({
        ...prev, // Clone object for immutability (Shallow Clone)
        [logProperty]: logTxt, // Add/Update Property
      }));
    }
  };

  return (
    <div>
      <div>
        <TimerComp seconds={1} name="1sec" updateLog={updateLog} />
        <TimerComp seconds={2} name="2sec" updateLog={updateLog} />
      </div>
      <div>
        <h2 className="text-xl mb-5">Log</h2>
        <div className="timer-log-section">
          {/* <p>{log.startLogTxt ? "Start Log: " + log.startLogTxt : null}</p> */}
          {log.startLogTxt && (
            <p className="text-base mb-5">
              {/* <span className="timer-log-label">Start:</span>  */}
              {log.startLogTxt}
            </p>
          )}
          {log.endLogTxt && (
            <p className="text-base mb-5">
              {/* <span className="timer-log-label">End:</span>  */}
              {log.endLogTxt}
            </p>
          )}
          {log.stopLogTxt && (
            <p className="text-base mb-5">
              {/* <span className="timer-log-label">Stop:</span>  */}
              {log.stopLogTxt}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timer;
