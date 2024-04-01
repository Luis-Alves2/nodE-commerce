import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

enum UserType {
    USER = 'USER',
    ADMIN = 'ADMIN'
}

interface CreateUserInput {
    name: string;
    email: string;
    password: string;
    type: UserType;
}

class UserService {

    private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    }

    private isValidName(name: string): boolean {
    const minLength = 2;
    return name.trim().length >= minLength;
    }
    
    private isValidUserType(type: UserType): type is UserType {
    return Object.values(UserType).includes(type);
    }

    async createUser(userData: CreateUserInput): Promise<User> {
        try {
            // Hash the password before storing it in the database
            const hashedPassword = await bcrypt.hash(userData.password, 10);

            if (!this.isValidEmail(userData.email)) {
                throw new Error('Invalid email format');
              }
              if (!this.isValidName(userData.name)) {
                throw new Error('Invalid name format');
              }
            
              if (this.isValidUserType(userData.type)) {
                const newUser = await prisma.user.create({
                  data: {
                    name: userData.name,
                    email: userData.email,
                    password: hashedPassword,
                    type: userData.type,
                  }
                });

                return newUser;

              } else {
                throw new Error('Invalid user type provided');
              }

        } catch (error) {
            console.error('Error creating user:', error);
            throw new Error('Error creating user');
        }
    }

    async updateUser(id: number, userData: any): Promise<any> {
        try {
            // Update the user using Prisma
            const updatedUser = await prisma.user.update({
                where: { id },
                data: {
                    name: userData.name,
                    email: userData.email,
                }
            });

            return updatedUser;
        } catch (error) {
            console.error('Error creating user:', error);
            throw new Error('Error creating user');
        }
    }

    async deleteUser(id: number): Promise<void> {
        try {
            // Delete the user using Prisma
            await prisma.user.delete({
                where: { id },
            });
        } catch (error) {
            console.error('Error creating user:', error);
            throw new Error('Error creating user');
        }
    }

    async getUserById(id: number): Promise<any> {
        try {
            console.log('fetching');
            const user = await prisma.user.findUnique({
                where: { id },
            });

            return user;
        } catch (error) {
            console.error('Error creating user:', error);
            throw new Error('Error creating user');
        }
    }
}

export default new UserService();