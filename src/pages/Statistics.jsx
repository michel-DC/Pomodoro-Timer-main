import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Statistics() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Charger les statistiques depuis le stockage local
    const savedStats = JSON.parse(localStorage.getItem("pomodoroStats")) || [];
    setStats(savedStats);
  }, []);

  const data = {
    labels: stats.map((stat) => stat.date), // Les dates des sessions
    datasets: [
      {
        label: "Minutes travaillées",
        data: stats.map((stat) => stat.minutesWorked),
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Statistiques</h1>
      {stats.length > 0 ? (
        <Bar data={data} options={options} />
      ) : (
        <p className="text-center text-gray-500">Aucune donnée disponible.</p>
      )}
    </div>
  );
}

export default Statistics;
