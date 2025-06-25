import express from "express";
import {signUp,signIn,SignOut,dashboardPage} from "../controller/user.controller.js"
import {booking,cancelBooking} from "../controller/booking.controller.js";
const router = express.Router();

//http://localhost:3000/user/sign-up


router.post("/signup",signUp);
router.post("/signin",signIn);
router.get("/sign-out",SignOut);
router.post("/booking",booking);
router.get("/dashboard", dashboardPage);

router.post("/booking/cancel/:bookingId", cancelBooking);


export default router;