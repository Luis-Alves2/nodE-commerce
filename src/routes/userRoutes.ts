import express from 'express';
import UserController from '../controllers/userController';

const router = express.Router();

// Define routes for user-related endpoints
router.post('/users', UserController.createUser);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

export default router;