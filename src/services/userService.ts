import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcrypt';


const prisma = new PrismaClient();

enum UserType {
    USER = 'USER',
    ADMIN = 'ADMIN'
}


/**
 * @typedef {Object} CreateUserInput
 * @property {string} name - The name of the user
 * @property {string} email - The email of the user
 * @property {string} password - The password of the user
 * @property {string} type - The type of the user (USER or ADMIN)
 */
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


/**
     * Creates a new user.
     * 
     * @param {CreateUserInput} userData - The user data to create.
     * @returns {Promise<User>} The created user.
     * @throws {Error} If there is an error creating the user.
     */
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

/**
     * Updates an existing user.
     * 
     * @param {number} id - The ID of the user to update.
     * @param {object} userData - The updated user data.
     * @returns {Promise<User>} The updated user.
     * @throws {Error} If there is an error updating the user.
     */
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

/**
     * Deletes a user by ID.
     * 
     * @param {number} id - The ID of the user to delete.
     * @returns {Promise<void>} A promise that resolves once the user is deleted.
     * @throws {Error} If there is an error deleting the user.
     */
    async deleteUser(id: number): Promise<void> {
        try {
            
            await prisma.user.delete({
                where: { id },
            });
        } catch (error) {
            console.error('Error creating user:', error);
            throw new Error('Error creating user');
        }
    }

        /**
     * Retrieves a user by ID.
     * 
     * @param {number} id - The ID of the user to retrieve.
     * @returns {Promise<User>} The retrieved user.
     * @throws {Error} If there is an error retrieving the user.
     */
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