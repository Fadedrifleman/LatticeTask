const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator'); 

const valid= (id) =>{
    return id.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/) ? true : false;
   }

const patientSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true,
        min:10
    },
    email:{
        type:String,
        required:true,
        //validate: [ validator.isEmail, 'invalid email']
    },
    phoneNumber:{
        type:String,
        //validate:[ validator.isMobliePhone, 'invalid number']
    },
    password:{
        type:String,
        min:8,
        max:15,
        required:true,
        validate:[ valid, 'Password must contain one upper character, one lower character and a number. Max length 15 and min length 8'],
        match:[/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,  'Password must contain one upper character, one lower character and a number. Max length 15 and min length 8']
    },
    img:{ 
        type:String,
        required:true
    },
    docID:{
        type:String,
        required:true
    },
    hospitalID:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Patient", patientSchema);