import { Router } from 'express';
import orderItemController from '../controllers/orderitemController';

const orderItemRoutes = Router();

orderItemRoutes.get('/orderItems', orderItemController.getAllOrderItems);
orderItemRoutes.get('/orderItems/:id', orderItemController.getOrderItemById);
orderItemRoutes.post('/orderItems', orderItemController.createOrderItem);
orderItemRoutes.put('/orderItems/:id', orderItemController.updateOrderItem);
orderItemRoutes.delete('/orderItems/:id', orderItemController.deleteOrderItem);

export default orderItemRoutes;
