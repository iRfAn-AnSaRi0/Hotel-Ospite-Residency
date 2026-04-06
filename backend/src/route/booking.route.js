import { Router } from "express"
import { creatingBooking } from "../controller/booking.controller.js"


const bookingRoute = Router();

bookingRoute.post("/", creatingBooking);

export { bookingRoute }