const express = require("express");
const router = express.Router();

const {
    createOrder,
    getOrders,
    updateStatus,
    getDashboard
} = require("../controllers/orderController.js");
  
  
router.post("/order", createOrder);
router.get("/orders", getOrders);
router.patch("/order/:id", updateStatus);
router.get("/dashboard", getDashboard);
module.exports = router;