const mongoose = require('mongoose');
const { Schema } = mongoose;

const hospitalSchema = new Schema({
    hospitalID:String,
    name:String
});

module.exports = mongoose.model("Hospital", hospitalSchema);