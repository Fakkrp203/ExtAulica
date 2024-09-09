import { Router } from "express";
import { deleteLibro, getLibro, getLibros, setLibros, updateLibro } from "../controllers/libros.controllers.js";

const router = Router();

// Ruta para obtener libros
router.get("/libros", getLibros);
// obtener un libro
router.get("/libros/:id_libro", getLibro);
// Crear libro
router.post("/libros", setLibros);
// Actualizar libro
router.put("/libros/:id_libro", updateLibro);
// Eliminar Libro
router.delete("/libros/:id_libro", deleteLibro)

export default router;
