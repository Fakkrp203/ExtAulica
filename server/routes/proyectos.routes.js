import { Router } from "express";

const router = Router();

import {
  getProyectos,
  getProyectoById,
  setProyecto,
  updateProyecto,
  deleteProyecto,
} from "../controllers/proyectos.controllers.js";

// Ruta para obtener todos los proyectos
router.get("/proyectos", getProyectos);
// Obtener un proyecto por ID
router.get("/proyectos/:id", getProyectoById);
// Crear un nuevo proyecto
router.post("/proyectos", setProyecto);
// Actualizar un proyecto existente
router.put("/proyectos", updateProyecto);
// Eliminar un proyecto
router.delete("/proyectos/:id", deleteProyecto);

export default router;
