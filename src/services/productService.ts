import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ProductService {
  async getAllProducts() {
    return await prisma.product.findMany();
  }

  async getProductById(productId: number) {
    return await prisma.product.findUnique({
      where: { id: productId },
    });
  }

  async createProduct(data: any) {
    return await prisma.product.create({ data });
  }

  async updateProduct(productId: number, data: any) {
    return await prisma.product.update({
      where: { id: productId },
      data,
    });
  }

  async deleteProduct(productId: number) {
    return await prisma.product.delete({
      where: { id: productId },
    });
  }
}

export default new ProductService();
