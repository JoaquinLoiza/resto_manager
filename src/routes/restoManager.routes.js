import { Router } from 'express';
import * as clientController from '../controllers/Client.controller';

const router = Router();

//Clients routes
router.get('/api/client', clientController.getAll);
router.get('/api/client/:id', clientController.getById);
router.post('/api/client', clientController.addClient);
router.delete('/api/client/:id', clientController.deleteClient);
router.put('/api/client/:id', clientController.updateClient);
//Orders routes

export default router;