const mongoose = require("mongoose");

const PositionSchema = require("../schema/PositionSchema");

const PositionModel = new mongoose.model("position",PositionSchema);

module.exports = PositionModel;