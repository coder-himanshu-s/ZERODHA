const mongoose = require("mongoose");

const OrderSchema = require("../schema/OrderSchema");

const OrderModel = new mongoose.model("order",OrderSchema);

module.exports = OrderModel;