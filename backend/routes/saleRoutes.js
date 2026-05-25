const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const authorize = require("../middleware/roleMiddleware");

const {
  getSalesReport
} = require("../controllers/saleController");

router.get(
  "/report",
  protect,
  authorize("admin"),
  getSalesReport
);

module.exports = router;