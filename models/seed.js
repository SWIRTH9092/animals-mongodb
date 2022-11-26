//-------------------------------------
// Import Dependencies
//-------------------------------------

const express = require("express")
const { default: mongoose } = require("mongoose")
const Animal = require("../models/animal")

//-------------------------------------
// Seed code
//-------------------------------------

//  make sure code is not run til connected
mongoose.connection.on("open", () => {

    //---------------------------------
    //  seed code below
    //---------------------------------
    // Run any database queries in this function
    const startAnimals = [
        { species: "blue jay", extinct: false, location: "North America", lifeExpectancy: 7 },
        { species: "peacock", extinct: false, location: "Asia and Africia", lifeExpectancy: 15 },
        { species: "great horned owl", extinct: false, location: "North and South America", lifeExpectancy: 13 },
        { species: "dodo bird", extinct: true, location: "Mauritius Island", lifeExpectancy: 0 },
        { species: "penguins", extinct: false, location: "Antarctica", lifeExpectancy: 10 },
        { species: "cardinal", extinct: false, location: "North America", lifeExpectancy: 7 },
        { species: "dove", extinct: false, location: "World Wide", lifeExpectancy: 1.5 },
        { species: "robin", extinct: false, location: "North and South America", lifeExpectancy: 1.1 },
    ]
    // Delete all animals
    Animal.deleteMany({}, (err, data) => {
        // Seed Starter Animals
        Animal.create(startAnimals,(err, data) => {
            // log the create animals to confirm
            console.log("--------- ANIMALS CREATED ---------")
            console.log(data);
            console.log("--------- ANIMALS CREATED ---------")
                
        });
    });
})