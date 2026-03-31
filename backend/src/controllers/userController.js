import { getAllUsers } from '../models/userModel.js';

/**
 * Endpoint para obtener todos los usuarios.
 * 
 * @param {import('express').Request} req - Objeto de petición de Express.
 * @param {import('express').Response} res - Objeto de respuesta de Express.
 */
export const getTodosUsuarios = async (req, res) => {
  try {
    const usuarios = await getAllUsers();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios', error: error.message });
  }
};
