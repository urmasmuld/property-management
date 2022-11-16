const mongoose = require("mongoose");

const propertiesSchema = new mongoose.Schema({
  createdAt: { type: String, default: null },
  name: { type: String, default: null },
  location: { type: String, unique: true },
});

module.exports = mongoose.model("properties", propertiesSchema);
