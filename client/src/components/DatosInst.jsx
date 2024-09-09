const DatosInst = () => {
  return (
    <>
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-3">Datos Institucionales</h2>
        <div className="max-w-md mx-auto dark:bg-dark-black shadow-md rounded-lg p-6">
          <p className="mb-4">
            <span className="font-semibold"></span>{" "}
            <span className="text-dark-red">Departamento</span> : Juan B.
            Alberdi
            <br />
            <span className="text-dark-red">Localidad </span>: Juan B. Alberdi
            <br />
            <span className="text-dark-red">Director(a)</span> : Ani Vizgarra
            <br />
            <span className="text-dark-red"> Creación del instituto: </span> 01/03/2021
            <br />
            <span className="text-dark-red">Dirección: </span>  AV. JUAN B. TERÁN 34
            <br />
            Comparte edificio con: Escuela de Comercio “Ciudad Alberdi"
            <br />
            Teléfono: 3865411522
          </p>
          <p className="font-semibold">Departamento: Juan B. Alberdi</p>
        </div>
      </div>
    </>
  );
};

export default DatosInst;
