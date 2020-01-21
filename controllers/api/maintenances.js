const Maintenance = require("../../models/maintenance");
const User = require("../../models/user");

module.exports = {
  index,
  show,
  create,
  deleteOne,
  update
};

async function index(req, res, next) {
  const maintenances = await User.findById(req.user._id).populate(
    "maintenances"
  );
  res.status(200).json(maintenances);
}

async function show(req, res) {
  const maintenance = await Maintenance.findById(req.params.id);
  res.status(200).json(maintenance);
}

async function create(req, res) {
  const maintenance = await Maintenance.create(req.body);
  res.status(201).json(maintenance);
}

async function deleteOne(req, res) {
  const deletedMaintenance = await Maintenance.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedMaintenance);
}

async function update(req, res) {
  const updatedMaintenance = await Maintenance.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true
    }
  );
  res.status(200).json(updatedMaintenance);
}
