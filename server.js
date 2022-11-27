//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
require("dotenv").config() // Load ENV Variables
const express = require("express") // bring in express to make our app.
const morgan = require("morgan") //nice logger for our request
const methodOverride = require("method-override"); // allows us to override post request from our ejs/forms
const AnimalRouter = require("./controllers/animal");
const UserRouter = require("./controllers/user");
const PORT = process.env.PORT || 3001; // in case of env file missing
const session = require('express-session');
const MongoStore = require('connect-mongo');

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
app.use(session ({ 
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    saveUninitialized: true,
    resave: false,
}))
app.use("/animals", AnimalRouter)  // for the animal collection
app.use("/user", UserRouter);      // to the user collection

//-------------------------------------------
// routes
//-------------------------------------------
app.get('/', (req,res) => {
    res.render("index.ejs")
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))