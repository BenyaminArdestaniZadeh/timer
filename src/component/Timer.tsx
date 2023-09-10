// import { useState } from "react";
import { useState, useEffect } from "react";

export default function Timer() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  // useState is dependent on start button
  const [isActive, setIsActive] = useState(false);

  const [isPause, setIsPause] = useState(false);

  useEffect(() => {
    if (isActive && isPause === false) {
      setTimeout(() => {
        handleStart();
      }, 1000);
    }

  }, [second, isPause]);

  const handleStart = () => {
    setIsActive(true);
    if (second !== 59) {
      setSecond((prev) => prev + 1);
    } else if (second === 59) {
      setSecond(0);
      if (minute !== 59) {
        setMinute((prev) => prev + 1);
      } else {
        setMinute(0);
        if (hour !== 23) {
          setHour((prev) => prev + 1);
        } else {
          setHour(0);
        }
      }
    }
  };

  const handleReset = () => {
    setSecond(0);
    setMinute(0);
    setHour(0);
    setIsActive(false);
  };

  const handlePauseOrResume = () => {
    setIsPause(!isPause);
  };

  return (
    <>
      <div className="timer-container">
        <h1>Timer</h1>
        <div className="frames-container">
          <div className="product-data">
            <span className="value">{second.toString().padStart(2, "0")}</span>
            <span className="element">Second</span>
          </div>

          <div className="product-data">
            <span className="value">{minute.toString().padStart(2, "0")}</span>
            <span className="element">Minute</span>
          </div>

          <div className="product-data">
            <span className="value">{hour.toString().padStart(2, "0")}</span>
            <span className="element">Hour</span>
          </div>
        </div>
        <div className="buttons-container">
          <button
            className="button-product"
            disabled={isActive === true}
            onClick={handleStart}
          >
            Start
          </button>
          <button className="button-product" onClick={handleReset}>
            Reset
          </button>
          <button className="button-product" onClick={handlePauseOrResume}>
            {isPause === true ? "Resume" : "Pause"}
          </button>
        </div>
      </div>
    </>
  );
}
