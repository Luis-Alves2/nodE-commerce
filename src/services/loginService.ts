import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const secret = process.env.JWT_SECRET || '';

export const loginService = {
  async login(email: string, password: string): Promise<string> {

    console.log("logging in");
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || user.password !== password) {
      throw new Error('Invalid credentials');
    }
    
    const token = jwt.sign({ userId: user.id, role: user.type },secret, { expiresIn: '1h' }); // Add role to answer token
    return token;
  },
};
