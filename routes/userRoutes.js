const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userController");
const validateToken = require("../middlewares/validateTokenHandler");

const router = express.Router()

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken ,currentUser);

// router.post("/login", (req, res)=>{
//     res.status(200);
//     res.json({ message: "Login the user"})
// })

// router.post("/current", (req, res)=>{
//     res.status(200);
//     res.json({ message: "Current user information "})
// })


module.exports = router