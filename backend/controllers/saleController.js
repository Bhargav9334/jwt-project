const Sale = require("../models/Sale");

const getSalesReport = async (
  req,
  res
) => {
  try {
    const report =
      await Sale.aggregate([
        {
          $match: {
            status: "shipped"
          }
        },
        {
          $group: {
            _id: "$category",

            totalSales: {
              $sum: "$amount"
            }
          }
        },
        {
          $sort: {
            totalSales: -1
          }
        }
      ]);

    res.json(report);

  } catch (error) {
    res.status(500).json({
      message: "Server Error"
    });
  }
};

module.exports = {
  getSalesReport
};