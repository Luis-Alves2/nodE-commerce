import express from 'express';
import { PrismaClient } from '@prisma/client'; // Import PrismaClient from Prisma
import dotenv from 'dotenv'; // Import dotenv

dotenv.config();

const app: express.Application = express();
const PORT = process.env.PORT || 3000;

// Initialize Prisma client
const prisma = new PrismaClient();

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log('Database connection successful');

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // ... Your error handling middleware goes here

    // Import and mount your routes
    //const authRoutes = require('./routes/authRoutes');
    //const productRoutes = require('./routes/productRoutes');
    // ... Add routes for other functionalities

    // Mount routes on the app with a base path (optional)
    //app.use('/api', authRoutes);
    //app.use('/api/products', productRoutes);
    // ... Add route prefixes for other functionalities

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
    // Consider a more robust error handling approach here (e.g., logging)
  }
};

startServer();