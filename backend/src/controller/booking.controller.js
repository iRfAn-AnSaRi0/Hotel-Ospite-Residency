import { Booking } from "../model/booking.model.js"

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
        })

        return res.status(201).json({
            success: true,
            message: "Booking created successfully",
            data: booking
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export { creatingBooking }