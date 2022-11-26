//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------

const express = require("express") // bring in express to make our app.
const Animal = require("../models/animal")

//-------------------------------------------
// Create Router
//-------------------------------------------

const router = express.Router()  // router will have all routes attached to it.

//-------------------------------------------
// Routes
//-------------------------------------------

router.get("/", (req, res) => {
    Animal.find({})
        .then((animals) => {
            res.render("animals/index.ejs", { animals } )
        })
        .catch(err => console.log(err))
})

//-------------------------------------------
// Routes
//-------------------------------------------
module.exports = router