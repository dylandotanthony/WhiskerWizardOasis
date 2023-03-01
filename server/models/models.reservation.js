const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required!!!"]
    },
    lastName: {
        type: String,
        required: [true, "Last name must be at least 2 characters"]
    },
    petName: {
        type: String,
        required: [true, "Pet name must be at least 2 characters"]
    },
    email: {
        type: String,
        required: [true, "An e-mail is required"],
    },
    phoneNumber: {
        type: Number,
        required: [true, "A phone number is required!!!"]
    },
    petType: {
        type: String,
        required: [true, "A pet type is required!!!"],
    },
    date: {
        type: String,
        required: [true, "A D=date is required!!!"],
    },
    service: {
        type: String,
        required: [true, "A service is required!!!"],
    },
}, { timestamps: true })

module.exports = mongoose.model('Reservation', ReservationSchema)