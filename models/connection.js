//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
require("dotenv").config() // Load ENV Variables
const mongoose = require("mongoose");

//-------------------------------------------
// Database Connection
//-------------------------------------------
//  Setup inputs for our connection function
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser:  true,
    useUnifiedTopology:  true
}

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG)

//events for when conneciton opens/disconnects/errors
mongoose.connection
.on("open", () => console.log ("Connected to Mongoose"))
.on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (error) => console.log(error))

//-------------------------------------------
// Export the Connection
//-------------------------------------------
module.exports = mongoose