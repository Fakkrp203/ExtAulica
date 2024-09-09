import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import librosRoutes from "./routes/libros.routes.js";
import proyectosRoutes from "./routes/proyectos.routes.js";

const app = express();

// Utiliza el middleware 'cors'
app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("ngrok-skip-browser-warning", "true");
  next();
});

// Ruta para la página de inicio
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.use(librosRoutes);
app.use(proyectosRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
