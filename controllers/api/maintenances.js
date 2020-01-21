const Maintenance = require("../../models/maintenance");

module.exports = {
  index
};

async function index(req, res) {
  const maintenances = await Maintenance.find({});
  res.status(200).json(maintenances);
}
