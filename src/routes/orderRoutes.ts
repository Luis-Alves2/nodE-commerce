import { Router } from 'express';
import orderController from '../controllers/orderController';

const orderRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: API endpoints for managing orders
 */

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Retrieve all orders
 *     tags: [Orders]
 *     responses:
 *       '200':
 *         description: A list of orders
 */
orderRoutes.get('/orders', orderController.getAllOrders);

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Retrieve an order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the order to retrieve
 *     responses:
 *       '200':
 *         description: A single order
 */
orderRoutes.get('/orders/:id', orderController.getOrderById);

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     responses:
 *       '201':
 *         description: Created
 */
orderRoutes.post('/orders', orderController.createOrder);

/**
 * @swagger
 * /api/orders/{id}:
 *   put:
 *     summary: Update an order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the order to update
 *     responses:
 *       '200':
 *         description: Updated
 */
orderRoutes.put('/orders/:id', orderController.updateOrder);

/**
 * @swagger
 * /api/orders/{id}:
 *   delete:
 *     summary: Delete an order by ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the order to delete
 *     responses:
 *       '204':
 *         description: No content
 */
orderRoutes.delete('/orders/:id', orderController.deleteOrder);

/**
 * @swagger
 * /api/orders/search:
 *   get:
 *     summary: Search orders
 *     tags: [Orders]
 *     responses:
 *       '200':
 *         description: A list of orders matching the search criteria
 */
orderRoutes.get('/orders/search', orderController.searchOrders);

export default orderRoutes;
