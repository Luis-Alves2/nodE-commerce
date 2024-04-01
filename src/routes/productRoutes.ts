import { Router } from 'express';
import productController from '../controllers/productController';

const productRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API endpoints for managing products
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Retrieve all products
 *     tags: [Products]
 *     responses:
 *       '200':
 *         description: A list of products
 */
productRoutes.get('/products', productController.getAllProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Retrieve a product by ID
 *     tags: [Products]
 *     responses:
 *       '200':
 *         description: A single product
 */
productRoutes.get('/products/:id', productController.getProductById);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     responses:
 *       '201':
 *         description: Created
 */
productRoutes.post('/products', productController.createProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     responses:
 *       '200':
 *         description: Updated
 */
productRoutes.put('/products/:id', productController.updateProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     responses:
 *       '204':
 *         description: No content
 */
productRoutes.delete('/products/:id', productController.deleteProduct);

/**
 * @swagger
 * /api/products/search:
 *   get:
 *     summary: Search products
 *     tags: [Products]
 *     responses:
 *       '200':
 *         description: A list of products matching the search criteria
 */
productRoutes.get('/products/search', productController.searchProducts);

export default productRoutes;
