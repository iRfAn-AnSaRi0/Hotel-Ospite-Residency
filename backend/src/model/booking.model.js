import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        match: [/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"]
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Please enter a valid email"]
    },
    checkInDate: {
        type: Date,
        required: true,
    },
    checkOutDate: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                return value > this.checkInDate;
            },
            message: "Check-out must be after check-in"
        }

    },
    roomType: {
        type: String,
        enum: ["Super Deluxe", "Deluxe", "Standard"],
        default: "Standard"
    },
    mealPlan: {
        type: String,
        enum: ["EP - Room Only", "CP - + Breakfast", "MAP - + Dinner", "AP - All Meal"],
        default: "EP - Room Only"
    },
    guests: {
        type: Number,
        required: true,
        min: 1
    },
    specialRequest: {
        type: String,
        trim: true
    }
}, { timestamps: true })

export const Booking = mongoose.model("Booking", bookingSchema);