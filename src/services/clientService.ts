import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ClientService {
  async getAllClients() {
    return await prisma.client.findMany();
  }

  async getClientById(clientId: number) {
    return await prisma.client.findUnique({
      where: { id: clientId },
    });
  }

  async createClient(data: any) {
    return await prisma.client.create({ data });
  }

  async updateClient(clientId: number, data: any) {
    return await prisma.client.update({
      where: { id: clientId },
      data,
    });
  }

  async deleteClient(clientId: number) {
    return await prisma.client.delete({
      where: { id: clientId },
    });
  }
}

export default new ClientService();
