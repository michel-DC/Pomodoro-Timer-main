import React from "react";

function TimerControls({ isRunning, toggleTimer, resetTimer }) {
  return (
    <div className="flex justify-center space-x-4 mt-6">
      <button
        onClick={toggleTimer}
        className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 shadow-md"
      >
        {isRunning ? "Pause" : "Démarrer"}
      </button>
      <button
        onClick={resetTimer}
        className="px-6 py-3 bg-gray-300 text-gray-900 rounded-md hover:bg-gray-400 shadow-md"
      >
        Réinitialiser
      </button>
    </div>
  );
}

export default TimerControls;
