const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required!!!"],
        minlength: [2, "First name must be at least 2 characters"]
    },
    lastName: {
        type: String,
        required: [true, "Last name must be at least 2 characters"],
        minlength: [2, "First name must be at least 2 characters"]
    },
    petName: {
        type: String,
        required: [true, "Pet name must be at least 2 characters"],
        minlength: [2, "First name must be at least 2 characters"]
    },
    email: {
        type: String,
        required: [true, "An e-mail is required"],
    },
    phoneNumber: {
        type: Number,
        required: [true, "A phone number is required!!!"],
    },
    petType: {
        type: String,
        required: [true, "A pet type is required!!!"],
    },
    date: {
        type: String,
        required: [true, "A pet type is required!!!"],
    },
    service: {
        type: String,
        required: [true, "A pet type is required!!!"],
    },
    groomer: {
        type: String,
        required: [true, "A pet type is required!!!"],
    },
}, { timestamps: true })

module.exports = mongoose.model('Reservation', ReservationSchema)