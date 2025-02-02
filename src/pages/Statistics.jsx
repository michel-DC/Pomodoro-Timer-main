import { useEffect, useState } from "react";
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
    const loadStats = () => {
      try {
        const savedStats =
          JSON.parse(localStorage.getItem("pomodoroStats")) || [];
        if (Array.isArray(savedStats)) {
          setStats(savedStats);
        } else {
          setStats([]);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des statistiques :", error);
        setStats([]);
      }
    };

    loadStats();

    // Écouter les changements dans le localStorage
    const handleStorageChange = () => loadStats();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const data = {
    labels: stats?.map((stat) => stat.date) || [], // Vérification de `stats`
    datasets: [
      {
        label: "Minutes travaillées",
        data: stats?.map((stat) => stat.minutesWorked) || [],
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
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Statistiques</h1>
      {stats.length > 0 ? (
        <Bar data={data} options={options} />
      ) : (
        <p className="text-center text-gray-500">Aucune donnée disponible.</p>
      )}
    </div>
  );
}

export default Statistics;
