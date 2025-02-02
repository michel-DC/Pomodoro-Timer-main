import React, { useState, useEffect } from "react";
import TimerDisplay from "../components/TimerDisplay";
import TimerControls from "../components/TimerControls";

function Home() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes en secondes
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("work"); // Modes : "work", "short-break", "long-break"

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
    setTimeLeft(
      mode === "work" ? 25 * 60 : mode === "short-break" ? 5 * 60 : 15 * 60
    );
  };

  return (
    <div>
      <section className="mb-8">
        <p className="text-gray-600 mt-2 text-center">
          Boostez votre productivité avec la méthode Pomodoro :{" "}
          <b>25 minutes de travail concentré</b> suivies d'une pause.
        </p>
        <br />
        <h2 className="text-2xl font-semibold mb-4">
          Qu'est-ce que la méthode Pomodoro ?
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
