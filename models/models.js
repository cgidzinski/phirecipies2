// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
// define the schema for our user model
var recipieSchema = new mongoose.Schema({
    name: String,
    description: String,
    instructions: String,
    date: { type: Date, default: Date.now }
});
var Recipie = mongoose.model('Recipie', recipieSchema)
module.exports = {
    Recipie:Recipie
};
