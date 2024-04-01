import UserService from '../services/userService';
import bcrypt from 'bcrypt';

// Mock bcrypt.hash
jest.mock('bcrypt', () => ({
    hash: jest.fn().mockResolvedValue('hashedPassword'),
  }));
  
enum UserType {
    USER = 'USER',
    ADMIN = 'ADMIN'
}
  
jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn(() => ({
    user: {
      create: jest.fn(),
    },
  })),
}));

jest.mock('../services/userService'); // Mock the entire UserService

describe('User Creation', () => {
    it('should create a new user successfully', async () => {
        const userData = { name: 'John Doe', email: 'john@example.com', password: 'password', type: UserType.USER };
      
        const mockedNewUser = { id: '1', ...userData };
        UserService.createUser = jest.fn().mockResolvedValueOnce(mockedNewUser);
      
        // Call the createUser method
        const newUser = await UserService.createUser(userData);
      
        expect(newUser).toEqual(mockedNewUser);
        expect(bcrypt.hash).toHaveBeenCalledWith(userData.password, 10);
      });
      

  it('should throw an error for invalid email format', async () => {
    const userData = { name: 'John Doe', email: 'invalid-email', password: 'password', type: UserType.USER };

    // Assertions
    await expect(UserService.createUser(userData)).rejects.toThrow('Invalid email format');
    expect(bcrypt.hash).not.toHaveBeenCalled(); // Ensure bcrypt.hash is not called for invalid email
  });
});
