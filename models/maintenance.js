const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let maintenanceSchema = new Schema(
  {
    name: String,
    description: String,
    time: Number,
    location: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Maintenance", maintenanceSchema);
