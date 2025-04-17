const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const userController = require("../controllers/user.controllers");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/register",[
        body("email")?.isEmail().withMessage("Please enter a valid email"),
        body("fullname.firstname").isLength({min: 3}).withMessage("First name must be at least 3 characters"),
        body("password").isLength({min: 8}).withMessage("Password must consists of minimum 8 characters"),
   ],
   userController.registerUser
);

router.post("/login",[
        body("email")?.isEmail().withMessage("Please enter a valid email"),
        body("password").isLength({min: 8}).withMessage("Password must consists of minimum 8 characters"),
    ],
    userController.loginUser
);

router.get("/profile", authMiddleware.authUser, userController.getUserProfile);


router.get("/logout", authMiddleware.authUser, userController.logoutUser);




module.exports = router;