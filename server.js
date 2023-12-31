const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const connectDb = require("./config/dbConnection");
const app = express()
connectDb()
require("dotenv").config(); 
const PORT = process.env.PORT || 5000;


// ENDPOINTS
// app.get('/api/contacts', (req, res)=>{
//     res.status(200);
//     res.json({
//         message:"Get all contacts"
//     })
// });

//middlewares
app.use(express.json());
app.use('/api/contacts', require("./routes/contactRoutes"));
app.use('/api/users', require("./routes/userRoutes"));
app.use(errorHandler);


app.listen(PORT, ()=>{
    console.log(`Server running on the port ${PORT}`)
})