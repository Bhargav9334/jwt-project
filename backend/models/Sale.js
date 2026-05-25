const mongoose = require("mongoose");

const saleSchema =
  new mongoose.Schema({
    category: String,

    amount: Number,

    status: String
  });

module.exports =
  mongoose.model(
    "Sale",
    saleSchema
  );