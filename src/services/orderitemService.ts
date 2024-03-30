import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class OrderItemService {
  async getAllOrderItems() {
    return await prisma.orderItem.findMany();
  }

  async getOrderItemById(orderItemId: number) {
    return await prisma.orderItem.findUnique({
      where: { id: orderItemId },
    });
  }

  async createOrderItem(data: any) {
    return await prisma.orderItem.create({ data });
  }

  async updateOrderItem(orderItemId: number, data: any) {
    return await prisma.orderItem.update({
      where: { id: orderItemId },
      data,
    });
  }

  async deleteOrderItem(orderItemId: number) {
    return await prisma.orderItem.delete({
      where: { id: orderItemId },
    });
  }
}

export default new OrderItemService();
