// Labales for api methods
//@desc Get all contacts
//@route Get /api/contacts
//@access public

const asyncHandler = require("express-async-handler")

const Contact = require("../models/contactModel")


const getContacts =  asyncHandler (async (req, res) =>{
    const contacts = await Contact.find();
    res.status(200)
    // res.json({ message:"Get all contacts"})
    res.json(contacts)
})

const getContact = asyncHandler(async (req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("Contact not found!");
    }
    res.status(200)
    res.json(contact)
})

const createContact = asyncHandler (async (req, res) =>{
    console.log("The request body is : ", req.body)
    // destructuring body
    const { name, profile, email, contact } = req.body;
    if (!name || !profile || !email || !contact){
        res.status(400) // bad request response
        throw new Error("All fields are mandatory!")
    }
    // res.status(200)
    // res.json({ message:`Creat contact`})
    const contactObj =  await Contact.create({
        name,
        profile,
        email,
        contact
    });
    res.status(201)
    // res.json({ message:"Get all contacts"})
    res.json(contactObj)
})

const updateContact = asyncHandler(async (req, res) =>{

    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("Contact not found!");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200)
    res.json( updatedContact )
})

const deleteContact = asyncHandler (async (req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if (!contact){
        res.status(404);
        throw new Error("Contact not found!");
    }
    await Contact.deleteOne();
    res.status(200)
    res.json(contact)
});




module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
}