const express = require("express");
const santriController = require("../controllers/santriController");

const router = express.Router();

router.post("/", santriController.createsantri);
router.get("/", santriController.getsantris);
router.get("/:id", santriController.getsantri);
router.patch("/:id", santriController.updatesantri);
router.delete("/:id", santriController.deletesantri);

module.exports = router;
