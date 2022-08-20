const mongoose = require('mongoose');
const { Schema } = mongoose;

const psychaitristSchema = new Schema({
    hospitalID:String,
    DocID:String,
    name:String
});

module.exports = mongoose.model("Psychaitrist", psychaitristSchema);