const controller = require("../controller/controller");
const express = require("express");
const router = express.Router();    
const {validation} = require("../middlewares/validation/auth.validation");


router.post("/register", validation, controller.postPatientData);
router.get("/:hospitalId", controller.getPsychiatristsCount);



module.exports = router