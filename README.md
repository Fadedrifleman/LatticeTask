# LatticeTask
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

<div class="postman-run-button"
data-postman-action="collection/import"
data-postman-var-1="452dbe0c0ca1e17aca79"></div>
<script type="text/javascript">
  (function (p,o,s,t,m,a,n) {
    !p[s] && (p[s] = function () { (p[t] || (p[t] = [])).push(arguments); });
    !o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild((
      (n = o.createElement("script")),
      (n.id = s+t), (n.async = 1), (n.src = m), n
    ));
  }(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
</script>
    
    
 
 
