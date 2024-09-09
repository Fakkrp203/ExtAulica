import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GetLibros = () => {
  const [libros, setLibros] = useState([]);
  const [search, setSearch] = useState("");

  const url = "https://proud-cowbird-integral.ngrok-free.app/libros";
  const localURL = "http://localhost:4000/libros";

  useEffect(() => {
    fetch(localURL || url , {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((response) => response.json())
      .then((data) => setLibros(data))
      .catch((error) => console.error("Error fetching libros:", error));
  }, []);

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const filteredLibros = libros.filter((libro) =>
    libro.titulo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-10">
      <form className="max-w-md mx-auto pb-12">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Buscar Libro por Nombre"
            required
            value={search}
            onChange={searcher}
          />
        </div>
      </form>
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredLibros.map((libro) => (
          <motion.div
            key={libro.id_libro}
            className="h-full mx-2 hvr-bob hover:shadow-2xl"
            whileHover={{
              scale: 1.05,
              transition: { ease: "easeInOut", duration: 0.1 },
              shadow: true,
            }}
            onHoverEnd={(e) => {
              setTimeout(() => {
                e.target.style.transform = "scale(1)";
                e.target.style.transition = "transform 0.3s ease";
              }, 300);
            }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="h-full block rounded-lg light:bg-white border shadow-secondary-1 dark:bg-dark-black dark:border-dark-black dark:shadow-lg hover:dark:shadow-red-100 light:hover:shadow-red-100">
              <a href="#!">
                <img
                  className="w-full h-64 object-top object-cover"
                  src={libro.imagen}
                  alt=""
                />
              </a>

              <div className="p-6 text-surface">
                <h5 className="mb-2 text-xl font-medium leading-tight">
                  {libro.titulo}
                </h5>
                <p className="mb-4 text-base">Autor: {libro.autor}</p>
                <p className="mb-4 text-base">
                  Año de Publicación:{" "}
                  {new Date(libro.año_publicacion).getFullYear()}
                </p>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <a
                    href={libro.link}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg"
                  >
                    Libro
                  </a>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GetLibros;
