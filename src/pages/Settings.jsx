import { useState, useEffect } from "react";

function Settings() {
  // États pour stocker les durées en minutes
  const [settings, setSettings] = useState({
    work: 25,
    shortBreak: 5,
    longBreak: 15,
  });

  const [saved, setSaved] = useState(false); // État pour afficher un message de confirmation

  // Charger les paramètres sauvegardés depuis localStorage
  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem("pomodoroSettings"));
    if (savedSettings) {
      setSettings(savedSettings); // Charger directement en minutes
    }
  }, []);

  // Met à jour les paramètres en local
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: Number(value),
    }));
  };

  // Sauvegarde les paramètres en minutes dans localStorage
  const handleSave = () => {
    localStorage.setItem("pomodoroSettings", JSON.stringify(settings));

    // Déclenche un événement personnalisé pour signaler le changement
    window.dispatchEvent(new Event("storage"));

    // Affiche un message de confirmation temporairement
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Paramètres Pomodoro</h2>

      <label className="block mb-3">
        <span className="text-gray-700">Durée du travail (minutes) :</span>
        <input
          type="number"
          name="work"
          value={settings.work}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
          min="1"
        />
      </label>

      <label className="block mb-3">
        <span className="text-gray-700">
          Durée de la pause courte (minutes) :
        </span>
        <input
          type="number"
          name="shortBreak"
          value={settings.shortBreak}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
          min="1"
        />
      </label>

      <label className="block mb-3">
        <span className="text-gray-700">
          Durée de la pause longue (minutes) :
        </span>
        <input
          type="number"
          name="longBreak"
          value={settings.longBreak}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded"
          min="1"
        />
      </label>

      {/* Bouton de sauvegarde */}
      <button
        onClick={handleSave}
        className="w-full bg-gray-900 text-white  py-2 mt-4 rounded hover:bg-gray-700 shadow-md transition"
      >
        Sauvegarder
      </button>

      {/* Message de confirmation */}
      {saved && (
        <p className="text-green-600 mt-2 text-center">
          Paramètres enregistrés ! ✅
        </p>
      )}
    </div>
  );
}

export default Settings;
