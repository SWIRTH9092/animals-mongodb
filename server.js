//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
require("dotenv").config() // Load ENV Variables
const express = require("express") // bring in express to make our app.
const morgan = require("morgan") //nice logger for our request
const methodOverride = require("method-override"); // allows us to override post request from our ejs/forms
const { default: mongoose } = require("mongoose");

const PORT = process.env.PORT || 3001; // in case of env file missing
const app = express()

//-------------------------------------------
// Middleware
//-------------------------------------------

app.use(morgan("tiny")) //logging
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.urlencoded({extended: true})) // parse urlencoded request

//-------------------------------------------
// Database Connection
//-------------------------------------------
//  Setup inputs for our connection function
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser:  true,
    useUnifiedTopology:  true
}

// Estables Connection
mongoose.connect(DATABASE_URL, CONFIG)

//events for when conneciton opens/disconnects/errors
mongoose.connection
.on("open", () => console.log ("Connected to Mongoose"))
.on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (error) => console.log(error))

//----------------------------------------
//  Animals Model
//----------------------------------------

const { Schema, model } = mongoose  //destructuring , grabbing mode and Schema off mongoose variable

// make animals schema
const  animalsSchema = new Schema({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number,
});

// make animals model
const Animal = model("Animal", animalsSchema)


app.get('/', (req,res) => {
    res.send(`<h1>get working in main server</h1>`)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))