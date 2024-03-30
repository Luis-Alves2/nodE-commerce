import { Request, Response } from 'express';
import clientService from '../services/clientService';

class ClientController {
  async getAllClients(req: Request, res: Response) {
    try {
      const clients = await clientService.getAllClients();
      res.json(clients);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }

  async getClientById(req: Request, res: Response) {
    const clientId = parseInt(req.params.id);
    try {
      const client = await clientService.getClientById(clientId);
      res.json(client);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }

  async createClient(req: Request, res: Response) {
    const data = req.body;
    try {
      const newClient = await clientService.createClient(data);
      res.status(201).json(newClient);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }

  async updateClient(req: Request, res: Response) {
    const clientId = parseInt(req.params.id);
    const data = req.body;
    try {
      const updatedClient = await clientService.updateClient(clientId, data);
      res.json(updatedClient);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }

  async deleteClient(req: Request, res: Response) {
    const clientId = parseInt(req.params.id);
    try {
      await clientService.deleteClient(clientId);
      res.status(204).end();
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }
}

export default new ClientController();
