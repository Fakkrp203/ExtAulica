import Cards from "./Cards";
import Banner from "./Banner";
import MapaGoogle from "./Mapa";
import Footer from "./Footer";
import Header from "./Header";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import Middle from "./Middle";
import Quote from "./Quote";

const Home = () => {
  return (
    <Fade cascade>
      <>
        <Header img={"/ImgPrincipal.jpeg"} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Introduccion */}
          <main className="container lg:px-32 mx-auto py-7 text-gray-700 dark:text-white">
            <div className="container">
              <h1 className="text-4xl text-center m-5 text-black dark:text-white animate-fade animate-once animate-duration-700 font-semibold first-letter:text-red-600">
                ¡Bienvenido a la Extensión Áulica "Juan Bautista Alberdi"
              </h1>
            </div>
            <div className="container px-12">
              <Quote />
            </div>

            <Middle />
          </main>

          <article>
            <h3 className="text-center text-3xl font-semibold dark:text-white">
              Carreras Disponibles
            </h3>
            <Cards />
          </article>

          <div className="mt-12">
            <Banner />
          </div>

          <section className="mt-12">
            <h3 className="text-center text-3xl my-9 font-semibold dark:text-white">
              Te esperamos aqui!
            </h3>
            <MapaGoogle />
          </section>

          <Footer />
        </motion.div>
      </>
    </Fade>
  );
};

export default Home;
