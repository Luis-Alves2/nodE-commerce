import { Request, Response } from 'express';
import orderItemService from '../services/orderitemService';

import { createOrderItemSchema, updateOrderItemSchema } from '../middleware/validation/orderitemvalidation'

class OrderItemController {
  async getAllOrderItems(req: Request, res: Response) {
    try {
      const orderItems = await orderItemService.getAllOrderItems();
      res.json(orderItems);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }

  async getOrderItemById(req: Request, res: Response) {
    const orderItemId = parseInt(req.params.id);
    try {
      const orderItem = await orderItemService.getOrderItemById(orderItemId);
      res.json(orderItem);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }

  async createOrderItem(req: Request, res: Response) {
    const data = req.body;
    try {
      await createOrderItemSchema.validate(data);
      const newOrderItem = await orderItemService.createOrderItem(data);
      res.status(201).json(newOrderItem);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }

  async updateOrderItem(req: Request, res: Response) {
    const orderItemId = parseInt(req.params.id);
    const data = req.body;
    try {
      await updateOrderItemSchema.validate(data);
      const updatedOrderItem = await orderItemService.updateOrderItem(orderItemId, data);
      res.json(updatedOrderItem);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }

  async deleteOrderItem(req: Request, res: Response) {
    const orderItemId = parseInt(req.params.id);
    try {
      await orderItemService.deleteOrderItem(orderItemId);
      res.status(204).end();
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }
}

export default new OrderItemController();
