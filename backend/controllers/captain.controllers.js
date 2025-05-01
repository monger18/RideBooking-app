const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service"); 
const { validationResult } = require("express-validator");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors?.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {fullname, email, password, vehicle} = req?.body;   

    const isCaptain = await captainModel?.findOne({email});

    if(isCaptain) {
        return res.status(400).json({message: "Captain already exists"});
    }

    const hashPassword = await captainModel?.hashPassword(password);

    const captain = await captainService?.createCaptain({
        firstname: fullname?.firstname,
        lastname: fullname?.lastname,
        email,
        password: hashPassword,
        color: vehicle?.color,
        plate: vehicle?.plate,
        capacity: vehicle?.capacity,
        vehicleType: vehicle?.vehicleType,
    })


    const token = captain?.generateAuthTokens();

    res.status(201).json({token, captain});
};

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req?.body;

    const captain = await captainModel?.findOne({email}).select("+password");

    if(!captain) {
        return res.status(400).json({message: "Captain not exists"});
    }

    const isMatch = await captain.comparePassword(password);


    if(!isMatch) {
        return res.status(400).json({message: "Invalid email and password"});
    }

    const token = captain.generateAuthTokens();

    res.cookie("captain_Token", token);

    res.status(200).json({token, captain});
};

module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json({captain: req?.captain});
}

module.exports.logoutCaptain = async (req, res, next) => {
    res.clearCookie("captain_token");

    const token = req?.cookies?.captain_token || req?.headers?.authorization?.split(" ")[1];
    
    await blacklistTokenModel.create({token});
    
    res.status(200).json({message: "Logout successfully"});
}