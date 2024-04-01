import express from 'express';
import { PrismaClient } from '@prisma/client'; // Import PrismaClient from Prisma
import dotenv from 'dotenv'; // Import dotenv

import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';
import orderItemRoutes from './routes/orderitemRoutes';
import clientRoutes from './routes/clientRoutes';
import userRoutes from './routes/userRoutes';

import loginRoutes from './routes/loginRoutes';
import { authenticate, authorize } from './middleware/auth';

const bodyParser = require('body-parser');

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

    app.use(bodyParser.json());
    app.use('/api', loginRoutes);
    //app.use('*', authenticate,authorize);
    app.use('/api', authenticate,authorize,productRoutes);
    app.use('/api', authenticate,authorize,orderRoutes);
    app.use('/api', authenticate,authorize,orderItemRoutes);
    app.use('/api', authenticate,authorize,clientRoutes);
    app.use('/api', authenticate,authorize,userRoutes);

    // Start the server
    const server = app.listen(PORT, () => {
      const address = server.address();
      console.log(address)
      if (typeof address === 'string') {
          console.log(`Server running at ${address}`);
      } else {
          console.log(address)
          //console.log(`Server running at http://${address.address}:${address.port}`);
      }
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

startServer();