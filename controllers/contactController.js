// Labales for api methods
//@desc Get all contacts
//@route Get /api/contacts
//@access public

const asyncHandler = require("express-async-handler")


const getContacts =  asyncHandler (async (req, res) =>{
    res.status(200)
    res.json({ message:"Get all contacts"})
})

const getContact = (req, res) =>{
    res.status(200)
    res.json({ message:`Get contact with id ${req.params.id}`})
}

const createContact = (req, res) =>{
    console.log("The request body is : ", req.body)
    // destructuring body
    const { name, profile, email, contact } = req.body;
    if (!name || !profile || !email || !contact){
        res.status(400) // bad request response
        throw new Error("All fields are mandatory!")
    }
    res.status(200)
    res.json({ message:`Creat contact`})
}

const updateContact = (req, res) =>{
    res.status(200)
    res.json({ message:`Update contact with id ${req.params.id}`})
}

const deleteContact = (req, res) =>{
    res.status(200)
    res.json({ message:`Delete contact with id ${req.params.id}`})
}




module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
}