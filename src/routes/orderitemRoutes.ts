import { Router } from 'express';
import orderItemController from '../controllers/orderitemController';

const orderItemRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: OrderItems
 *   description: API endpoints for managing order items
 */

/**
 * @swagger
 * /api/orderItems:
 *   get:
 *     summary: Retrieve all order items
 *     tags: [OrderItems]
 *     responses:
 *       '200':
 *         description: A list of order items
 */
orderItemRoutes.get('/orderItems', orderItemController.getAllOrderItems);

/**
 * @swagger
 * /api/orderItems/{id}:
 *   get:
 *     summary: Retrieve an order item by ID
 *     tags: [OrderItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the order item to retrieve
 *     responses:
 *       '200':
 *         description: A single order item
 */
orderItemRoutes.get('/orderItems/:id', orderItemController.getOrderItemById);

/**
 * @swagger
 * /api/orderItems:
 *   post:
 *     summary: Create a new order item
 *     tags: [OrderItems]
 *     responses:
 *       '201':
 *         description: Created
 */
orderItemRoutes.post('/orderItems', orderItemController.createOrderItem);

/**
 * @swagger
 * /api/orderItems/{id}:
 *   put:
 *     summary: Update an order item by ID
 *     tags: [OrderItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the order item to update
 *     responses:
 *       '200':
 *         description: Updated
 */
orderItemRoutes.put('/orderItems/:id', orderItemController.updateOrderItem);

/**
 * @swagger
 * /api/orderItems/{id}:
 *   delete:
 *     summary: Delete an order item by ID
 *     tags: [OrderItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the order item to delete
 *     responses:
 *       '204':
 *         description: No content
 */
orderItemRoutes.delete('/orderItems/:id', orderItemController.deleteOrderItem);

/**
 * @swagger
 * /api/orderItems/search:
 *   get:
 *     summary: Search order items
 *     tags: [OrderItems]
 *     responses:
 *       '200':
 *         description: A list of order items matching the search criteria
 */
orderItemRoutes.get('/orderItems/search', orderItemController.searchOrderItems);

export default orderItemRoutes;
