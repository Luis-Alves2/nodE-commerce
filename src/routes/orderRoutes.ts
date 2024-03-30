import { Router } from 'express';
import orderController from '../controllers/orderController';

const router = Router();

router.get('/orders', orderController.getAllOrders);
router.get('/orders/:id', orderController.getOrderById);
router.post('/orders', orderController.createOrder);
router.put('/orders/:id', orderController.updateOrder);
router.delete('/orders/:id', orderController.deleteOrder);

export default router;
