import { useState, useEffect } from "react";
import ProyectoCard from "./ProyectoCard";

const GetProyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  const url = "https://proud-cowbird-integral.ngrok-free.app/proyectos";
  const url2 = "http://localhost:4000/proyectos";

  useEffect(() => {
    fetch(url || url2, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((response) => response.json())
      .then((data) => setProyectos(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {proyectos.map((proyecto) => (
        <ProyectoCard
          key={proyecto.id}
          curso={proyecto.curso}
          descripcion={proyecto.descripcion}
          integrantes={proyecto.integrantes}
          proyectoIMG={proyecto.proyectoIMG}
          proyectoLink={proyecto.proyectoLink}
          titulo={proyecto.titulo}
        />
      ))}
    </div>
  );
};

export default GetProyectos;
