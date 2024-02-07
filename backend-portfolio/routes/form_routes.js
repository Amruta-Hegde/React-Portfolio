import express from "express";
import {sendFormData} from "../controllers/form.controller.js";

const router = express.Router();

router.post("/send",sendFormData);

export default router;