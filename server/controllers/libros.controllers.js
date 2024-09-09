import { pool } from "../db.js";

// ngrok
export const addNgrokHeader = (req, res, next) => {
  res.setHeader('ngrok-skip-browser-warning', 'true');
  next();
};

// Obtener todos los libros
export const getLibros = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM libros");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// Obtener un libro en particular
export const getLibro = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM libros WHERE id_libro = ?",
      [
        req.params.id_libro, // Utiliza req.params.id_libro en lugar de req.params.id
      ]
    );

    if (result.length === 0)
      return res.status(404).json({ message: "Libro no encontrado" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Crear Libros
export const setLibros = async (req, res) => {
  try {
    const {
      titulo,
      autor,
      año_publicacion,
      ubicacion,
      disponibilidad,
      imagen,
      link,
    } = req.body;
    const [result] = await pool.query(
      "INSERT INTO libros(titulo, autor, año_publicacion, ubicacion, disponibilidad, imagen, link) VALUES (?,?,?,?,?,?,?)",
      [titulo, autor, año_publicacion, ubicacion, disponibilidad, imagen, link]
    );
    res.json({
      id: result.insertId,
      titulo,
      autor,
      año_publicacion,
      ubicacion,
      disponibilidad,
      imagen,
      link
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al insertar libro", error: error.message });
  }
};

// Actualizar Libro
export const updateLibro = async (req, res) => {
  try {
    const result = await pool.query("UPDATE libros SET ? WHERE id_libro = ?", [
      req.body,
      req.params.id_libro,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Eliminar Libro
export const deleteLibro = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM libros WHERE id_libro = ?", [
      req.params.id_libro,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Task not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
