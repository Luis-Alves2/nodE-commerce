import { Router } from 'express';
import clientController from '../controllers/clientController';

const router = Router();

router.get('/clients', clientController.getAllClients);
router.get('/clients/:id', clientController.getClientById);
router.post('/clients', clientController.createClient);
router.put('/clients/:id', clientController.updateClient);
router.delete('/clients/:id', clientController.deleteClient);

export default router;
