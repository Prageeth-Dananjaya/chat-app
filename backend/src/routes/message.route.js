import express from "express";

const router = express.Router();

router.get("/send", (req, res) => {
  res.send("This is the fucking send endpoint");
});

export default router;
