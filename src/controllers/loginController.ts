import { Request, Response } from 'express';
import { loginService } from '../services/loginService';

export const loginController = {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      console.log('lets login');
      // Call login service to authenticate user
      const token = await loginService.login(email, password);
      // Send token as response
      res.json({ token });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};