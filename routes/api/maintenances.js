var express = require("express");
var router = express.Router();
var maintenancesCtrl = require("../../controllers/api/maintenances");

/* GET /api/puppies */
router.get("/", maintenancesCtrl.index);
router.get("/:id", maintenancesCtrl.show);
router.post("/", maintenancesCtrl.create);
router.delete("/:id", maintenancesCtrl.delete);
// router.put("/:id", maintenancesCtrl.update);

module.exports = router;
