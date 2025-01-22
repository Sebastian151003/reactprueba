import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './index.css';
import Form from "./Form"; // Importa el formulario

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F9F3F3" }}>
        {/* Header */}
        <header className="py-4 px-6 flex justify-between items-center shadow-md" style={{ backgroundColor: "#F25287" }}>
          <div className="text-xl font-bold text-white">NombreEmpresa</div>
          <input
            type="text"
            placeholder="Buscar recursos..."
            className="px-4 py-2 rounded-md border focus:ring focus:ring-pink-300"
          />
          <div className="flex gap-4">
            <button className="text-sm text-white">Notificaciones</button>
            <button className="text-sm text-white">Perfil</button>
          </div>
        </header>

        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-60 bg-100 p-4 shadow-md hidden md:block" style={{ backgroundColor: "#DDDDDD" }}>
            <h2 className="text-lg font-semibold mb-4">Categorías</h2>
            <ul className="space-y-2">
              <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer">
                Documentación
              </li>
              <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer">
                Tutoriales
              </li>
              <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer">
                Guías
              </li>
              <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer">
                Recursos técnicos
              </li>
            </ul>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="bg-blue-100 p-6 rounded-lg text-center shadow-md">
                    <h1 className="text-2xl font-bold text-blue-700">
                      Encuentra los recursos que necesitas
                    </h1>
                    <p className="text-blue-600">
                      Conecta con el conocimiento en tu organización.
                    </p>
                    <Link to="/form">
                      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
                        Agregar recurso
                      </button>
                    </Link>
                  </div>
                }
              />
              <Route path="/form" element={<Form />} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4 text-center text-sm">
          © 2025 NombreEmpresa - Todos los derechos reservados.
        </footer>
      </div>
    </Router>
  );
};

export default App;
