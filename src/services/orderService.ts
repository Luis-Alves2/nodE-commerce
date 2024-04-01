import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class OrderService {
  async getAllOrders() {
    return await prisma.order.findMany();
  }

  async getOrderById(orderId: number) {
    return await prisma.order.findUnique({
      where: { id: orderId },
    });
  }

  async createOrder(data: any) {
    return await prisma.order.create({ data });
  }

  async updateOrder(orderId: number, data: any) {
    return await prisma.order.update({
      where: { id: orderId },
      data,
    });
  }

  async deleteOrder(orderId: number) {
    return await prisma.order.delete({
      where: { id: orderId },
    });
  }

  async searchOrders(query: string) {
    return await prisma.order.findMany({
      where: {
        OR: [
          { id: parseInt(query) },
        ],
      },
    });
  }
}

export default new OrderService();
