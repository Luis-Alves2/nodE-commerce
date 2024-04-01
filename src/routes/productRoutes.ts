import { Router } from 'express';
import productController from '../controllers/productController';

const productRoutes = Router();

productRoutes.get('/products', productController.getAllProducts);
productRoutes.get('/products/:id', productController.getProductById);
productRoutes.post('/products', productController.createProduct);
productRoutes.put('/products/:id', productController.updateProduct);
productRoutes.delete('/products/:id', productController.deleteProduct);

productRoutes.get('/products/search', productController.searchProducts);

export default productRoutes;
