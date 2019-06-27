const mongoose = require("mongoose");

const installationSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  dataProvider: { type: String, required: true },
  systemSize: { type: String, required: true },
  installationDate: { type: String, required: true },
  zipCode: { type: String, required: true },
  state: { type: String, required: true },
  cost: { type: Number, required: true }
});

module.exports = mongoose.model("Installation", installationSchema);
