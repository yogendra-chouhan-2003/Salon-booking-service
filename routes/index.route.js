import express from "express";
import {servicesPage,bookingPage,indexPage,signUpPage,signInPage} from "../controller/index.controller.js";



const router = express.Router();

router.get("/",indexPage);
router.get("/services",servicesPage);
router.get("/booking",bookingPage);
router.get("/sign-in",signInPage);
router.get("/sign-up",signUpPage);

export default router;