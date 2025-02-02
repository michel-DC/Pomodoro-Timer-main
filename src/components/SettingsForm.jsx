import React, { useState } from "react";

function SettingsForm({ defaultSettings, onSave }) {
  const [workTime, setWorkTime] = useState(defaultSettings.workTime);
  const [shortBreak, setShortBreak] = useState(defaultSettings.shortBreak);
  const [longBreak, setLongBreak] = useState(defaultSettings.longBreak);

  const handleSave = () => {
    onSave({ workTime, shortBreak, longBreak });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-2">Durée du Pomodoro (minutes)</label>
        <input
          type="number"
          value={workTime}
          onChange={(e) => setWorkTime(Number(e.target.value))}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block mb-2">Pause courte (minutes)</label>
        <input
          type="number"
          value={shortBreak}
          onChange={(e) => setShortBreak(Number(e.target.value))}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block mb-2">Pause longue (minutes)</label>
        <input
          type="number"
          value={longBreak}
          onChange={(e) => setLongBreak(Number(e.target.value))}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <button
        onClick={handleSave}
        className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-700"
      >
        Sauvegarder
      </button>
    </div>
  );
}

export default SettingsForm;
