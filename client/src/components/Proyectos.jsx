import Footer from "./Footer";
import GetProyectos from "./GetProyectos";
import { Fade } from "react-awesome-reveal";

const Proyectos = () => {
  return (
    <div>
      <Fade cascade>
        <div className="header">
          <section className="py-12">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 dark:text-dark-red">
                Proyectos de la Tecnicatura Superior en Desarrollo de Software
              </h2>
              <p className="text-lg text-gray-600 mb-8 dark:text-white">
                Como desarrolladores de software, los proyectos son nuestra
                forma de demostrar creatividad, lógica y habilidades técnicas.
                Cada proyecto representa un paso más en nuestro camino de
                aprendizaje y desarrollo profesional. <br />
                Aquí encontrarás el trabajo de los estudiantes, quienes han
                puesto en práctica sus conocimientos para dar vida a sus ideas.
              </p>
              <hr className="border-t-2 border-gray-300 mb-8" />
            </div>
          </section>

          <div className="container mx-auto px-4">
            <GetProyectos />
          </div>
        </div>

        <Footer />
      </Fade>
    </div>
  );
};

export default Proyectos;
