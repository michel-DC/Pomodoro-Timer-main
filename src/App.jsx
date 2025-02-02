import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Statistics from "./pages/Statistics";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-300 text-white flex flex-col items-center p-6">
        <div className="max-w-3xl w-full bg-white text-gray-900 rounded-lg shadow-lg mt-40">
          {/* Header avec navigation */}
          <header className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-100 rounded-lg">
            <h1 className="text-xl font-bold">
              <Link to="/" className="hover:text-gray-700">
                Pomodoro Timer
              </Link>
            </h1>
            <nav className="flex space-x-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-black px-4 py-2 rounded-md hover:bg-gray-200"
              >
                Accueil
              </Link>
              <Link
                to="/settings"
                className="text-gray-600 hover:text-black px-4 py-2 rounded-md hover:bg-gray-200"
              >
                Réglages
              </Link>
              <Link
                to="/statistics"
                className="text-gray-600 hover:text-black px-4 py-2 rounded-md hover:bg-gray-200"
              >
                Statistiques
              </Link>
            </nav>
          </header>

          {/* Contenu Principal */}
          <main className="p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/statistics" element={<Statistics />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
