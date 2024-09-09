import { pool } from "../db.js";

// Función para obtener todos los proyectos
export const getProyectos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM proyectos");
    res.json(rows); // Enviar los datos en formato JSON
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error.message);
    res.status(500).json({ error: "Error en la consulta de base de datos" });
  }
};

// Función para obtener un proyecto por ID
export const getProyectoById = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM proyectos WHERE id = ?", [
      req.params.id,
    ]);

    if (rows.length > 0) {
      res.json(rows[0]); // Enviar el proyecto encontrado en formato JSON
    } else {
      res.status(404).json({ error: "Proyecto no encontrado" });
    }
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error.message);
    res.status(500).json({ error: "Error en la consulta de base de datos" });
  }
};

// Función para crear un proyecto
export const setProyecto = async (req, res) => {
  try {
    const { titulo, descripcion, ano, integrantes, githubLink, imagenUrl } =
      req.body;

    if (
      !titulo ||
      !descripcion ||
      !ano ||
      !integrantes ||
      !githubLink ||
      !imagenUrl
    ) {
      return res.status(400).json({ message: "Faltan parámetros requeridos" });
    }

    const [result] = await pool.query(
      "INSERT INTO proyectos (titulo, descripcion, ano, integrantes, githubLink, imagenUrl) VALUES (?, ?, ?, ?, ?, ?)",
      [titulo, descripcion, ano, integrantes, githubLink, imagenUrl]
    );

    res.json({
      id: result.insertId,
      titulo,
      descripcion,
      ano,
      integrantes,
      githubLink,
      imagenUrl,
    });
  } catch (error) {
    console.error("Error al insertar el proyecto:", error.message);
    res
      .status(500)
      .json({ message: "Error al insertar el proyecto", error: error.message });
  }
};

// Función para actualizar un proyecto
export const updateProyecto = async (req, res) => {
  try {
    const { id, titulo, descripcion, ano, integrantes, githubLink, imagenUrl } =
      req.body;

    if (
      !id ||
      !titulo ||
      !descripcion ||
      !ano ||
      !integrantes ||
      !githubLink ||
      !imagenUrl
    ) {
      return res.status(400).json({ message: "Faltan parámetros requeridos" });
    }

    const [result] = await pool.query(
      "UPDATE proyectos SET titulo = ?, descripcion = ?, ano = ?, integrantes = ?, githubLink = ?, imagenUrl = ? WHERE id = ?",
      [titulo, descripcion, ano, integrantes, githubLink, imagenUrl, id]
    );

    if (result.affectedRows > 0) {
      res.json({ message: "Proyecto actualizado con éxito" });
    } else {
      res.status(404).json({ message: "Proyecto no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar el proyecto:", error.message);
    res
      .status(500)
      .json({
        message: "Error al actualizar el proyecto",
        error: error.message,
      });
  }
};

// Función para eliminar un proyecto
export const deleteProyecto = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM proyectos WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows > 0) {
      res.json({ message: "Proyecto eliminado con éxito" });
    } else {
      res.status(404).json({ message: "Proyecto no encontrado" });
    }
  } catch (error) {
    console.error("Error al eliminar el proyecto:", error.message);
    res
      .status(500)
      .json({ message: "Error al eliminar el proyecto", error: error.message });
  }
};
