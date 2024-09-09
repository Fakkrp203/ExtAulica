import Header from "./Header";
import Icons from "./Icons";
import Footer from "./Footer";
import { Fade } from "react-awesome-reveal";

const FmIES = () => {
  return (
    <Fade cascade>
      <Header img={"/fmies.jpg"} />

      <header className="grid grid-cols-3  w-full bg-white p-12 gap-5 dark:bg-dark-black">
        <div className="border col-span-2 p-10">
          <h1 className="text-3xl font-bold mb-4">FM IES 89.1</h1>
          <p className="leading-relaxed">
            El Proyecto Federal de Radios Socioeducativas de los Institutos de
            Educación Superior tuvo como propósito inicial el emplazamiento de
            50 Radios Socioeducativas en todo el país, de las cuales 4 fueron
            planificadas en Tucumán.
          </p>{" "}
          <br />
          <p>
            Este proyecto tiene como uno de sus objetivos principales generar
            una verdadera red de medios de comunicación que permita dar
            visibilidad a los Institutos Superiores y su vinculación
            comunitaria.
          </p>
          <br />
          <p>
            Las Radios posibilitan poner en diálogo permanente a la institución
            educativa con su comunidad atendiendo su propio territorio.
          </p>
          <br />
          <p>
            Las Frecuencias asignadas oficialmente a las radios socioeducativas
            de nuestra provincia son:
          </p>
          <ul className="font-semibold">
            <li>Radio IES La Cocha 89.1 MHz.</li>
            <li>Radio IES Colalao del Valle 88.3 MHz.</li>
            <li>Radio IES Burruyacú 88.3 MHz.</li>
            <li>Radio IES Villa Quinteros 97.7 MHz.</li>
          </ul>
          <br />
          <p>
            Actualmente FM IES LA COCHA, continúa transmitiendo las 24 hs del
            día, siendo su Referente Institucional el Profesor Ariel Martinez.
          </p>
        </div>

        <div className=" p-10">
          <Icons />
        </div>

        <div className="instagram"></div>
      </header>

      <Footer />
    </Fade>
  );
};

export default FmIES;
