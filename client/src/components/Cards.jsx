import Card from "./Card";
import carreras from "./Carreras";
import Reveal from "react-awesome-reveal";

const Cards = () => {
  const tecnicaturaCards = carreras.slice(0, 3);
  const generalCards = carreras.slice(3); // Obtener las carreras restantes

  return (
    <div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-12">
        {tecnicaturaCards.map((carrera) => (
          <Reveal appear delay={400} duration={1000} key={carrera.id}>
            <Card
              key={carrera.id}
              title={carrera.title}
              description={carrera.description}
              image={carrera.image}
              url={carrera.url}
            />
          </Reveal>
        ))}
      </div>

      <h3 className="text-center text-3xl font-semibold dark:text-white mt-14">
        Carreras del I.E.S La cocha
      </h3>

      {/* Sección para mostrar las carreras restantes */}
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-12">
        {generalCards.map((carrera) => (
          <Reveal appear delay={400} duration={1000} key={carrera.id}>
            <Card
              key={carrera.id}
              title={carrera.title}
              description={carrera.description}
              image={carrera.image}
              url={carrera.url}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Cards;
