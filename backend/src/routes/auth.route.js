import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("Signup endpoint");
});

router.get("/signout", (req, res) => {
  res.send("fucking signout endpoint");
});

router.get("/login", (req, res) => {
  res.send("login endpoint");
});

export default router;
