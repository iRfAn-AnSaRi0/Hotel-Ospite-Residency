import { Booking } from "../model/booking.model.js"
import SibApiV3Sdk from 'sib-api-v3-sdk';

const client = SibApiV3Sdk.ApiClient.instance;
client.authentications['api-key'].apiKey = process.env.API_KEY;

const emailsApi = new SibApiV3Sdk.TransactionalEmailsApi();

const creatingBooking = async (req, res) => {
    try {
        const { name, phone, email, checkInDate, checkOutDate, roomType, mealPlan, guests, specialRequest } = req.body;

        if (!name || !phone || !email || !checkInDate || !checkOutDate || !guests) {
            return res.status(400).json({
                success: false,
                message: "All required fields must be filled"
            })
        }

        const booking = await Booking.create({
            name,
            phone,
            email,
            checkInDate,
            checkOutDate,
            roomType,
            mealPlan,
            guests,
            specialRequest
        });

        // send email to admin

        await emailsApi.sendTransacEmail({
            sender: { email: process.env.SENDER_EMAIL, name: "Hotel Booking" },
            to: [{ email: process.env.ADMIN_EMAIL }],
            subject: "New Booking Received 🏨",

            htmlContent: ` 
                <h2>New Booking Details</h2>
                <p><b>Name:</b> ${name}</p>
                <p><b>Phone:</b> ${phone}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Check-In:</b> ${checkInDate}</p>
                <p><b>Check-Out:</b> ${checkOutDate}</p>
                <p><b>Room Type:</b> ${roomType || "N/A"}</p>
                <p><b>Meal Plan:</b> ${mealPlan || "N/A"}</p>
                <p><b>Guests:</b> ${guests}</p>
                <p><b>Special Request:</b> ${specialRequest || "None"}</p>`
        });

        return res.status(201).json({
            success: true,
            message: "Booking created successfully",
            data: booking
        });

    } catch (error) {
        console.error("Email Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export { creatingBooking }