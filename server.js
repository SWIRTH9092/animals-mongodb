//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
require("dotenv").config() // Load ENV Variables
const express = require("express") // bring in express to make our app.
const morgan = require("morgan") //nice logger for our request
const methodOverride = require("method-override"); // allows us to override post request from our ejs/forms
// const { default: mongoose } = require("mongoose");
// const Animal = require("./models/animal")
const AnimalRouter = require("./controllers/animal")
const PORT = process.env.PORT || 3001; // in case of env file missing

//-------------------------------------------
// create our express application Route
//-------------------------------------------
const app = express()

//-------------------------------------------
// Middleware
//-------------------------------------------

app.use(morgan("tiny")) //logging
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.urlencoded({extended: true})) // parse urlencoded request
app.use(express.static("public")) // serve files from public statically
app.use("/animals", AnimalRouter)

//-------------------------------------------
// routes
//-------------------------------------------
app.get('/', (req,res) => {
    res.redirect("/animals")
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))