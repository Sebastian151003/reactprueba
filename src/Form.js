import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    tags: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md" style={{ backgroundColor: "#F9F3F3" }}>
      <h2 className="text-xl font-bold mb-4" style={{ color: "#F25287" }}>
        Publicar un Nuevo Recurso
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Título del recurso
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-pink-300"
            placeholder="Ingresa el título del recurso"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Descripción
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-pink-300"
            placeholder="Describe brevemente el recurso"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Categoría
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-pink-300"
            required
          >
            <option value="" disabled>
              Selecciona una categoría
            </option>
            <option value="Documentación">Documentación</option>
            <option value="Tutoriales">Tutoriales</option>
            <option value="Guías">Guías</option>
            <option value="Recursos técnicos">Recursos técnicos</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Etiquetas
          </label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-pink-300"
            placeholder="Ejemplo: React, JavaScript"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Subir archivo (opcional)
          </label>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="block w-full text-sm text-gray-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-pink-600"
        >
          Publicar Recurso
        </button>
      </form>
    </div>
  );
};

export default Form;
