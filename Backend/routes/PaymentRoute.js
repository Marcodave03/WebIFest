import express from "express";
import {
  getPayment,
} from "../controllers/PaymentController.js";

const router = express.Router(); 

router.get("/payment", getPayment);

export default router;
