import DatosInst from "./DatosInst";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Header from "./Header";
import Utilidades from "./Utilidades";
import WhatsAppWidget from "./Widget";

const Instituto = () => {
  const cardStyles = "p-6 dark:bg-dark-black shadow-md rounded-lg text-center";
  const textoStyles = "text-3xl font-bold text-red-500";
  return (
    <div className="dark:bg-dark-gray min-h-screen">
      <WhatsAppWidget />
      <header>
        <Header img={"/InstituteBanner.jpeg"} />
      </header>

      <main className="container mx-auto py-10 dark:bg-dark-gray">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={cardStyles}>
              <h3 className={textoStyles}>+1200</h3>
              <p className="text-lg font-semibold">Estudiantes cursando</p>
            </div>
            <div className={cardStyles}>
              <h3 className={textoStyles}>+130</h3>
              <p className="text-lg font-semibold">
                Nuevos profesionales al año
              </p>
            </div>
            <div className={cardStyles}>
              <h3 className={textoStyles}>Actualmente</h3>
              <p className="text-lg font-semibold">3 Carreras vespertinas</p>
            </div>
          </div>
        </div>
      </main>

      <aside>
        <div className="grid grid-cols-2 container">
          <div>
            <DatosInst />
          </div>
          <div>
            <Gallery />
          </div>
        </div>
      </aside>

      <section>
        <Utilidades />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Instituto;
