import { Router } from 'express';
import clientController from '../controllers/clientController';

const clientRoutes = Router();

clientRoutes.get('/clients', clientController.getAllClients);
clientRoutes.get('/clients/:id', clientController.getClientById);
clientRoutes.post('/clients', clientController.createClient);
clientRoutes.put('/clients/:id', clientController.updateClient);
clientRoutes.delete('/clients/:id', clientController.deleteClient);

export default clientRoutes;
