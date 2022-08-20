# LatticeTask
Scenario

We have a platform where psychiatrists can register their patients through a mobile/ web portal. Each psychiatrist belongs to a hospital. We have provided the hospital list on the last page.(predefined list). 

Minimum 5 psychiatrists work in a single hospital.

Assignment

 1- Create RESTful APIs for the 2 below cases - 

  A new patient registration, form fields are provided below. 

  Patient details should contain the following with validation at the backend:
  Name* 

  Address* (should be at least 10 characters)

  Email* (should be a valid email address)

  Phone number (should be at least 10 number + country code)

  Password* (must contain one upper character, one lower character and a number. Max length 15 and min length 8)

  Patient Photo* 


2- Fetch all the psychiatrists, their count along with IDs and patient details for a hospital.  Assume in the request body the frontend will pass HOSPITAL ID. 

  API response should be as expected below, , 

 Hospital name,  
 
 Total Psychiatrist count 
 
 Total patients count
 
 Psychiatrist Details [
 
 Id,
 
 Name,
 
 Patients count:  
 
 ]

//-----------------------------------------------------------------------------------

 libraries/frameworks used:
 
 1- "express": "^4.18.1", Framework
 
 2- "body-parser": "^1.20.0", To get data via forms
 
 3- "mongoose": "^6.5.2" For Schema Creation and for database query
 
//----------------------------------------------------------------------------------



//----------------------------------------------------------------------------------

API endpoints details

1- to add patient:

    POST http://localhost:3000/add
    
    (body data)
    
    {
    
    "name": "Dudy",
    
    "address": "13th Street, Mary Apratments, LA",
    
    "email": "foo@bar.com",
    
    "phoneNumber": "+917784558458",
    
    "password": "FooBar@123",
    
    "img": "img.com/url",
    
    "docID": "PSY102",
    
    "hospitalID": "H001"
    
    }
    
  
2- to view hospital details:

    GET http://localhost:3000/HospitalInfo/:hID
    
//----------------------------------------------------------------------------------



//----------------------------------------------------------------------------------

[Postman Collection Link](https://www.postman.com/cloudy-moon-408565/workspace/lattice-api) : https://www.postman.com/cloudy-moon-408565/workspace/lattice-api
    
    
 
 
