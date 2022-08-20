const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const patient = require("./models/patient");
const psychaitrist = require("./models/psychiatrist");
const hospital = require('./models/hospital');
//---------------------------------------------------------------------------------------------------------------------
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

mongoose.connect("mongodb://localhost:27017/DB",{useNewUrlParser:true})
.then(()=>{
    console.log("Connected to the database");
})
.catch((err)=>{
    console.log(err);
});

const Patient = patient;
const Psychaitrist =  psychaitrist;
const Hospital =  hospital;

//================================================================================================================

const addPatient = (req, res) => {
  const NewPatient = new Patient({
    name: req.body.name,
    address: req.body.address,
    email:req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password,
    img: req.body.img,
    docID: req.body.docID,
    hospitalID: req.body.hospitalID
  });
  NewPatient.save(function(err) {
    if(!err) {
        res.send("Patient added successfully");
    } else {
        res.send(err);
    }
});
};

//================================================================================================================

const getHospitalInfo = async (req, res) => {
  const id = req.params.hID;
  // const psyInfo = {
  //   id: String,
  //   name: String,
  //   patientCount : Number
  // }
  const info = {
    hospitalName: String,
    patientCount: Number,
    psychiatristCount: Number,
    psychiatristDetail: []
  }


  // HName querry---------------------------------------------------------
  await Hospital.findOne({ hospitalID: id}).select('name -_id')
  .then(doc => {
    info.hospitalName = doc.name;
  })
  .catch(err => {
    console.log(err);
  });



  //patientCount querry----------------------------------------------------------------------

  info.patientCount = await Patient.find({ hospitalID: id}).count()
  .then(docCount => {
    return docCount
  })
  .catch(err => {
      console.log(err);
  });

  //psychiatristCount querry----------------------------------------------------------------------

  info.psychiatristCount = await Psychaitrist.find({ hospitalID: id}).count()
  .then(docCount => {
    return docCount
  })
  .catch(err => {
      console.log(err);
  });
  
  //Psy details querry--------------------------------------------------------------------------

  await  Psychaitrist.find({ hospitalID: id}).then(async(obj) => {
    const a = [];
      for(let i=0; i<obj.length; i++){
        const psyInfo = {
          id: obj[i].DocID,
          name:  obj[i].name,
          patientCount : await Patient.find({ docID: obj[i].DocID}).count()
          .then(Count => {
            return (Count);
            
          })
          .catch(err => {
              console.log(err);
          })
        };
        info.psychiatristDetail[i] = psyInfo;
  }});
  res.send(info);
};

//=================================================================================================

app.route("/add").post(addPatient);
app.route("/HospitalInfo/:hID").get(getHospitalInfo);


let port = process.env.PORT;
if(port == null || port == '') {
  port = 3000;
}

app.listen(port, function () {
  console.log(`Server has started successfully at port : ${port}`);
});