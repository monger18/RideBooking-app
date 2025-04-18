const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
          type: String,
          required: true,
          minlength: [3, 'First name must be at least 3 characters'],
        },
        lastname: {
            type: String,
            minlength: [3, "Last name must be at least 3 characters"],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/.+\@.+\..+/, "Please enter a valid email"],
    },
    password:{
        type: String,
        required: true,
        select: false,
        minlength: [8, "Password must consists of minimum 8 characters"],
    },

    socketId: {
        type: String,
    },
    
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive"
    },

    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, "Color must be at least 3 characters"],
        },
        plate: {
            type: String,
            required: true,
            unique: true,
            minlength: [8, "Plate must be at least 3 characters"],
        },
        capacity: {
            type: Number,
            required: true,
            minlength: [1, "Capacity must be at least 1"],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ["car", "motorcycle", "auto"],
        }
    },
    
    location: {
        lat: {
            type:Number,
        },
        lng: {
            type:Number,
        }
    }
});

captainSchema.methods.generateAuthTokens = function () {
  const token = jwt.sign({_id : this._id}, process.env.JWT_SECRET, {expiresIn: "24h"});
  return token;
};

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this?.password);
};

captainSchema.statics.hashPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}


const captainModel = mongoose.model("captain", captainSchema);
module.exports = captainModel;