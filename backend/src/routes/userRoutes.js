import { Router } from 'express';
import { getTodosUsuarios } from '../controllers/userController.js';

const router = Router();

// Ruta para obtener todos los usuarios
router.get('/', getTodosUsuarios);

export default router;
