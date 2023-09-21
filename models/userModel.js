const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type:String,
        required: [true, "Please add the username"]
    },
    email: {
        type:String,
        required: [true, "Please add the email"],
        unique: [true, "Email is already registered"]
    },
    profile: {
        type:String
    },
    password: {
        type:String,
        required: [true, "Please set the password"]
    }
    }, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema);