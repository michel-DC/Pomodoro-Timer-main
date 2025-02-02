import React from "react";

function TimerDisplay({ timeLeft, mode }) {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="text-center mb-6">
      <h1 className="text-2xl font-semibold mb-4">
        {mode === "work"
          ? "Session de Travail"
          : mode === "short-break"
          ? "Pause Courte"
          : "Pause Longue"}
      </h1>
      <div className="text-6xl font-mono bg-gray-200 text-gray-900 py-4 px-6 rounded-md shadow-inner">
        {formatTime(timeLeft)}
      </div>
    </div>
  );
}

export default TimerDisplay;
