import { Router } from "express";
import * as clientController from "../controllers/Client.controller";
import * as orderController from "../controllers/Order.controller";

const router = Router();

//Clients routes
router.get("/api/client", clientController.getAll);
router.get("/api/client/:id", clientController.getById);
router.post("/api/client", clientController.addClient);
router.delete("/api/client/:id", clientController.deleteClient);
router.put("/api/client/:id", clientController.updateClient);
//Orders routes
router.get("/api/order", orderController.getAll);
router.post("/api/order", orderController.addOrder);
router.put("/api/order/:id", orderController.updateOrder);
router.get("/api/order/unfinished", orderController.getAllNotDone);
router.get("/api/order/:id", orderController.getOrderById);
router.get("/api/order/client/:clientId", orderController.getOrderByClient);

export default router;
