const Utilidades = () => (
  <div className=" py-10">
    <div className="container mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-6">Utilidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Enlace para rendir equivalencias */}
        <div className="dark:bg-dark-black shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Cuadernillos</h3>
          <p>
            ¿Buscas el material de ingreso de tu respectiva carrera?
          </p>
          <a
            href="/formulario-equivalencias"
            className="text-blue-600 hover:underline dark:text-dark-red"
          >
            Haz click aqui para obtenerlo
          </a>
        </div>
        {/* Otros enlaces útiles */}
        <div className="dark:bg-dark-black shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Recursos de Estudio</h3>
          <p>
            Accede a una colección de recursos de estudio recomendados por
            docentes y estudiantes.
          </p>
          <a
            href="/recursos-de-estudio"
            className="text-blue-600 hover:underline dark:text-dark-red"
          >
            Recursos de Estudio
          </a>
        </div>
        {/* Otros enlaces útiles */}
        <div className="dark:bg-dark-black shadow-md rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">
            Condición de Alumno Libre
          </h3>
          <p>¿Quieres rendir libre algun espacio curricular?.
            Aqui encontrarás el documento a presentar
          </p>
          <a
            href="https://drive.google.com/file/d/1HyV7v03vEOuTrZ1YrvAsAu4oPwwR3tH8/view"
            className="text-blue-600 hover:underline dark:text-dark-red"
          >
            Nota para rendir libre
          </a>
        </div>
        {/* Puedes agregar más enlaces aquí */}
      </div>
    </div>
  </div>
);

export default Utilidades;
