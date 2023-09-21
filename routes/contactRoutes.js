// Handle contact routes
const express = require("express")
const router = express.Router()

const {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
} = require ("../controllers/contactController");
const validateToken = require("../middlewares/validateTokenHandler");

router.use(validateToken);
// Endpoute /api/contacts/
router.route('/') 
    // .get((req, res) => {
    //         res.status(200)
    //         res.json({
    //             message:"Get all contacts"
    //         }
    //     )
    // });
    .get(getContacts)
    .post(createContact);


router.route('/:id') 
    // .get((req, res) => {
    //         res.status(200)
    //         res.json({
    //             message:"Get all contacts"
    //         }
    //     )
    // });
    .get(getContact)
    .put(updateContact)
    .delete(deleteContact) 

// router.route('/') 
//     // .post((req, res) => {
//     //         res.status(200)
//     //         res.json({
//     //             message:"post contact"
//     //         }
//     //     )
//     // });
//     .post(createContact);

// router.route('/:id') 
//     // .put((req, res) => {
//     //         res.status(200)
//     //         res.json({
//     //             message:"update contact"
//     //         }
//     //     )
//     // });
//     .put(updateContact);

// router.route('/:id') 
//     // .delete((req, res) => {
//     //         res.status(200)
//     //         res.json({
//     //             message:"delete contact"
//     //         }
//     //     )
//     // });
//     .delete(deleteContact);



module.exports = router;