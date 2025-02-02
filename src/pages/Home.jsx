import { useState, useEffect } from "react";
import TimerDisplay from "../components/TimerDisplay";
import TimerControls from "../components/TimerControls";

function Home() {
  // États pour le minuteur
  const [timeLeft, setTimeLeft] = useState(25 * 60); // Converti en secondes
  const [isRunning, setIsRunning] = useState(false);
  const [mode] = useState("work"); // Modes : "work", "short-break", "long-break"
  const [durations, setDurations] = useState({
    work: 25,
    shortBreak: 5,
    longBreak: 15,
  });

  // Charger les paramètres sauvegardés au montage
  useEffect(() => {
    const savedDurations = JSON.parse(localStorage.getItem("pomodoroSettings"));
    if (savedDurations) {
      setDurations(savedDurations);
      setTimeLeft(savedDurations.work * 60); // Converti en secondes
    }
  }, []);

  // Surveiller les modifications du `localStorage`
  useEffect(() => {
    const handleStorageChange = () => {
      const updatedSettings = JSON.parse(
        localStorage.getItem("pomodoroSettings")
      );
      if (updatedSettings) {
        setDurations(updatedSettings);
        setTimeLeft(updatedSettings[mode] * 60); // Converti en secondes
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [mode]);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(durations[mode] * 60); // Converti en secondes
  };

  return (
    <div>
      <section className="mb-8">
        <p className="text-gray-600 mt-2 text-center">
          Boostez votre productivité avec la méthode Pomodoro :{" "}
          <b>{durations.work} minutes de travail concentré</b> suivies d`une
          pause de 5 minutes.
        </p>
        <br />
        <h2 className="text-2xl font-semibold mb-4">
          Qu&apos;est-ce que la méthode Pomodoro ?
        </h2>
        <p className="text-gray-600">
          La méthode Pomodoro est une technique de gestion du temps développée
          par Francesco Cirillo. Elle se base sur des intervalles de 25 minutes
          de travail intensif, suivis de courtes pauses de 5 minutes. Après 4
          cycles, une pause plus longue de 15 à 30 minutes est recommandée.
        </p>
      </section>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <TimerDisplay timeLeft={timeLeft} mode={mode} />
        <TimerControls
          isRunning={isRunning}
          toggleTimer={toggleTimer}
          resetTimer={resetTimer}
        />
      </div>
    </div>
  );
}

export default Home;
