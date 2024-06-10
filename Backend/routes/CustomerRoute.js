import express from "express";
import {
  getCustomer,
  createCustomer
} from "../controllers/CustomerController.js";

const router = express.Router(); 

router.get("/customer", getCustomer);
router.post("/customer",createCustomer);

export default router;
