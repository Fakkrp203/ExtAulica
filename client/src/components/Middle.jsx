const icons = "flex items-center";

const Middle = () => {
  return (
    <>
      <section className="container lg:px-32 mx-auto py-7 text-gray-700 dark:text-white p-20 mt-10">
        <h2 className="text-3xl font-semibold text-center mb-5 dark:text-white">
          Nuestros Valores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:grid-cols-1">
          <div>
            <div className={icons}>
              <img
                src="/excelencia.svg"
                alt=""
                className="h-16 animate-wiggle-more animate-infinite"
              />

              <h3 className="text-xl font-semibold mb-3">
                Excelencia Académica
              </h3>
            </div>
            <p className="text-sm md:text-base">
              En nuestra institución, nos esforzamos por brindar una educación
              de calidad que prepare a nuestros estudiantes para enfrentar los
              desafíos del mundo moderno.
            </p>
          </div>
          <div>
            <div className={icons}>
              <img src="/igualdad.svg" alt="" className="h-12 m-2" />

              <h3 className="text-xl font-semibold mb-3">
                Diversidad e inclusión
              </h3>
            </div>
            <p className="text-sm md:text-base">
              Valoramos y celebramos la diversidad en todas sus formas. Creemos
              en la importancia de crear un entorno inclusivo donde todos los
              estudiantes se sientan bienvenidos y respetados.
            </p>
          </div>
          <div>
            <div className={icons}>
              <img src="/social.svg" alt="" className="h-12 m-2" />

              <h3 className="text-xl font-semibold mb-3">
                Responsabilidad Social
              </h3>
            </div>
            <p className="text-sm md:text-base">
              Fomentamos el compromiso con la comunidad y la responsabilidad
              social entre nuestros estudiantes. Creemos en el poder de la
              educación para generar un impacto positivo en la sociedad.
            </p>
          </div>
          <div>
            <div className={icons}>
              <img src="/DesarrolloIntegral.svg" alt="" className="h-12 m-2" />

              <h3 className="text-xl font-semibold mb-3">
                Desarrollo Integral
              </h3>
            </div>
            <p className="text-sm md:text-base">
              Nos preocupamos por el desarrollo integral de nuestros
              estudiantes, promoviendo su crecimiento personal, emocional y
              social, además de su crecimiento académico.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Middle;
