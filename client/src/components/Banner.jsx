import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <Fade>
      <ParallaxBanner
        layers={[
          {
            image: "/NewBanner.jpeg",
            speed: -15,
          },
        ]}
        className="aspect-[2/1] h-80 bg-cover bg-center bg-no-repeat relative"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <ParallaxBannerLayer>
          <div className="bg-cover bg-center h-auto text-white py-8 px-4 sm:px-6 lg:px-8 object-fill banner">
            <div className="md:w-3/4 mx-auto text-center">
              <p className="font-bold text-sm uppercase">
                Descubre Nuestro Anexo
              </p>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-4">
                Un Espacio de Aprendizaje Único.
              </h1>
              <p className="mt-4 text-base md:text-lg lg:text-xl leading-7">
                Nuestro anexo ofrece una experiencia educativa excepcional para
                estudiantes provenientes de diversas localidades. Buscamos
                cultivar el potencial de cada estudiante y brindarles las
                herramientas necesarias para alcanzar el éxito académico y
                personal.
              </p>
            </div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </Fade>
  );
};

export default Banner;
