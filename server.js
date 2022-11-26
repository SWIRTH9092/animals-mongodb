//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
require("dotenv").config() // Load ENV Variables
const express = require("express") // bring in express to make our app.
const morgan = require("morgan") //nice logger for our request
const methodOverride = require("method-override") // allows us to override post request from our ejs/forms

const PORT = process.env.PORT || 3001; // in case of env file missing
const app = express()

//-------------------------------------------
// Middleware
//-------------------------------------------

app.use(morgan("tiny")) //logging
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.urlencoded({extended: true})) // parse urlencoded request

app.get('/', (req,res) => {
    res.send(`<h1>get working in main server</h1>`)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------

// require("dotenv").config() // Load ENV Variables
// const express = require("express") // bring in express to make our app.
// const morgan = require("morgan") //nice logger for our request
// const methodOverride = require("method-override") // allows us to override post request from our ejs/forms
// const FruitRouter = require("./controllers/fruits")

// const PORT = process.env.PORT
// const app = express()

//----------------------------------------
//  Middleware
//----------------------------------------
// app.use(morgan("tiny")) //logging
// app.use(methodOverride("_method")) // override for put and delete requests from forms
// app.use(express.urlencoded({extended: true})) // parse urlencoded request