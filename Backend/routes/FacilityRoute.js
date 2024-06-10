import express from "express";
import {
  getFacility,
} from "../controllers/FacilityController.js";

const router = express.Router(); 

router.get("/facility", getFacility);

export default router;
