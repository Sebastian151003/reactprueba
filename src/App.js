import React from "react";
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{backgroundColor: "#F9F3F3"}}>
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
        <aside className="w-60 bg-100 p-4 shadow-md hidden md:block" style={{backgroundColor: "#DDDDDD"}}>
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
          <div className="bg-blue-100 p-6 rounded-lg text-center shadow-md">
            <h1 className="text-2xl font-bold text-blue-700">
              Encuentra los recursos que necesitas
            </h1>
            <p className="text-blue-600">
              Conecta con el conocimiento en tu organización.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
              Agregar recurso
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{backgroundColor:"#F9F3F3"}}>
            {/* Example Resource Card */}
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg"
              >
                <h2 className="font-semibold text-lg">Recurso #{item}</h2>
                <p className="text-gray-500">
                  Descripción breve del recurso aquí.
                </p>
                <button className="mt-4 text-sm text-blue-600">
                  Ver más
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center text-sm">
        © 2025 NombreEmpresa - Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default App;
