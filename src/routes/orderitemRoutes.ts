import { Router } from 'express';
import orderItemController from '../controllers/orderitemController';

const router = Router();

router.get('/orderItems', orderItemController.getAllOrderItems);
router.get('/orderItems/:id', orderItemController.getOrderItemById);
router.post('/orderItems', orderItemController.createOrderItem);
router.put('/orderItems/:id', orderItemController.updateOrderItem);
router.delete('/orderItems/:id', orderItemController.deleteOrderItem);

export default router;
