import { Router } from 'express';
import orderController from '../controllers/orderController';

const orderRoutes = Router();

orderRoutes.get('/orders', orderController.getAllOrders);
orderRoutes.get('/orders/:id', orderController.getOrderById);
orderRoutes.post('/orders', orderController.createOrder);
orderRoutes.put('/orders/:id', orderController.updateOrder);
orderRoutes.delete('/orders/:id', orderController.deleteOrder);

orderRoutes.get('/orders/search', orderController.searchOrders);

export default orderRoutes;
