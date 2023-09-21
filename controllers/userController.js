// Labales for api methods

const asyncHandler = require("express-async-handler")
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc Register a user
//@route POST api/users/register
//@access public
const registerUser =  asyncHandler (async (req, res) =>{
    const {username, email, profile, password } = req.body
    if (!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const userAvailable = await User.findOne({ email })
    if (userAvailable){
        res.status(400);
        throw new Error("User is already registered!")
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log("Hashed Passwored => ", hashedPassword);

    const user = await User.create({
        username,
        email,
        profile,
        password:hashedPassword
    });

    // res.json({ message:"Get all contacts"})
    console.log(`User is created => ${user}`)
    if (user){
        res.status(201);
        res.json({
            _id:user.id,
            email:user.email
        })
    } else {
        res.status(400);
        throw new Error("User data is not valid!")
    }
    // res.json({ message : "User Registration Successful."})
})

//@desc Login a user
//@route POST api/users/login
//@access public
const loginUser =  asyncHandler (async (req, res) =>{
    const {email, password} = req.body;
    if (!email || !password){
        res.status(400);
        throw new Error("All fields are manadatory!")
    }
    const user = await User.findOne({ email })
    if (user && (bcrypt.compare(password, user.password))) {
        // if matches provide access token in response 
        const accessToken = jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id
            }
        }, process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn:"15m"
            }
        )
        res.status(200);
        res.json({ accessToken });
    } else {
        res.status(401);
        throw new Error("Email and password do not matches!")
    }
    // res.status(200)
    // // res.json({ message:"Get all contacts"})
    // res.json({ message : "Login the user"})
})

//@desc Current user info
//@route POST api/users/current
//@access private // just like home page if you don't have access token then you cannot access it
const currentUser =  asyncHandler (async (req, res) =>{
    res.status(200)
    // res.json({ message:"Get all contacts"})
    // res.json({ message : "cureent user info"})
    res.json(req.user)
})




module.exports = { registerUser, loginUser, currentUser }