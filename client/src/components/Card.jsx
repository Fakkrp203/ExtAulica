import { motion } from "framer-motion";

const Card = ({ title, description, image, url }) => {
  return (
    <motion.div
      className="mx-12 hvr-bob hover:shadow-2xl"
      whileHover={{
        scale: 1.1,
        transition: { ease: "easeInOut", duration: 0.1 },
        shadow: 0,
      }}
      onHoverEnd={(e) => {
        setTimeout(() => {
          // Reducir la escala y ajustar la transición
          e.target.style.transform = "scale(1)";
          e.target.style.transition = "transform 0.3s ease";
        }, 300); // Retardo de 200 milisegundos
      }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="block rounded-lg light:bg-white border shadow-secondary-1 dark:bg-dark-black dark:border-dark-black dark:shadow-lg hover:dark:shadow-red-100 light:hover:shadow-red-100 ">
        <a href="#!">
          <img className="rounded-t-lg" src={image} alt="" />
        </a>
        <div className="p-6 text-surface">
          <h5 className="mb-2 text-xl font-medium leading-tight">{title}</h5>
          <p className="mb-4 text-base">{description}</p>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            <a
              href={url}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg"
            >
              Cuadernillo
            </a>
          </motion.button>
          {title === "Técnico Superior En Desarrollo De Software." && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              <a
                href={"/proyectos"}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-dark-black mx-3 border bg-slate-100 rounded-lg"
              >
                Proyectos
              </a>
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
