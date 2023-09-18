const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
        name:{
            type:String,
            required: [true, "Please add the contact name"]
        },
        profile:{
            type:String,
            required: [true, "Please add your profile role"]
        },
        email:{
            type:String,
            required: [true, "Please add the email"]
        },
        contact:{
            type:String,
            required: [true, "Please add the contact number"]
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Contact", contactSchema);