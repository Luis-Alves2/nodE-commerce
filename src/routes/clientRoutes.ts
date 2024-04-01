import { Router } from 'express';
import clientController from '../controllers/clientController';

const clientRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Clients
 *   description: API endpoints for managing clients
 */

/**
 * @swagger
 * /api/clients:
 *   get:
 *     summary: Retrieve all clients
 *     tags: [Clients]
 *     responses:
 *       '200':
 *         description: A list of clients
 */
clientRoutes.get('/clients', clientController.getAllClients);

/**
 * @swagger
 * /api/clients/{id}:
 *   get:
 *     summary: Retrieve a client by ID
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the client to retrieve
 *     responses:
 *       '200':
 *         description: A single client
 */
clientRoutes.get('/clients/:id', clientController.getClientById);

/**
 * @swagger
 * /api/clients:
 *   post:
 *     summary: Create a new client
 *     tags: [Clients]
 *     responses:
 *       '201':
 *         description: Created
 */
clientRoutes.post('/clients', clientController.createClient);

/**
 * @swagger
 * /api/clients/{id}:
 *   put:
 *     summary: Update a client by ID
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the client to update
 *     responses:
 *       '200':
 *         description: Updated
 */
clientRoutes.put('/clients/:id', clientController.updateClient);

/**
 * @swagger
 * /api/clients/{id}:
 *   delete:
 *     summary: Delete a client by ID
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the client to delete
 *     responses:
 *       '204':
 *         description: No content
 */
clientRoutes.delete('/clients/:id', clientController.deleteClient);

export default clientRoutes;
