//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
const mongoose = require("./connection")

//----------------------------------------
//  Animals Model
//----------------------------------------
//pull schema and model from mongoose
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

//----------------------------------------
//  Export the connection
//----------------------------------------

module.exports = Animal