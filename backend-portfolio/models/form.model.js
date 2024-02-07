import mongoose from "mongoose";
import validator from "validator";

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        unique: true,
    },
    email: {
        type: String,
        required: [true,'Please enter your email'],
        validate: [validator.isEmail, "Please provide a valid email address"],
        unique: true,
    },
    phone: {
        type: Number,
        required: [true, 'Please enter your phone number'],
        unique: true,
        minLength: [10, "Phone number must be at least 10 characters long"],
        maxLength: [10, "Phone number cannot exceed 10 characters"],
    },
    company: {
        type: String
    },
    message: {
        type: String,
        required: [true, 'Kindly post your message'],
    },
}, { timestamps: true });

export const Form = mongoose.model("Form", formSchema);