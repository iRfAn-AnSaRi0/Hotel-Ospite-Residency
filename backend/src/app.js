import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "24kb" }));
app.use(express.urlencoded({ limit: "24kb", extended: true }))

import { bookingRoute } from './route/booking.route.js';

app.use("/api/v1/bookings", bookingRoute)


export { app };