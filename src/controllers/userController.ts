import { Request, Response } from 'express';
import UserService from '../services/userService';

class UserController {
    async createUser(req: Request, res: Response) {
        try {
            const userData = req.body;
            const newUser = await UserService.createUser(userData);
            res.status(201).json(newUser);
        } catch (error) {
            const errorMessage = (error as Error).message;
            res.status(400).json({ message: errorMessage });
        }
    }

    async getUserById(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.id); // Convert to number
            const user = await UserService.getUserById(userId);

            if (!user) {
                res.status(404).json({ message: 'User not found' });
            } else {
                res.json(user);
            }
        } catch (error) {
            const errorMessage = (error as Error).message;
            res.status(400).json({ message: errorMessage });
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.id); // Convert to number
            const userData = req.body;
            const updatedUser = await UserService.updateUser(userId, userData);
            if (!updatedUser) {
                res.status(404).json({ message: 'User not found' });
            } else {
                res.json(updatedUser);
            }
        } catch (error) {
            const errorMessage = (error as Error).message;
            res.status(400).json({ message: errorMessage });
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.id);

            await UserService.deleteUser(userId);

            res.json({ message: 'User deleted successfully' });

          } catch (error) {
            const errorMessage = (error as Error).message;
            res.status(400).json({ message: errorMessage });
        }
    }
}

export default new UserController();