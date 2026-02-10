import express from "express";
import { createDM, deleteDM, getDM } from "../controller/controller.js";
import AdminAuth  from "../middleware/adminauth.js";

const router = express.Router();


router.post("/contact", createDM);

// ADMIN ROUTES
router.get("/", AdminAuth, getDM);
router.delete("/contact/:id",AdminAuth, deleteDM)

export default router;