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


        // app.get('/fruits/:id', (req, res)=>{

            // Go and get fruit from the database
        //     Fruit.findById(req.params.id)
        //     .then((fruit)=> {
        //         res.json(fruit)
        //     })
        // })
// })

module.exports = router