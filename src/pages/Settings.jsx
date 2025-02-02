import React, { useState } from "react";

function Settings() {
  const [workTime, setWorkTime] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);

  const saveSettings = () => {
    localStorage.setItem("workTime", workTime);
    localStorage.setItem("shortBreak", shortBreak);
    localStorage.setItem("longBreak", longBreak);
    alert("Paramètres sauvegardés !");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Paramètres</h1>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Durée du Pomodoro (minutes)</label>
          <input
            type="number"
            value={workTime}
            onChange={(e) => setWorkTime(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2">Pause courte (minutes)</label>
          <input
            type="number"
            value={shortBreak}
            onChange={(e) => setShortBreak(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block mb-2">Pause longue (minutes)</label>
          <input
            type="number"
            value={longBreak}
            onChange={(e) => setLongBreak(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <button
          onClick={saveSettings}
          className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-700"
        >
          Sauvegarder
        </button>
      </div>
    </div>
  );
}

export default Settings;
