import mongoose from 'mongoose'
let fakery = require('mongoose-fakery')
const Schema = mongoose.Schema
let MySchema = new Schema({
    name: String
})

let MyModel = mongoose.model('MyModel', MySchema)
let fake = fakery.make('MyModel')
console.log(fake)