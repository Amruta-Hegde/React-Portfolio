import ErrorHandler from "../utils/error.js";
import { Form } from "../models/form.model.js";

export const sendFormData = async (req, res, next) => {
    const { name, email, phone, company, message } = req.body;
    if (!name ||!email ||!phone ||!message) {
        return next(
            new ErrorHandler("Please provide all the required fields", 400)
        );
    }
    try {
        await Form.create({
            name,
            email,
            phone,
            company,
            message,
        });
        res.status(200).json({
            success: true,
            message: "Form data sent successfully",
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const ValidationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(ValidationErrors.join(" , "), 400));
        }
        return next(error);
    }
};