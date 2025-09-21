import express from "express";
import { signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.get("/signout", (req, res) => {
  res.send("fucking signout endpoint");
});

router.get("/login", (req, res) => {
  res.send("login endpoint");
});

export default router;
