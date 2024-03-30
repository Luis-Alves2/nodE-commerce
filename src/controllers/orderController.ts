import { Request, Response } from 'express';
import orderService from '../services/orderService';

class OrderController {
  async getAllOrders(req: Request, res: Response) {
    try {
      const orders = await orderService.getAllOrders();
      res.json(orders);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }

  async getOrderById(req: Request, res: Response) {
    const orderId = parseInt(req.params.id);
    try {
      const order = await orderService.getOrderById(orderId);
      res.json(order);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }

  async createOrder(req: Request, res: Response) {
    const data = req.body;
    try {
      const newOrder = await orderService.createOrder(data);
      res.status(201).json(newOrder);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }

  async updateOrder(req: Request, res: Response) {
    const orderId = parseInt(req.params.id);
    const data = req.body;
    try {
      const updatedOrder = await orderService.updateOrder(orderId, data);
      res.json(updatedOrder);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }

  async deleteOrder(req: Request, res: Response) {
    const orderId = parseInt(req.params.id);
    try {
      await orderService.deleteOrder(orderId);
      res.status(204).end();
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }
}

export default new OrderController();
