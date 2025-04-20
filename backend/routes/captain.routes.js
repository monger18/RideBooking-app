const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const captainController = require("../controllers/captain.controllers");
const authMiddleware = require("../middlewares/auth.middleware");


router.post("/register",[
        body("email")?.isEmail().withMessage("Please enter a valid email"),
        body("fullname.firstname").isLength({min: 3}).withMessage("First name must be at least 3 characters"),
        body("password").isLength({min: 8}).withMessage("Password must consists of minimum 8 characters"),
        body("vehicle.color").isLength({min: 3}).withMessage("Color must be at least 3 characters"),
        body("vehicle.plate").isLength({min: 8}).withMessage("Plate must be at least 8 characters"),
        body("vehicle.capacity").isNumeric().withMessage("Capacity must be a number"),
        body("vehicle.vehicleType").isLength({min: 3}).withMessage("Vehicle type must be at least 3 characters"),
    ],
    captainController.registerCaptain
);

router.post("/login", [
        body("email")?.isEmail().withMessage("Please enter a valid email"),
        body("password").isLength({min:8}).withMessage("Password must be at least 8 character")
   ],
   captainController.loginCaptain
)

router.get("/profile", authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get("/logout", authMiddleware.authCaptain, captainController.logoutCaptain);



module.exports = router;