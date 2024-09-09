import GetLibros from "./GetLibros";
import Footer from "./Footer";
import { Fade } from "react-awesome-reveal";

const Biblioteca = () => {
  return (
    <Fade cascade>
      <>
        <h1 className="text-center text-4xl m-9">Biblioteca</h1>
        <div className="">
          <GetLibros />
        </div>
        <Footer />
      </>
    </Fade>
  );
};

export default Biblioteca;
