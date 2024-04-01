import express from 'express';
import UserController from '../controllers/userController';

const userRoutes = express.Router();

// Define routes for user-related endpoints
userRoutes.post('/users', UserController.createUser);
userRoutes.get('/users/:id', UserController.getUserById);
userRoutes.put('/users/:id', UserController.updateUser);
userRoutes.delete('/users/:id', UserController.deleteUser);

export default userRoutes;