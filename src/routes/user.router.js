import express from "express";
import { UserController } from "../controller/controllers.js";

const router = express.Router();

router.route("/").get(UserController.UCDetails);

export default router;
