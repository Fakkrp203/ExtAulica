const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "/NewBanner.jpeg",
      name: "Outlet",
    },
    {
      id: 2,
      src: "/ImgPrincipal.jpeg",
      name: "Exterior",
    },
    {
      id: 3,
      src: "/Curso",
      name: "Cursos",
    },
    {
      id: 4,
      src: "/SegundoPiso",
      name: "SegundoPiso",
    },
    {
      id: 5,
      src: "/Patio.jpg",
      name: "Patio",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center items-center">
        {images.map((image) => (
          <div
            key={image.id}
            className="m-2 relative overflow-hidden cursor-pointer"
          >
            <img
              src={image.src}
              alt={`Image ${image.name}`}
              className="w-48 h-48 object-cover transform transition-transform duration-300 hover:scale-150 rounded-xl"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-bold">{image.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
