const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
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
    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength: [8, "Password must consists of minimum 8 characters"],
    },
    socketId: {
        type: String,
    }
});

userSchema.methods.generateAuthTokens = function () {
    const token = jwt.sign({_id : this._id}, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this?.password);
}

userSchema.statics.hashPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
