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
//  get the index
router.get("/", (req, res) => {
    Animal.find({})
        .then((animals) => {
            res.render("animals/index.ejs", { animals } )
        })
        .catch(err => console.log(err))
})

// new route
router.get("/new", (req, res) => {
    res.render("animals/new.ejs")
})


// create route
router.post("/", (req, res) => {
    // check if the readyToEat property should be true or false
    req.body.extinct = req.body.extinct === "on" ? true : false
    req.body.lifeExpectancy = parseInt(req.body.lifeExpectancy)
    console.log("req body:", req.body)
    // create the new animal
    Animal.create(req.body, (err, animal) => {
        // redirect the user back to the main species page after species created
        res.redirect("/animals")
    })
})


// Edit Route
router.get("/:id/edit", (req,res) => {
    const id = req.params.id
    Animal.findById(id)
    .then((animal) => {
        res.render("animals/edit.ejs", { animal } )
    })
    .catch (err => console.log(eff))
})

// Update Route
router.put ("/:id", (req, res) => {
    // get the id from the params
    const id = req.params.id

    // check if extinct should be true or false
    req.body.extinct = req.body.extinct === "on" ? true : false;
    req.body.lifeExpectancy = parseInt(req.body.lifeExpectancy)

    // update the animal
    Animal.findByIdAndUpdate(id, req.body, {new: true}, (err, animal)  => {
        // redirect use back to main page when animal
        res.redirect("/animals")
    })
})

//  get a show route
router.get("/:id", (req, res) => {
    // get the id from the params
    const id = req.params.id 

    Animal.findById(req.params.id)
        .then((animal) => {
            // res.json(animal)
            res.render("animals/show.ejs", { animal } )
        })
        .catch(err => console.log(err))
    })

    module.exports = router