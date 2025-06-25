import express from "express";
import {saveAll,getProductById} from "../controller/product.controller.js";
import { bookingPage } from "../controller/product.controller.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();

//http://localhost:3000/product/save-all;

router.post("/save-all",saveAll);

//http://localhost:3000/services/id;
router.get("/:productId",getProductById);

//http://localhost:3000/services/booking/id
router.get("/booking/:productId",auth,bookingPage);

export default router;